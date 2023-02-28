import { styled } from "../../stitches.config.js";
import React from "react";
import { Tag } from "../tag/Tag";
import { ArrowUpRight, Clock3, Clock6, Clock9 } from "lucide-react";
import {
	HoverCardRoot,
	HoverCardTrigger,
	HoverCardPanel,
} from "../card/HoverCard.js";

const WidgetContainer = styled("div", {
	gridArea: "bm",
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-07",
	width: "100%",
	padding: "$spacing-05",
	backgroundColor: "white",
	boxShadow: "$small",
	borderRadius: "16px",

	"&:hover": {
		boxShadow: "$medium",
	},
});

const BookMeetingDescription = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-04",
	width: "100%",
});

const EventOptionsContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-03",
	width: "100%",
});

const CardTitle = styled("h3", {
	fontFamily: "$header",
	fontWeight: "$extra-bold",
	lineHeight: "$compact",
	letterSpacing: "$tracking-tight",
	fontSize: "$xl",
	color: "$mauve12",
});

const CurrentDate = styled("h4", {
	fontFamily: "$header",
	fontWeight: "$extra-bold",
	lineHeight: "$compact",
	fontSize: "$lg",
	color: "$mauve12",
});

const Text = styled("p", {
	fontFamily: "$default",
	color: "$mauve12",
	fontSize: "$base",
});

const TagContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "$spacing-04",
});

const Label = styled("p", {
	fontFamily: "$default",
	fontWeight: "$medium",
	color: "$red10",
	fontSize: "$sm",
});

const EventOptions = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-03",
});

const EventOption = styled("a", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
	padding: "$spacing-03 $spacing-04",
	borderRadius: "6px",
	border: "1px solid $olive6",

	"&:hover": {
		backgroundColor: "$olive2",
		border: "1px solid $olive6",
	},
});

const ContentContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-02",
});

const EventOptionTitle = styled("p", {
	fontFamily: "$default",
	fontWeight: "$medium",
	color: "$mauve12",
	fontSize: "$sm",
});

const Icon = styled("div", {
	display: "flex",
	color: "$mauve11",
});

function formatCurrentDate() {
	let year = new Date().getFullYear();
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const date = new Date();
	return `${monthNames[date.getMonth()]} ${date.getDate()}, ${year}`;
}

//Custom Component
const PoweredByBadge = styled("a", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$mauve9",
	transition: "background 300ms ease-in",
	background: "transparent",
	padding: "$spacing-03",
	borderRadius: "6px",
	border: "1px solid transparent",
	fontFamily: "$default",
	fontSize: "$xs",

	"&:hover": {
		transition: "background 300ms ease-out",
		backgroundColor: "$olive2",
		border: "1px solid $olive4",
	},
});

export const BookMeeting = () => {
	return (
		<WidgetContainer>
			<BookMeetingDescription>
				<CardTitle>Focus on Meeting, Not Making Meetings.</CardTitle>
				<Text>
					Schedule a meeting with me without the email tennis. Click on one of
					the event options to directly book a meeting with me that works for us
					both.
				</Text>
			</BookMeetingDescription>
			<EventOptionsContainer>
				<TagContainer>
					<Tag label="Today" fontStyle="uppercase" color="red" />
					<Label>Event Options</Label>
				</TagContainer>
				<CurrentDate>{formatCurrentDate()}</CurrentDate>
				<EventOptions>
					<EventOption>
						<ContentContainer>
							<EventOptionTitle>Quick Chat Session</EventOptionTitle>
							<div>
								<Tag
									size="sm"
									hasIcon={true}
									Icon={<Clock3 size={13} />}
									color="gray"
									label="15 Min"
								/>
							</div>
						</ContentContainer>
						<Icon>
							<ArrowUpRight size={24} />
						</Icon>
					</EventOption>
					<EventOption>
						<ContentContainer>
							<EventOptionTitle>Problem Solving Session</EventOptionTitle>
							<div>
								<Tag
									size="sm"
									hasIcon={true}
									Icon={<Clock6 size={13} />}
									color="gray"
									label="30 Min"
								/>
							</div>
						</ContentContainer>
						<Icon>
							<ArrowUpRight size={24} />
						</Icon>
					</EventOption>
					<EventOption>
						<ContentContainer>
							<EventOptionTitle>Design Review</EventOptionTitle>
							<div>
								<Tag
									size="sm"
									hasIcon={true}
									Icon={<Clock9 size={13} />}
									color="gray"
									label="45 Min"
								/>
							</div>
						</ContentContainer>
						<Icon>
							<ArrowUpRight size={24} />
						</Icon>
					</EventOption>
				</EventOptions>
			</EventOptionsContainer>
			<HoverCardRoot>
				<HoverCardTrigger asChild>
					<PoweredByBadge href="https://cal.com/" target="_blank">
						<p>Powered by Cal.com </p>
					</PoweredByBadge>
				</HoverCardTrigger>
				<HoverCardPanel
					logo="/avatar/cal-com.png"
					title="Cal.com"
					socialHandle="@calcom"
					description="Cal.com is the scheduling platform that is open-source, white-label, privacy-first and developer-friendly."
					followingCount="76"
					followersCount="4,77K"
				/>
			</HoverCardRoot>
		</WidgetContainer>
	);
};
