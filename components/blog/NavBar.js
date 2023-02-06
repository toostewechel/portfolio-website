import { styled } from "../../stitches.config.js";
import { Breadcrumbs, BreadcrumbItem } from "../breadcrumbs/Breadcrumbs.js";
import { ArrowRight, ArrowLeft } from "lucide-react";

const NavBarWrapper = styled('div', {
	width: "100%",
	maxWidth: "1720px",
	padding: "$spacing-04",
	display: "flex",
	justifyContent: "space-between",
	position: "sticky",
	top: 80,
	backgroundColor: "$gray2",
	zIndex: 999,
	
	"@bp5": {
    padding: "$spacing-05",
		top: 0,
  },
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