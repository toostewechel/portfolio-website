import { styled } from "../../stitches.config.js";

const StyledParagraph = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-regular",
  color: "$mauve12",
  mb: "$spacing-07",

  "@bp2": {
    fontSize: "$lg",
  },
  "@bp3": {
    fontSize: "$bodyLarge",
  },
});

function Paragraph(props) {
  return <StyledParagraph>{props.children}</StyledParagraph>;
}

export default Paragraph;
