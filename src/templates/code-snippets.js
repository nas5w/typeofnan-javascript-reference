import React from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
import { SnippetAnimator } from "../components/SnippetAnimator";
import { LinkList } from "../components/LinkList";
import "../styles/index.css";

export default function Template({ data }) {
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
        <h1>Some page title</h1>
      </header>
      <div className="layout-body">
        <SnippetAnimator
          snippets={snippets}
          title={`How ${frontmatter.title} works`}
          nextPage={nextPage}
        />
        <div className="layout-nav">
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
