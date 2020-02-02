import React, { useState } from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
import { SnippetAnimator } from "../components/SnippetAnimator";
import { LinkList } from "../components/LinkList";
import "../styles/index.css";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const [showMenu, setShowMenu] = useState(false);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const nextIndex =
    data.allMarkdownRemark.edges.findIndex(
      edge => edge.node.frontmatter.title === frontmatter.title
    ) + 1;
  const nextPage = data.allMarkdownRemark.edges[nextIndex];
  const snippets = parser(html);
  return (
    <div className="layout">
      <header>
        <h1>TypeOfNaN Tutorials</h1>
        <button
          className="navicon small-only"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          Menu
        </button>
      </header>
      <Helmet>
        <meta charSet="utf-8" />
        <title>How {frontmatter.title} works | TypeOfNaN Tutorials</title>
      </Helmet>
      <div className="layout-body">
        <SnippetAnimator
          snippets={snippets}
          description={frontmatter.description}
          title={frontmatter.title}
          nextPage={nextPage}
          doclink={frontmatter.ref}
        />
        <div className={`layout-nav ${showMenu ? "" : "collapsed"}`}>
          <LinkList data={data} />
        </div>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        ref
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___linkname], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            linkname
            path
            category
          }
        }
      }
    }
  }
`;
