import React, { useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";

import { styled } from "../../stitches.config.js";

const CodeBlockContainer = styled("div", {
  overflowY: "visible",
  overflowX: "auto",
  width: "100%",
  maxWidth: "360px",
  mb: "$spacing-06",

  "@bp1": {
    maxWidth: "460px",
  },
  "@bp2": {
    maxWidth: "640px",
  },
  "@bp3": {
    maxWidth: "768px",
  },
});

const CodeBlockContent = styled("div", {
  fontFamily: "$mono",
  fontSize: "$sm",
  borderRadius: "2px",
  minWidth: "fit-content",
  width: "100%",
});

const getLanguage = (className) => {
  if (className) {
    const index = className.lastIndexOf("-");

    return className.slice(index + 1, className.lenght);
  }

  return "javascript";
};

export default function CodeBlock({ code, language }) {
  return (
    <CodeBlockContainer>
      <CodeBlockContent>
        <Highlight
          theme={themes.duotoneLight}
          code={code.trim()}
          language={getLanguage(language)}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span style={{ paddingLeft: "8px" }}>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CodeBlockContent>
    </CodeBlockContainer>
  );
}
