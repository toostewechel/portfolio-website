import { styled } from "../../stitches.config.js";
import { Breadcrumbs, BreadcrumbItem } from "../breadcrumbs/Breadcrumbs.js";
import { ArrowRight, ArrowLeft } from "lucide-react";

const NavBarContainer = styled('div', {
	width: "100%",
	maxWidth: "1720px",
	display: "none",
	justifyContent: "space-between",
	position: "sticky",
	backgroundColor: "$gray2",
	zIndex: 9999,
	borderBottom: "1px solid $gray6",
	borderTop: "1px solid $gray6",

	"@bp3": {
		display: "flex",
		padding: "$spacing-02 $spacing-04",
		borderBottom: "1px solid $gray6",
		borderTop: "1px solid $gray6",
		top: 88,
	},
	
	"@bp5": {
    padding: "$spacing-06 $spacing-04",
		borderBottom: "1px solid transparent",
		borderTop: "1px solid transparent",
  },
	"@bp6": {
		top: 0,
	}
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
		<NavBarContainer>
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