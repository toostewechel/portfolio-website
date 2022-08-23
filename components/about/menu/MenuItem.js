import { styled } from "../../../stitches.config.js";

const Link = styled("a", {
  outlineOffset: "2px",

  "&:focus": {
    outlineColor: "$violet11",
  },
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
  p: "$spacing-04",
  borderRadius: "4px",
  border: "1px solid transparent",
  margin: "$spacing-02 $none",
  willChange: "transform",
  transition: "transform 300ms ease-in, background 300ms ease-in, scale 300ms ease-in",


  "@bp1": {
    "&:hover": {
      scale: 1.02,
      backgroundColor: "$white",
      transition: "transform 300ms ease-out, background 300ms ease-out, scale 300ms ease-out",
      border: "1px solid $violet4",
      boxShadow: "$smooth",
    },
  },
  "&:active": {
    backgroundColor: "$violet4",
  },
});

const Icon = styled("div", {
  size: "$5",
});

const Label = styled("p", {
  fontSize: "$lg",
  fontWeight: "$semi-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$violet11",
  mt: "$spacing-01",
});

function MenuItem(props) {
  return (
    <Link href={props.href}>
      <Container>
        <Icon>
          <img src={props.src} />
        </Icon>
        <Label>{props.label}</Label>
      </Container>
    </Link>
  );
}

export default MenuItem;
