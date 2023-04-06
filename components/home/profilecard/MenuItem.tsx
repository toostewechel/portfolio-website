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
  padding: "$spacing-03 $spacing-02",
  borderRadius: "4px",
  willChange: "transform",
  transition: "transform 150ms ease-in, background 150ms ease-in",
  color: "$mauve11",

  "@bp1": {
    "&:hover": {
      scale: 1.01,
      color: "$mauve12",
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

const Label = styled("p", {
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  letterSpacing: "$tracking-tight",
});

interface MenuItemProps {
  href: string;
  label: string;
}

function MenuItem({ href, label }: MenuItemProps) {
  return (
    <Link href={href}>
      <Container>
        <Label>{label}</Label>
      </Container>
    </Link>
  );
}

export default MenuItem;
