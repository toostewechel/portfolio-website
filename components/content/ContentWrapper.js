import { MDXProvider } from "@mdx-js/react";
import { styled } from "../../stitches.config.js";
import * as components from "../markdown/StyledMarkdown.js";

const ContentContainer = styled("div", {
  p: "$spacing-04",
  display: "flex",
  justifyContent: "center",
  m: "0 auto",
  maxWidth: "720px",
})

const ContentStyle = styled("div", {
  color: "$gray12",
  width: "100%",
})

function ContentWrapper({Content}) {
  return (
    <ContentContainer>
      <MDXProvider components={{ ...components }}>
        <ContentStyle>
          <Content />
        </ContentStyle>
      </MDXProvider>
    </ContentContainer>
  )
}

export default ContentWrapper;