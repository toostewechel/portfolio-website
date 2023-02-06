import { styled } from "../../stitches.config.js";
import React from "react";

const ReadingProgressBarContainer = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "6px",
  gap: "$spacing-02",
});

const ProgressBarContainer = styled("div", {
  display: "none",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-01",

  "@bp2": {
    display: "flex",
  },
});

const ProgressLabel = styled("p", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: "2px",
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  fontSize: "$lg",
  p: "$spacing-01 0px",
  width: "48px",
});

const ProgressBarOuter = styled("div", {
  width: "132px",
  borderRadius: "6px",
  padding: "$spacing-02",
  backgroundColor: "$mauve3",
  boxShadow: "$inset",
});

export const ReadingProgressBar = ({ targetRef, gradient }) => {
  //Hook for reading and setting reading progress
  const [readingProgress, setReadingProgress] = React.useState(0);

  //Listener that updates the reading progress on scroll events
  const scrollListener = () => {
    if (!targetRef.current) {
      return;
    }

    //Get the number of pixels the document is scrolled along the Y-axis and current height of the targetRef element
    const element = targetRef.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;

    //Support for different browsers
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    //Return value 0 if the user is at the top (0.0) of the document
    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }
    //Return value 100 if the Y-offset > than the height of the targetRef element
    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    //Calculate the progress percentage
    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  //Put the listener into a useEffect hook to perform DOM updates
  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    //clean up after effect to prevent memory leaks
    return () => window.removeEventListener("scroll", scrollListener);
  });

  const RoundReadingProgress = Math.round(readingProgress);

  const ProgessBarInner = styled("div", {
    width: `${readingProgress}%`,
    height: "16px",
    borderRadius: "4px",
    variants: {
      gradient: {
        tech: {
          background: "linear-gradient(90deg, $blue9, $blue11)",
        },
        workflow: {
          background: "linear-gradient(90deg, $plum9, $plum11)",
        },
        design: {
          background: "linear-gradient(90deg, $crimson9, $crimson11)",
        },
      },
    },
  });

  return (
    <ReadingProgressBarContainer>
      <ProgressBarContainer>
        <ProgressLabel>{RoundReadingProgress}%</ProgressLabel>
        <ProgressBarOuter>
          <ProgessBarInner gradient={gradient} />
        </ProgressBarOuter>
      </ProgressBarContainer>
    </ReadingProgressBarContainer>
  );
};
