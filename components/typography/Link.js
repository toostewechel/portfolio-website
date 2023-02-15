import { styled } from "../../stitches.config.js";

const StyledLink = styled("a", {
  fontSize: "inherit",
  fontWeight: "$medium",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mavue12",
  backgroundImage: "linear-gradient(transparent 70%, $gray4 0%)",
  backgroundRepeat: "no-repeat",
  textDecoration: "none",
  transition: "background-position 0.2s ease 0s",
  backgroundPosition: "0% 70%",
  backgroundSize: "100% 250%",

  "@bp2": {
    fontSize: "inherit",
  },
  "&:hover": {
    color: "$mauve12",
    backgroundPosition: "0% 100%",
  },
  "&:active": {
    color: "$mauve12",
  },
  "&:visited": {
    color: "$mauve12",
  },
});

function Link(props) {
  return <StyledLink href={props.href}>{props.children}</StyledLink>;
}

export default Link;
