import { styled } from "../../stitches.config.js";

const StyledOrderedList = styled("ol", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve11",
  mb: "$spacing-07",
  paddingInlineStart: "$spacing-06",

  "@bp2": {
    fontSize: "$bodyLarge",
  },
});

function OrderedList(props) {
  return <StyledOrderedList>{props.children}</StyledOrderedList>;
}

export default OrderedList;
