import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/nord.css";
import { js as jBeautify } from "js-beautify";
import "./SnippetAnimator.css";
import { Link } from "gatsby";

let modeLoaded = false;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/javascript/javascript");
  modeLoaded = true;
}

export const SnippetAnimator = ({
  snippets,
  title,
  nextPage,
  description,
  doclink
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [contentDisplay, setContentDisplay] = useState("");
  const [typing, setTyping] = useState(false);
  const [currentInstruction, setCurrentInstruction] = useState(0);

  const { start, end, content, after } = snippets[currentIndex]
    ? snippets[currentIndex]
    : { start: "", end: "", content: "", after: "" };

  useEffect(() => {
    if (!snippets[currentIndex]) return;
    if (contentDisplay.length < content.length) {
      setTyping(true);
      setTimeout(() => {
        setContentDisplay(content.substring(0, contentDisplay.length + 1));
      }, Math.random() * 40 + 30);
    } else {
      if (typing) {
        setContentDisplay(contentDisplay => contentDisplay + (after || ""));
        setCurrentInstruction(currentInstruction => currentInstruction + 1);
      }
      setTyping(false);
    }
  }, [contentDisplay, currentIndex, content, after, typing, snippets]);

  const code = (start || "") + contentDisplay + (end || "");

  return (
    <>
      <div className="layout-content">
        <h2>How {title} works</h2>
        <p style={{ margin: "20px 0", fontSize: "18px", color: "#555" }}>
          {description}
        </p>
        <p style={{ margin: "20px 0", fontSize: "18px", color: "#555  " }}>
          Here's a simple example of how we can use {title}:
        </p>
        <ol>
          {snippets
            .filter((_, i) => i <= currentInstruction)
            .map((el, i) => (
              <li key={el.narrative}>
                <span dangerouslySetInnerHTML={{ __html: el.narrative }} />{" "}
              </li>
            ))}
        </ol>
        <button
          onClick={() => {
            setContentDisplay("");
            setCurrentIndex(currentIndex + 1);
          }}
          style={{
            visibility:
              !typing && snippets[currentIndex + 1] ? "visible" : "hidden"
          }}
        >
          Show me &raquo;
        </button>

        {nextPage && !snippets[currentIndex + 1] && (
          <>
            <hr />
            <h3>Next up:</h3>
            <Link to={nextPage.node.frontmatter.path}>
              {nextPage.node.frontmatter.title} &raquo;
            </Link>
          </>
        )}
      </div>
      <div className="layout-code">
        {modeLoaded && (
          <CodeMirror
            value={typing ? code : jBeautify(code, { indent_size: 2 })}
            options={{
              mode: "javascript",
              lineNumbers: true,
              theme: "nord",
              readOnly: "nocursor"
            }}
            onBeforeChange={() => null}
            onChange={() => null}
          />
        )}
        <p>
          This is only one example of the power of {title}. To dive deeper,
          check out{" "}
          <a href={doclink} target="_blank" rel="noopener noreferrer">
            these docs
          </a>
          !
        </p>
      </div>
    </>
  );
};
