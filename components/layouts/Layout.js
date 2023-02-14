import { styled } from "../../stitches.config.js";

const ContentLayout = styled("div", {
  maxWidth: "720px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

export const BlogContentLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray2",
});

export const BlogMarkdownContentLayout = styled("div", {
  backgroundColor: "white",
  maxWidth: "1720px",
  width: "100%",
  borderRadius: "16px",
  border: "1px solid $gray6",
  pt: "$spacing-10",
  pb: "$spacing-10",
  zIndex: 0,
});

function Layout(props) {
  return <ContentLayout>{props.children}</ContentLayout>;
}

export default Layout;
