import React from "react";
import { styled } from "../../stitches.config.js";
import { ArrowRight } from "lucide-react";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
	maxWidth: "1234px",
	ml: "auto",
	mr: "auto",
	mb: "$spacing-10"
})

const HeaderPanel = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "$spacing-04",
	borderRadius: "6px",
	border: "1px solid $gray6",
	backgroundColor: "$gray2",
});

const Title = styled("h3", {
	fontSize: "$lg",
	fontFamily: "$header",
	fontWeight: "$extra-bold",
	letterSpacing: "$tracking-tight",
	color: "$mauve12",
})

const Button = styled("button", {
	borderRadius: "6px",
	padding: "$spacing-02 $spacing-03",
	color: "$crimson1",
	fontFamily: "$default",
	fontWeight: "$medium",
	backgroundColor: "$crimson10",
	"&:hover": {
    backgroundColor: "$crimson11",
  },
})

const StyledCollapsibleContent = styled(CollapsiblePrimitive.Content, {
	padding: "$spacing-08 $spacing-04",
	backgroundColor: "$gray2",
	border: "1px solid $gray6",
})

const TakeawaysList = styled("ul", {
	fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  paddingInlineStart: "$spacing-07",
  listStyle: "none",
	marginLeft: "auto",
	marginRight: "auto",
});

const StyledListItem = styled("li", {
	display: "flex",
	marginLeft: "8px",
	marginBottom: "8px",
	alignItems: "flex-start",

	"&:last-child": {
			marginBottom: "0px",
	}
})

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledCollapsibleContent;

export const ListItem = ({ children }) => {
	return(
		<StyledListItem>
			<ArrowRight size={24} style={{ marginRight: "8px" }} /> 
			{children}
		</StyledListItem>
	)
}

export const KeyTakeawaysCollapsible = ({ AccentColor, children }) => {
	const [open, setOpen] = React.useState(false);
	return(
		<Collapsible open={open} onOpenChange={setOpen}>
			<HeaderPanel>
				<Title>Summary</Title>
				<CollapsibleTrigger asChild>
					<Button>{open ? "Hide" : "Open"}</Button>
				</CollapsibleTrigger>
			</HeaderPanel>
			<CollapsibleContent>
				<TakeawaysList>
					{children}
				</TakeawaysList>
			</CollapsibleContent>
		</Collapsible>
	)
}