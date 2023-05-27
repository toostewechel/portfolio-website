import { styled } from "../../stitches.config.js";
import React from "react";
import { Tag } from "../tag/Tag";
import { ArrowUpRight, Clock3, Clock6, Clock9 } from "lucide-react";
import { motion } from "framer-motion";
import {
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardPanel,
} from "../card/HoverCard.js";
`z`;
import { useRouter } from "next/router.js";

const WidgetContainer = styled("div", {
  gridArea: "bm",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$spacing-07",
  width: "100%",
  padding: "$spacing-05",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "16px",

  "&:hover": {
    boxShadow: "$medium",
  },
});

const BookMeetingDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-03",
  width: "100%",
});

const EventOptionsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-03",
  width: "100%",
});

const CardTitle = styled("h2", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$tight",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve12",
});

const CurrentDate = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$bold",
  lineHeight: "$compact",
  fontSize: "$lg",
  color: "$mauve12",
  marginBottom: "$spacing-02",
});

const Text = styled("p", {
  fontFamily: "$default",
  color: "$mauve10",
  fontSize: "$base",
});

const TagContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  color: "$red10",
  fontSize: "$sm",
  lineHeight: "$none",
});

const EventOptions = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-03",
});

const Icon = styled("div", {
  display: "flex",
  color: "$olive9",
  transition: "transform 100ms ease-in, color 100ms ease-in",
});

const EventOptionContainer = styled(motion.div, {
  display: "flex",
  cursor: "pointer",

  "&:hover": {
    [`${Icon}`]: {
      transform: "translateX(-10px) rotate(45deg)",
      color: "$crimson11",
    },
  },
  "&:focus": {
    [`${Icon}`]: {
      transform: "translateX(-10px) rotate(45deg)",
      color: "$crimson11",
    },
  },
});

const EventOption = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: "$spacing-03 $spacing-04",
  borderRadius: "6px",
  border: "1px solid $olive6",

  "&:hover": {
    backgroundColor: "$olive3",
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

const Box = styled("div", {
  display: "flex",
});

export const BookMeeting = () => {
  const router = useRouter();

  const eventType = {
    chat: "https://cal.com/tomoostewechel/quick-chat-session",
    problem: "https://cal.com/tomoostewechel/problem-solving-session",
    review: "https://cal.com/tomoostewechel/design-review",
  };

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
          <Tag label="Today" color="red" />
          <Label>Event Options</Label>
        </TagContainer>
        <CurrentDate>{formatCurrentDate()}</CurrentDate>
        <EventOptions>
          <EventOptionContainer
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(eventType.chat)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(eventType.chat);
              }
            }}
          >
            <EventOption>
              <ContentContainer>
                <EventOptionTitle>Quick Chat Session</EventOptionTitle>
                <Box>
                  <Tag size="sm" hasIcon={true} color="olive" label="15 Min" />
                </Box>
              </ContentContainer>
              <Icon role="presentation">
                <ArrowUpRight size={20} />
              </Icon>
            </EventOption>
          </EventOptionContainer>
          <EventOptionContainer
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(eventType.problem)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(eventType.problem);
              }
            }}
          >
            <EventOption>
              <ContentContainer>
                <EventOptionTitle>Problem Solving Session</EventOptionTitle>
                <Box>
                  <Tag size="sm" hasIcon={true} color="olive" label="30 Min" />
                </Box>
              </ContentContainer>
              <Icon role="presentation">
                <ArrowUpRight size={20} />
              </Icon>
            </EventOption>
          </EventOptionContainer>
          <EventOptionContainer
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(eventType.review)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(eventType.review);
              }
            }}
          >
            <EventOption>
              <ContentContainer>
                <EventOptionTitle>Design Review</EventOptionTitle>
                <Box>
                  <Tag size="sm" hasIcon={true} color="olive" label="45 Min" />
                </Box>
              </ContentContainer>
              <Icon role="presentation">
                <ArrowUpRight size={20} />
              </Icon>
            </EventOption>
          </EventOptionContainer>
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
