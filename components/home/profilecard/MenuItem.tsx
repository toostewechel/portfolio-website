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
  color: "$mauve10",

  "&:hover": {
    transition: "background 150ms ease-out",
    backgroundColor: "$olive3",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "$olive3",
  },
  "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "$olive3",
    color: "$mauve12",
  },
});

interface MenuItemProps {
  href: string;
  label: string;
}

function MenuItem({ href, label }: MenuItemProps) {
  return <Link href={href}>{label}</Link>;
}

export default MenuItem;
