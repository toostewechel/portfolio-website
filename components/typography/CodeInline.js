import { styled } from "../../stitches.config.js";

const StyledCodeInline = styled("code", {
  backgroundColor: "$gray4",
  padding: "4px 6px",
  borderRadius: "4px",
  color: "$crimson11",
  fontFamily: "$mono",
  letterSpacing: "tracking-tight",
  fontSize: "$lg",

  "@bp2": {
    fontSize: "$lg",
  },
});

function CodeInline({code}) {
  return <StyledCodeInline>{code}</StyledCodeInline>;
}

export default CodeInline;
