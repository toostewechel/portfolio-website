import React, { useEffect } from "react";
import Prism from "prismjs";
import { styled } from "../../stitches.config.js";

const StyledPre = styled("pre", {
  fontFamily: "$mono",
  background: "$mauve12 !important",
});

const StyledCode = styled("code", {
  fontFamily: "$header",
});

const CodeBlockContainer = styled("div", {
  mb: "$spacing-08",
});

const CodeLanguage = styled("p", {
  color: "crimsonA6",
  fontFamily: "$header",
  fontsize: "$lg",
  textAlign: "right",
  padding: "4px 8px",
  borderRadius: "4px",
  background: "$crimsonA9",
  display: "flex",
});

const FlexBox = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
});

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <CodeBlockContainer className="Code">
      <StyledPre>
        <FlexBox>
          <CodeLanguage>{language}</CodeLanguage>
        </FlexBox>
        <StyledCode className={`language-${language}`}>{code}</StyledCode>
      </StyledPre>
    </CodeBlockContainer>
  );
}
