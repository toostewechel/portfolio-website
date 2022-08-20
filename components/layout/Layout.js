import { styled } from "../../stitches.config.js";

const ContentLayout = styled("div", {
  maxWidth: "720px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

function Layout(props) {
  return <ContentLayout>{props.children}</ContentLayout>;
}

export default Layout;
