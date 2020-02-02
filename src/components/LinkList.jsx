import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";
import "./LinkList.css";

export function LinkList({ data, currentPath }) {
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
  return (
    <Menu vertical>
      {multilevelLinks.map(links => {
        return (
          <Menu.Item>
            <Menu.Header>{links[0]}</Menu.Header>
            <Menu.Menu>
              {links[1].map(link => {
                return (
                  <Menu.Item key={link.path}>
                    {currentPath !== link.path ? (
                      <Link to={link.path}>{link.name}</Link>
                    ) : (
                      link.name
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Menu>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
