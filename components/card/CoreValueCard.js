import React from "react";
import { styled } from "../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronRight, ChevronDown } from "lucide-react";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
	width: "100%",
	padding: "$spacing-05",
	borderBottom: "1px solid $gray6",

	'&[data-state="open"]': {
		backgroundColor: "$gray2",
	},

	"@bp2": {
		borderBottom: 0,
		boxShadow: "none",

		'&[data-state="open"]': {
			backgroundColor: "transparent",
		},
	},
});

// Exports Collapsible Component
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;

const HeaderPanel = styled("div", {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
});

const TitleContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "4px",
});

const LabelContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "$spacing-02",
	pb: "$spacing-02",
});

const LabelIcon = styled("div", {
	width: "13px",
	height: "13px",
	borderRadius: "4px",

	variants: {
		color: {
			plum: {
				backgroundColor: "$plum11",
			},
			blue: {
				backgroundColor: "$blue11",
			},
			crimson: {
				backgroundColor: "$crimson11",
			},
			violet: {
				backgroundColor: "$violet11",
			},
			teal: {
				backgroundColor: "$teal11",
			},
			cyan: {
				backgroundColor: "$cyan11",
			},
		},
	},
});

const Label = styled("p", {
	display: "flex",
	fontSize: "$xs",
	fontWeight: "$medium",
	fontFamily: "$default",

	variants: {
		color: {
			plum: {
				color: "$plum11",
			},
			blue: {
				color: "$blue11",
			},
			crimson: {
				color: "$crimson11",
			},
			violet: {
				color: "$violet11",
			},
			teal: {
				color: "$teal11",
			},
			cyan: {
				color: "$cyan11",
			},
		},
	},
});

const ValueTitle = styled("h3", {
	fontSize: "$xl",
	fontWeight: "$black",
	fontFamily: "$header",
	lineHeight: "$none",
	letterSpacing: "$tracking-tighter",
	color: "$mauve12",
	mb: 0,

	"@bp3": {
		fontSize: "$2xl",
		mb: "$spacing-04",
	},
	"@bp4": {
		fontSize: "$3xl",
		mb: "$spacing-04",
	},
});

const CollapsibleTriggerButton = styled("button", {
	borderRadius: "4px",
	outlineOffset: "2px",
	ml: "$spacing-03",
	padding: "$spacing-02",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$violet11",
	display: "flex",

	"@bp2": {
		display: "none",
	},

	'&[data-state="closed"]': {
		backgroundColor: "white",
	},
	'&[data-state="open"]': {
		backgroundColor: "$violet3",
	},
	"&:hover": {
		backgroundColor: "$violet4",
	},
	"&:active": {
		backgroundColor: "$violet5",
	},
	"&:focus": {
		outlineColor: "$violet11",
	},
});

const ValueDescriptionBox = styled("div", {
	ml: "5px",
	p: "$spacing-02 $spacing-01",
	borderRadius: 0,
	mt: "8px",

	variants: {
		color: {
			plum: {
				borderLeft: "1px solid $plum11",

				"@bp1": {
					borderLeft: "4px solid $plum11",
					color: "$plum12",
					borderRadius: "8px",
				},
			},
			blue: {
				borderLeft: "1px solid $blue11",

				"@bp1": {
					borderLeft: "4px solid $blue11",
					color: "$blue12",
					borderRadius: "8px",
				},
			},
			crimson: {
				borderLeft: "1px solid $crimson11",

				"@bp1": {
					borderLeft: "4px solid $crimson11",
					color: "$crimson12",
					borderRadius: "8px",
				},
			},
			violet: {
				borderLeft: "1px solid $violet11",

				"@bp1": {
					borderLeft: "4px solid $violet11",
					color: "$violet12",
					borderRadius: "8px",
				},
			},
			teal: {
				borderLeft: "1px solid $teal11",

				"@bp1": {
					borderLeft: "4px solid $teal11",
					color: "$teal12",
					borderRadius: "8px",
				},
			},
			cyan: {
				borderLeft: "1px solid $cyan11",

				"@bp1": {
					borderLeft: "4px solid $cyan11",
					color: "$cyan12",
					borderRadius: "8px",
				},
			},
		},
	},
});

const ValueDescription = styled("p", {
	fontSize: "$sm",
	fontWeight: "$regular",
	fontFamily: "$default",
	lineHeight: "$base",
	letterSpacing: "$tracking-normal",
	color: "$mauve12",
	pl: "$spacing-04",

	"@bp2": {
		fontSize: "$sm",
	},
	"@bp3": {
		fontSize: "$base",
	},
});

export default function CoreValueCard({ children, ...props }) {
	const [open, setOpen] = React.useState(props.state);

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger asChild>
				<HeaderPanel>
					<TitleContainer>
						<LabelContainer>
							<LabelIcon color={props.color} />
							<Label color={props.color}>{props.label}</Label>
						</LabelContainer>
						<ValueTitle>{props.title}</ValueTitle>
					</TitleContainer>
					<CollapsibleTriggerButton>
						{open ? <ChevronDown /> : <ChevronRight />}
					</CollapsibleTriggerButton>
				</HeaderPanel>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<ValueDescriptionBox color={props.color}>
					<ValueDescription>{children}</ValueDescription>
				</ValueDescriptionBox>
			</CollapsibleContent>
		</Collapsible>
	);
}
