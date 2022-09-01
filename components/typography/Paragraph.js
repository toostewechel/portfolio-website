import { styled } from "../../stitches.config.js";

const StyledParagraph = styled("p", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-wide",
  color: "$gray12",
  mb: "$spacing-07",

  variants: {
    level: {
      small: {
        fontSize: "$lg",
        lineHeight: "$base",
        mb: "$none",
      },
    },
  },

  "@bp2": {
    fontSize: "$xl",
  },
});

function Paragraph(props) {
  return (
    <StyledParagraph level={props.level}>{props.children}</StyledParagraph>
  );
}

export default Paragraph;
