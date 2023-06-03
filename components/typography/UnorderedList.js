import { styled } from "../../stitches.config.js";

const StyledUnorderedList = styled("ul", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$large",
  letterSpacing: "$tracking-normal",
  color: "$mauve11",
  mb: "$spacing-07",
  paddingInlineStart: "$spacing-06",
  listStyle: "disc",

  "@bp2": {
    fontSize: "$lg",
  },
});

function UnorderedList(props) {
  return <StyledUnorderedList>{props.children}</StyledUnorderedList>;
}

export default UnorderedList;
