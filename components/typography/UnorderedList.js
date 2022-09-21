import { styled } from "../../stitches.config.js";

const StyledUnorderedList = styled("ul", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  mb: "$spacing-07",
  paddingInlineStart: "$spacing-07",
  listStyle: "disc",

  "@bp2": {
    fontSize: "$bodyLarge",
  },
});

function UnorderedList(props) {
  return <StyledUnorderedList>{props.children}</StyledUnorderedList>;
}

export default UnorderedList;
