import { styled } from "../../../stitches.config.js";

const Link = styled("a", {
  width: "100%",
  padding: "$spacing-04 $spacing-03",
  borderRadius: "4px",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  letterSpacing: "$tracking-tight",
  lineHeight: "$none",
  color: "$mauve11",

  "&:hover": {
    transition: "background 150ms ease-out",
    backgroundColor: "rgba(0,0,0, 0.05)",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "rgba(0,0,0, 0.1)",
    color: "$mauve12",
  },
});

const Container = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
});

const Label = styled("p", {});

interface MenuItemProps {
  href: string;
  label: string;
}

function MenuItem({ href, label }: MenuItemProps) {
  return <Link href={href}>{label}</Link>;
}

export default MenuItem;
