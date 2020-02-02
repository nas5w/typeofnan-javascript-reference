import React from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
import { SnippetAnimator } from "../components/SnippetAnimator";
import { LinkList } from "../components/LinkList";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const snippets = parser(html);
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column width={3}>
          <LinkList data={data} currentPath={frontmatter.path} />
        </Grid.Column>
        <Grid.Column>
          <h1>How {frontmatter.title} works</h1>
          <SnippetAnimator snippets={snippets} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
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
