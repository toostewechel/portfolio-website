import React, { useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer"

import { styled } from "../../stitches.config.js";

const StyledPre = styled("pre", {
  fontFamily: "$mono !important",
  fontSize: "$xs",
  overflow: "hidden",

  "&::-webkit-scrollbar": {
    height: "4px !important",
  },
});

const StyledCode = styled("code", {
  fontFamily: "$mono",
});

const CodeBlockContainer = styled('div', {
  overflowY: 'visible',
  overflowX: 'auto',

  width: '100%',
})

const CodeBlockContent = styled("div", {
  fontFamily: "$mono",
  fontSize: "$xs",

  borderRadius: "2px",

  minWidth: 'fit-content',
  width: '100%',
});

const getLanguage = (className) => {
  if (className) {
    const index = className.lastIndexOf('-');

    return className.slice(index + 1, className.lenght);
  }

  return 'javascript';
}

export default function CodeBlock({ code, language }) {
  return (
    <CodeBlockContainer>
      <CodeBlockContent>
        <Highlight
          theme={themes.nightOwl}
          code={code.trim()}
          language={getLanguage(language)}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span>{i + 1}</span>
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
