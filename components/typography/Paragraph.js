import { styled } from "../../stitches.config.js";

const StyledParagraph = styled("p", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  mb: "$spacing-07",

  "@bp2": {
    fontSize: "$xl",
  },
});

function Paragraph(children) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
