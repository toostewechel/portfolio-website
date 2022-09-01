import { styled } from "../../stitches.config.js";
import React, { useRef, useEffect, useState } from "react";
import CardHeader from "../card/CardHeader.js";

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
  height: "400px",
  borderRadius: "16px",
  scrollSnapAlign: "start",
  mr: "$spacing-04",
  
  "&:last-child": {
    mr: 0,
  },
  
  "@bp2": {
    flexBasis: "calc(50% - 6px)",
  },
  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 8px)",
  },
});

const Card = styled("div", {
  padding: "12px",
  borderRadius: "16px",
  background: "$crimson3",
})

const ControlsContainer = styled("div", {
  background: "$gray3",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%",
})

const Controls = styled("div", {
  background: "$crimson6",
  padding: "$spacing-04",
  display: "flex",
  flexDirection: "row",
})

const Button = styled("button", {
  padding: "16px",
  backgroundColor: "$violet3",
  mr: "8px",

  "&:last-child": {
    mr: 0,
  },

  "&:hover": {
    backgroundColor: "$violet4",
  },
});

function getCardWidth() {
  return document.getElementById('timeline-item').clientWidth;
}

function Timeline(props) {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <TimelineWrapper>
      <TimelineItems ref={ref}>
        <TimelineItem id="timeline-item">
          <CardHeader color="crimson" hasYear={true} alignment="left" year="2022" />
          <Card >
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </TimelineItem>
        <TimelineItem>
          <CardHeader color="plum" hasYear={true} alignment="right" year="2022" />
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </TimelineItem>
        <TimelineItem>
          <CardHeader color="blue" hasYear={true} alignment="left" year="2021" />
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </TimelineItem>
        <TimelineItem>
          <CardHeader color="blue" hasYear={false} alignment="left" />
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </TimelineItem>
        <TimelineItem>
          <CardHeader color="blue" hasYear={true} alignment="left" year="2021" />
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </TimelineItem>
      </TimelineItems>
      <ControlsContainer>
        <Controls>
          <Button onClick={() => scroll(-getCardWidth())}>Left</Button>
          <Button onClick={() => scroll(getCardWidth())}>Right</Button>
        </Controls>
      </ControlsContainer>
    </TimelineWrapper>
  );
}

export default Timeline;