import { styled } from "../../stitches.config.js";
import React, { useRef, useEffect, useState, Children } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
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
  pb: "$spacing-06",

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
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "$spacing-04",
  background: "transparent",
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
  backgroundColor: "white",
  gap: "$spacing-02",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "8px",
  padding: "$spacing-02",
});

const LabelContainer = styled("div", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexShrink: 0,
});

const Label = styled("p", {
  fontFamily: "$mono",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$base",
  textDecoration: "underline",
});

const Button = styled("button", {
  padding: "$spacing-04",
  backgroundColor: "white",
  borderRadius: "8px",
  color: "$gray10",

  "&:hover": {
    color: "$gray12",
  },
});

const ProgessBarContainer = styled("div", {
  width: "96px",
  backgroundColor: "$gray3",
  borderRadius: "4px",
  padding: "$spacing-01",
  boxShadow:
    "1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(221, 217, 214, 0.5), inset -2px 2px 4px rgba(221, 217, 214, 0.2), inset 2px -2px 4px rgba(221, 217, 214, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(221, 217, 214, 0.9)",
});

const StyledProgressBar = styled(motion.div, {
  display: "flex",
  height: "18px",
  transformOrigin: "0%",
  width: "100%",
  borderRadius: "6px",

  variants: {
    gradient: {
      blue: {
        background: "linear-gradient(90deg, $blue9, $blue11)",
      },
      plum: {
        background: "linear-gradient(90deg, $plum9, $plum11)",
      },
      crimson: {
        background: "linear-gradient(90deg, $crimson9, $crimson11)",
      },
      teal: {
        background: "linear-gradient(90deg, $teal9, $teal11)",
      },
      mauve: {
        background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",
      },
    },
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
  const { scrollXProgress } = useScroll({ container: ref });
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
        <LabelContainer>
          <Label>
            {timelineCount > 1
              ? `${timelineCount} Items`
              : `${timelineCount} Item`}
          </Label>
        </LabelContainer>
        {showControls ? (
          <Controls>
            <Button
              aria-label="Sroll Left"
              onClick={() => scroll(-getCardWidth())}
            >
              <ArrowLeft size={20} />
            </Button>
            <ProgessBarContainer>
              <StyledProgressBar
                gradient="crimson"
                style={{ scaleX: scrollXProgress }}
              />
            </ProgessBarContainer>
            <Button
              aria-label="Sroll Right"
              onClick={() => scroll(getCardWidth())}
            >
              <ArrowRight size={20} />
            </Button>
          </Controls>
        ) : null}
      </ControlsContainer>
    </TimelineWrapper>
  );
};
