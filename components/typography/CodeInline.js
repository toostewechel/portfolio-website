import { styled } from "../../stitches.config.js";

const StyledCodeInline = styled("code", {
  backgroundColor: "$gray4",
  padding: "3px 6px",
  borderRadius: "4px",
  color: "$crimson11",
  fontFamily: "$mono",
  letterSpacing: "tracking-tight",
  fontSize: "$base",

  "@bp2": {
    fontSize: "$lg",
  },
  "@bp3": {
    fontSize: "$base",
  },
});

function CodeInline({ code }) {
  return <StyledCodeInline>{code}</StyledCodeInline>;
}

export default CodeInline;
