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
  margin: "$spacing-02 $none",
  willChange: "transform",
  transition: "all, 300ms ease-in",

  "@bp1": {
    "&:hover": {
      scale: 1.02,
      background: "rgba(255, 255, 255, 0.3)",
      transition: "all, 200ms ease-out",
      boxShadow: "$smooth",
    },
  },
  "&:active": {
    backgroundColor: "$violet4",
    scale: 1,
  },
});

const Icon = styled("div", {
  size: "$5",
  color: "white",
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
