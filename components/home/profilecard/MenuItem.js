import { styled } from "../../../stitches.config.js";

const Link = styled("a", {
  outlineOffset: "2px",

  "&:focus": {
    outlineColor: "$violet11",
  },
});

const Container = styled("div", {
  display: "flex",
	width: "100%",
  flexDirection: "row",
  alignItems: "center",
  padding: "$spacing-03 $spacing-04",
  borderRadius: "4px",
	willChange: "transform",
	transition: "transform 150ms ease-in, background 150ms ease-in",
	color: "$mauve9",

  "@bp1": {
    "&:hover": {
      scale: 1.01,
			color: "$mauve2",
      background: "rgba(255, 255, 255, 0.1)",
      transition: "transform 150ms ease-out, background 150ms ease-out",
      boxShadow: "$smooth",
    },
  },
  "&:active": {
    background: "rgba(255, 255, 255, 0.15)",
    scale: 1,
  },
});

const Icon = styled("div", {
  size: "$5",
  color: "white",
});

const Label = styled("p", {
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  letterSpacing: "$tracking-tight",
  
});

function MenuItem(props) {
  return (
    <Link href={props.href}>
      <Container>
        <Label>{props.label}</Label>
      </Container>
    </Link>
  );
}

export default MenuItem;
