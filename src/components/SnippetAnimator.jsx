import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/nord.css";
import { js as jBeautify } from "js-beautify";
import "codemirror/mode/javascript/javascript";
import "./SnippetAnimator.css";
import { Link } from "gatsby";

export const SnippetAnimator = ({ snippets, title, nextPage }) => {
  console.log(nextPage);

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
      }, Math.random() * 40 + 70);
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
        <h2>{title}</h2>
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
      </div>
    </>
  );
};
