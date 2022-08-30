import { MDXProvider } from "@mdx-js/react";
import { styled } from "../../stitches.config.js";
import * as components from "../markdown/StyledMarkdown.js";

const ContentContainer = styled("div", {
  p: "$none $spacing-04",
  m: "0 auto",
  maxWidth: "760px",
});

const ContentStyle = styled("div", {
  color: "$gray12",
  width: "100%",
});

function ContentBlock({ Content }) {
  return (
    <ContentContainer>
      <MDXProvider components={{ ...components }}>
        <ContentStyle>
          <Content />
        </ContentStyle>
      </MDXProvider>
    </ContentContainer>
  );
}

export default ContentBlock;
