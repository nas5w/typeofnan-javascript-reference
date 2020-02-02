import React, { useState } from "react";
import { Button, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "gatsby";
import "./LinkList.css";

export function LinkList({ data, menuOpen, closeMenu, currentPath }) {
  const [open, setOpen] = useState({});

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
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={menuOpen}
      width="thin"
    >
      <Menu.Item className="centered">
        <Button secondary onClick={closeMenu}>
          Close [X]
        </Button>
      </Menu.Item>
      {multilevelLinks.map(links => {
        return (
          <>
            <Menu.Item
              as="a"
              onClick={() => {
                setOpen(open => ({ ...open, [links[0]]: !open[links[0]] }));
              }}
            >
              {links[0]}{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: open[links[0]] ? "&#11167" : "&#11166"
                }}
              />
            </Menu.Item>
            {open[links[0]] &&
              links[1].map(link => {
                return (
                  <Menu.Item
                    as={currentPath === link.path ? "span" : Link}
                    to={link.path}
                  >
                    <span
                      style={{
                        fontWeight:
                          currentPath === link.path ? "bold" : "normal"
                      }}
                    >
                      {link.name}
                    </span>
                  </Menu.Item>
                );
              })}
          </>
        );
      })}
    </Sidebar>
  );
}
