import { styled } from "../../stitches.config.js";
import { Breadcrumbs, BreadcrumbItem, BreadcrumbItemLink } from "../breadcrumbs/Breadcrumbs.js";
import { ArrowRight, ArrowLeft } from "lucide-react";

const NavBarWrapper = styled('div', {
	padding: "$spacing-04",
	maxWidth: "1720px",
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
})

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

export default function NavBar({ ActivePageTitle }) {
	return(
		<NavBarWrapper>
			<Breadcrumbs>
				<BreadcrumbItem>{ActivePageTitle}</BreadcrumbItem>
			</Breadcrumbs>
			<Controls>
				<Button><ArrowLeft size={20}/></Button>
				<Button><ArrowRight size={20}/></Button>
			</Controls>
		</NavBarWrapper>
	)
}