import React from "react";
import { styled } from "../../stitches.config.js";
import ShareToPopover from "../popover/ShareToPopover.js";
import { ReadingProgress } from "../readingprogress/ReadingProgress.js";
import { useMediaQuery } from "react-responsive";
import { X } from "lucide-react";
import {
	Provider,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../tooltip/Tooltip.js";

const Container = styled("header", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "$spacing-04",
	position: "sticky",
	top: 0,
	zIndex: 99,

	"@bp5": {
		padding: "$spacing-05",
	},
});

const ImageLink = styled("a", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "196px",
});

const Controls = styled("div", {
	display: "flex",
	flexDirection: "row",
});

const StyledLogo = styled("img", {
	width: "100%",
	height: "auto",
});

const IconLink = styled("a", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "6px",
	color: "$mauve11",
	padding: "$spacing-04",
	transition: "background 300ms ease-in",
	background: "transparent",
	border: "2px solid transparent",
	outline: 0,
	ml: "$spacing-02",

	"&:hover": {
		transition: "background 300ms ease-out",
		border: "2px solid transparent",
		backgroundColor: "$mauve2",
		color: "$mauve12",
	},
	"&:active": {
		backgroundColor: "$mauve3",
	},
	"&:focus": {
		transition: "background 300ms ease-out",
		backgroundColor: "$mauve2",
		border: "2px solid $blue11",
		color: "$mauve12",
	},
});

export default function Header({ whatsapp, facebook, twitter, linkedin, targetRef, gradient }) {
	const contentWidth = useMediaQuery({ minWidth: 1720 });
	return (
		<Container style={{ backgroundColor: contentWidth ? "transparent" : "white", }}>
			<ImageLink href="/">
				<StyledLogo src="/logo/logo.png" />
			</ImageLink>
			<Controls>
				<ShareToPopover
					whatsapp={whatsapp}
					facebook={facebook}
					twitter={twitter}
					linkedin={linkedin}
				/>
				<ReadingProgress
					targetRef={targetRef}
					gradient={gradient}
				/>
				<Provider>
					<Tooltip>
						<TooltipTrigger asChild>
							<IconLink href="/" aria-label="Close">
								<X size={20} />
							</IconLink>
						</TooltipTrigger>
						<TooltipContent sideOffset={4}>Close</TooltipContent>
					</Tooltip>
				</Provider>
			</Controls>
		</Container>
	);
}
