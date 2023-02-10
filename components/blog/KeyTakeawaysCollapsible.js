import { styled } from "../../stitches.config.js";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
	width: "100%";
})

const HeaderPanel = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "$spacing-02",
	borderRadius: "6px",
	border: "1px solid $gray6",
	backgroundColor: "$gray2",
});

const Title = styled("h3", {
	fontSize: "$lg",
	fontFamily: "header",
	fontWeight: "$extra-bold",
	letterSpacing: "$tracking-tight",
	color: "$mauve12",
})

const Button = styled("button", {
	borderRadius: "6px",
	padding: "$spacing-03",
	color: "$crimson1",
	backgroundColor: "$crimson10",
	"&:hover": {
    backgroundColor: "$violet4",
  },
})

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;

export default function KeyTakeawaysCollapsible({ AccentColor, children }) {
	const [open, setOpen] = React.useState(false);
	return(
		<Collapsible open={open} onOpenChange={setOpen}>
			<HeaderPanel>
				<Title>Summary</Title>
				<CollapsibleTrigger asChild>
					<Button>{open ? "Close" : "Open"}</Button>
				</CollapsibleTrigger>
			</HeaderPanel>
			<CollapsibleContent>
				
			</CollapsibleContent>
		</Collapsible>
	)
}