import { styled } from "../../stitches.config.js";
import React, { useRef, useEffect, useState, Children } from "react";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import { useMediaQuery } from "react-responsive";

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
    flexBasis: "calc(calc(100% / 3) - 20px)",
    mr: "$spacing-06",
  },
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

//Helper Function to get TimelineCard Width
function getCardWidth() {
  return document.getElementById("timeline-item").clientWidth;
}

export const TimelineItem = StyledTimelineItem;
export const Timeline = ({ children }) => {
  //Scroll Function
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  //On BP4 - BP3 => 3 Items in Viewport || On BP2, 2 Items in Viewport || On BP1, 1 Item in Viewport
  const bp2 = useMediaQuery({ minWidth: 640 });
  const bp4 = useMediaQuery({ minWidth: 1024 });

  //Conditionally Render Controls based on Viewport and timelineCount
  const [count, setCount] = useState(0);
  const timelineCount = Children.count(children);
  const showControls = bp4 ? count > 3 : bp2 ? count > 2 : count > 1;

  useEffect(() => {
    setCount(timelineCount);
  }, [setCount]);

  return (
    <TimelineWrapper>
      <TimelineItems ref={ref}>{children}</TimelineItems>
      <ControlsContainer>
        <Line />
        {showControls ? (
          <Controls>
            <Button
              aria-label="Sroll Left"
              onClick={() => scroll(-getCardWidth())}
            >
              <ArrowLeftLineIcon />
            </Button>
            <Button
              aria-label="Sroll Right"
              onClick={() => scroll(getCardWidth())}
            >
              <ArrowRightLineIcon />
            </Button>
          </Controls>
        ) : null}
      </ControlsContainer>
    </TimelineWrapper>
  );
};
