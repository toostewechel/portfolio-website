import { styled } from "../../stitches.config.js";
import { Breadcrumbs, BreadcrumbItem } from "../breadcrumbs/Breadcrumbs.js";
import { ArrowRight, ArrowLeft } from "lucide-react";

const NavBarContainer = styled("div", {
  width: "100%",
  maxWidth: "1720px",
  display: "none",
  justifyContent: "space-between",

  "@bp3": {
    display: "flex",
    padding: "$spacing-02 $spacing-04",
  },

  "@bp5": {
    padding: "$spacing-02 $spacing-04",
  },
  "@bp6": {
    top: 0,
    padding: "$spacing-06 $spacing-04",
  },
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexGrow: 0,
});

const Button = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-02",
  backgroundColor: "transparent",
  borderRadius: "8px",
  color: "$gray10",

  "&:hover": {
    color: "$mauve12",
  },
});

export default function NavBar({ activePageTitle }) {
  return (
    <NavBarContainer>
      <Breadcrumbs>
        <BreadcrumbItem>{activePageTitle}</BreadcrumbItem>
      </Breadcrumbs>
      <Controls>
        <Button>
          <ArrowLeft size={20} />
        </Button>
        <Button>
          <ArrowRight size={20} />
        </Button>
      </Controls>
    </NavBarContainer>
  );
}
