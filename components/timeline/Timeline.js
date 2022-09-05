import { styled } from "../../stitches.config.js";
import React, { useRef } from "react";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

const TimelineWrapper = styled("div", {
  maxWidth: "1234px",
  margin: "0 auto",
  padding: "$spacing-05 $none",
  overflow: "visible",
});

const TimelineItems = styled("ul", {
  display: "flex",
  padding: "$none",
  listStyle: "none",
  overflowX: "scroll",
  scrollSnapType: "x",
  scrollBehavior: "smooth",
  "-webkit-overflow-scrolling": "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const StyledTimelineItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "auto",
  borderRadius: "16px",
  scrollSnapAlign: "start",
  mr: "$spacing-04",
  pb: "$spacing-08",

  "&:last-child": {
    mr: 0,
  },

  "@bp2": {
    flexBasis: "calc(50% - 12px)",
  },
  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 24px)",
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
  background: "transparent",
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


export const TimelineItem = StyledTimelineItem;
export const Timeline = ({children}) => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <TimelineWrapper>
      <TimelineItems ref={ref}>
        {children}
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
