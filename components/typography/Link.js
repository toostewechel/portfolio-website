import { styled } from "../../stitches.config.js";

const StyledLink = styled("a", {
  fontSize: "$lg",
  fontWeight: "$semi-bold",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$violet10",

  "@bp2": {
    fontSize: "$xl",
  },
  "&:hover": {
    color: "$violet11",
    borderBottom: "3px dotted $violet11",
  },
  "&:active": {
    color: "$violet11",
  },
  "&:visited": {
    color: "$violet11",
  },
});

function Link(props) {
  return <StyledLink href={props.href}>{props.children}</StyledLink>;
}

export default Link;
