import { styled } from "../../stitches.config.js";

const StyledBlockquote = styled("blockquote", {
  pl: "$spacing-04",
  pt: "$spacing-08",
  pb: "$spacing-08",
  zIndex: "3",

  "&::before": {
    content: "“",
    position: "relative",
    height: "0px",
    lineHeight: "0px",
    display: "inherit",
    top: "80px",
    left: "-42px",
    zIndex: -1,
    color: "$gray3",
    fontFamily: "$header",
    letterSpacing: "$tracking-tighter",
    fontSize: "232px",

    "@bp3": {
      left: "-42px",
      fontSize: "232px",
    },
    "@bp4": {
      top: "96px",
      left: "-64px",
      fontSize: "264px",
    },
  },

  "& > p": {
    fontFamily: "$header",
    fontSize: "$xl",
    fontWeight: "$bold",
    lineHeight: "$tight",
    letterSpacing: "$tracking-tighter",
    color: "$mauve12",
    maxWidth: "640px",
    zIndex: "3",
    marginBottom: "$spacing-04",

    "@bp4": {
      fontSize: "$2xl",
    },
  },

  "& > cite": {
    fontSize: "$base",
    fontFamily: "$default",
    color: "$mauve10",

    "@bp4": {
      fontSize: "$lg",
    },
  },
});

export default function QuoteBlock({ quote, cite }) {
  return (
    <StyledBlockquote>
      <p>{quote}</p>
      <cite>{cite}</cite>
    </StyledBlockquote>
  );
}
