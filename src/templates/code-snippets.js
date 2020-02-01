import React from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(parser(html));
  return (
    <div className="snippet-container">
      <div className="snippet">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.path}</h2>
        <div
          className="snippet-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
  }
`;
