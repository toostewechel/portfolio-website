import { styled } from "../../stitches.config.js";
import { Home } from "lucide-react";

const BreadcrumbsContainer = styled("nav", {
	display: "flex",
	width: "100%",
});

const BreadcrumbsList = styled("ol", {
	listStyle: "none",
	display: "flex",
	alignItems: "center",
	paddingInlineStart: "0px",
});

const StyledBreadcrumbItem = styled("li", {
	display: "inline-flex",
	alignItems: "center",
	fontSize: "$sm",
	fontFamily: "$default",
	fontWeight: "$medium",
	color: "$gray10",
	mb: 0,

	"&:not(:last-child):after":{
		content: "/",
		padding: "12px",
		color: "$mauve11",
	},

	"&:last-child": {
		color: "$mauve12",
		textDecoration: "underline",
	}
});

const StyledBreadcrumbItemLink = styled("a", {
	display: "inline-flex",
	alignItems: "center",
	color: "$gray10",
	textDecoration: "none",

	"&:hover": {
		color: "$gray12",
	},
	"&:active": {
		color: "$gray11",
		textDecoration: "underline",
	},
});

const Icon = styled("span", {
	marginRight: "$spacing-03",
})

export const BreadcrumbItem = StyledBreadcrumbItem;
export const BreadcrumbItemLink = StyledBreadcrumbItemLink;

export const Breadcrumbs = ({ children }) => {
	return (
		<BreadcrumbsContainer aria-label="Breadcrumb" >
			<BreadcrumbsList>
				<BreadcrumbItem>
					<BreadcrumbItemLink href="/"> <Icon><Home size={20} /></Icon> Home</BreadcrumbItemLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
						Blog Posts
				</BreadcrumbItem>
				{children}
			</BreadcrumbsList>
		</BreadcrumbsContainer>
	)
}