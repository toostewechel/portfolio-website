import React, { useEffect } from "react";
import Prism from "prismjs";
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

const CodeBlockContainer = styled("div", {
  mb: "$spacing-06",
  borderRadius: "2px",
});

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <CodeBlockContainer className="Code">
      <StyledPre>
        <StyledCode className={`language-${language}`}>{code}</StyledCode>
      </StyledPre>
    </CodeBlockContainer>
  );
}
