import { styled } from "../../stitches.config.js";

const StyledLink = styled("a", {
  fontSize: "$lg",
  fontWeight: "$medium",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$violet11",
  backgroundImage: "linear-gradient(transparent 70%, $yellow5 0%)",
  backgroundRepeat: "no-repeat",
  textDecoration: "none",
  transition: "background-position 0.2s ease 0s",
  backgroundPosition: "0% 70%",
  backgroundSize: "100% 250%",
  
  "@bp2": {
    fontSize: "$bodyLarge",
  },
  "&:hover": {
    color: "$violet11",
    backgroundPosition: "0% 100%",
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
