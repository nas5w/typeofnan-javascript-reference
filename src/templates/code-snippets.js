import React, { useState } from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
import { SnippetAnimator } from "../components/SnippetAnimator";
import { LinkList } from "../components/LinkList";
import "semantic-ui-css/semantic.min.css";
import { Segment, Sidebar, Button } from "semantic-ui-react";

export default function Template({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const snippets = parser(html);
  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <LinkList
          data={data}
          menuOpen={menuOpen}
          currentPath={frontmatter.path}
          closeMenu={() => {
            setMenuOpen(false);
          }}
        />
        <Sidebar.Pusher>
          <Segment basic>
            <div className="snippet-container">
              <div className="snippet">
                <Button
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                >
                  Menu
                </Button>
                <h1>How {frontmatter.title} works</h1>
                <SnippetAnimator snippets={snippets} />
              </div>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
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
