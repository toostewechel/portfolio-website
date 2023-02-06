import { styled } from "../../stitches.config.js";
import { Breadcrumbs, BreadcrumbItem } from "../breadcrumbs/Breadcrumbs.js";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const NavBarContainer = styled('div', {
	width: "100%",
	maxWidth: "1720px",
	padding: "$spacing-04",
	display: "none",
	justifyContent: "space-between",
	position: "sticky",
	backgroundColor: "$gray2",
	zIndex: 9999,
	borderBottom: "1px solid $gray6",
	borderTop: "1px solid $gray6",

	"@bp3": {
		display: "flex",
		borderBottom: "1px solid $gray6",
		borderTop: "1px solid $gray6",
	},
	
	"@bp5": {
    padding: "$spacing-05",
		borderBottom: "1px solid transparent",
		borderTop: "1px solid transparent",
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
	const contentWidth = useMediaQuery({ minWidth: 2200 });
	return(
		<NavBarContainer style={{ top: contentWidth ? 0 : 88, }}>
			<Breadcrumbs>
				<BreadcrumbItem>{ActivePageTitle}</BreadcrumbItem>
			</Breadcrumbs>
			<Controls>
				<Button><ArrowLeft size={20}/></Button>
				<Button><ArrowRight size={20}/></Button>
			</Controls>
		</NavBarContainer>
	)
}