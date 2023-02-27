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
    top: "96px",
    left: "-32px",
    zIndex: -1,
    color: "$gray3",
    fontFamily: "$header",
    letterSpacing: "$tracking-tighter",
    fontSize: "264px",

    "@bp2": {
      left: "-64px",
    },
  },

  "& > p": {
    fontFamily: "$header",
    fontSize: "$xl",
    fontWeight: "$bold",
    lineHeight: "$compact",
    letterSpacing: "$tracking-tighter",
    color: "$mauve12",
    maxWidth: "640px",
    zIndex: "3",

    "@bp2": {
      fontSize: "$2xl",
    },
  },

  "& > cite": {
    fontSize: "$lg",
    fontFamily: "$default",
    color: "$gray9",
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
