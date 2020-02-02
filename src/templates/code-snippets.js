import React, { useState } from "react";
import { graphql } from "gatsby";
import { parser } from "../utils/parser";
import { SnippetAnimator } from "../components/SnippetAnimator";
import { LinkList } from "../components/LinkList";
import "semantic-ui-css/semantic.min.css";
import { Segment, Sidebar, Container, Menu } from "semantic-ui-react";

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
            <Menu pointing secondary>
              <Menu.Item>
                <h2>How stuff works</h2>
              </Menu.Item>
              <Menu.Item name="menu" onClick={() => setMenuOpen(true)}>
                Menu
              </Menu.Item>
            </Menu>
            <Container fluid>
              <h1>How {frontmatter.title} works</h1>
              <SnippetAnimator snippets={snippets} />
            </Container>
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
