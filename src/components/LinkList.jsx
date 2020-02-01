import React from "react";
import { graphql, Link } from "gatsby";
import { parser } from "../utils/parser";

export function LinkList({ data }) {
  const links = data.allMarkdownRemark.edges.map(edge => {
    return {
      name: edge.node.frontmatter.linkname,
      path: edge.node.frontmatter.path,
      category: edge.node.frontmatter.category
    };
  });
  const multilevelLinks = Object.entries(
    links.reduce((acc, link) => {
      if (!acc[link.category]) acc[link.category] = [];
      acc[link.category].push(link);
      return acc;
    }, {})
  );
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const snippets = parser(html);
  return (
    <div>
      <ul>
        {multilevelLinks.map(links => {
          return (
            <li>
              {links[0]}
              <ul>
                {links[1].map(link => {
                  return (
                    <li key={link.path}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const pageQuery = graphql`
  query {
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