import React from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
import { SnippetAnimator } from "../components/SnippetAnimator";
import { LinkList } from "../components/LinkList";
export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const snippets = parser(html);
  return (
    <>
      <LinkList data={data} />
      <div className="snippet-container">
        <div className="snippet">
          <h1>How {frontmatter.title} works</h1>
          <SnippetAnimator snippets={snippets} />
        </div>
      </div>
    </>
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
            linkname
            path
            category
          }
        }
      }
    }
  }
`;