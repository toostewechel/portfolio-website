import { styled } from "../../stitches.config.js";
import React, { useRef, useEffect, useState } from "react";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import CardHeader from "../card/CardHeader.js";
import TimelineCard from "../card/TimelineCard.js";

const TimelineWrapper = styled("div", {
  maxWidth: "1234px",
  margin: "0 auto",
  padding: "$spacing-05",
});

const TimelineItems = styled("ul", {
  display: "flex",
  padding: "$0",
  listStyle: "none",
  overflowX: "scroll",
  scrollSnapType: "x",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const TimelineItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "auto",
  borderRadius: "16px",
  scrollSnapAlign: "start",
  mr: "$spacing-04",
  pb: "$spacing-05",
  

  "&:last-child": {
    mr: 0,
  },

  "@bp2": {
    flexBasis: "calc(50% - 6px)",
  },
  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 16px)",
    mr: "$spacing-06",
  },
});

const Card = styled("div", {
  padding: "12px",
  borderRadius: "16px",
  background: "$crimson3",
});

const ControlsContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "$spacing-04",
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
});

const Line = styled("div", {
  height: "1px",
  background: "$gray6",
  width: "100%",
});

const Button = styled("button", {
  padding: "$spacing-04",
  backgroundColor: "white",
  border: "1px solid $gray6",
  borderRadius: "8px",
  mr: "8px",
  color: "$violet11",

  "&:last-child": {
    mr: 0,
  },

  "&:hover": {
    backgroundColor: "$violet3",
  },
  "&:active": {
    backgroundColor: "$violet4",
  },
});

function getCardWidth() {
  return document.getElementById("timeline-item").clientWidth;
}

function Timeline(props) {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <TimelineWrapper>
      <TimelineItems ref={ref}>
        <TimelineItem id="timeline-item">
          <CardHeader
            color="crimson"
            hasYear={true}
            alignment="left"
            year="2022"
          />
          <TimelineCard imgage="/images/placeholder-timeline-item.png" />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="plum"
            hasYear={true}
            alignment="right"
            year="2022"
          />
          <TimelineCard imgage="/images/placeholder-timeline-item2.png" />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="blue"
            hasYear={true}
            alignment="left"
            year="2021"
          />
          <TimelineCard imgage="/images/placeholder-timeline-item3.png" />
        </TimelineItem>
        <TimelineItem>
          <CardHeader color="blue" hasYear={false} alignment="left" />
          <TimelineCard imgage="/images/placeholder-timeline-item3.png" />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="blue"
            hasYear={true}
            alignment="left"
            year="2021"
          />
          <TimelineCard imgage="/images/placeholder-timeline-item3.png" />
        </TimelineItem>
      </TimelineItems>
      <ControlsContainer>
        <Line />
        <Controls>
          <Button onClick={() => scroll(-getCardWidth())}>
            <ArrowLeftLineIcon />
          </Button>
          <Button onClick={() => scroll(getCardWidth())}>
            <ArrowRightLineIcon />
          </Button>
        </Controls>
      </ControlsContainer>
    </TimelineWrapper>
  );
}

export default Timeline;
