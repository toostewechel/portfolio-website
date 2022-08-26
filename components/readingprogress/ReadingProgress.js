import { styled } from "../../stitches.config.js";
import React from "react";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { Provider, Tooltip, TooltipContent, TooltipTrigger } from "../tooltip/Tooltip.js";

const ReadingProgressContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "8px",
  padding: "$spacing-03",
  gap: "$spacing-04",
  background: "linear-gradient(0.41deg, #3F1ABC 0.36%, rgba(63, 26, 188, 0.65) 99.65%)",
  boxShadow: "$toolbar",
})

const ProgressBarContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-01",
})

const ProgressLabel = styled("p", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: "2px",
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  color: "$mauveA12",
  fontSize: "$lg",
  p: "$spacing-01 0px",
  width: "48px",
});

const ProgressBarOuter = styled("div", {
  width: "164px",
  borderRadius: "99px",
  padding: "$spacing-02",
  backgroundColor: "$mauveA10",
  boxShadow: "$inset",
})

const IconLink = styled("a", {
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-03",
  willChange: "transform",
  transition:
    "transform 300ms ease-in, background 300ms ease-in, scale 300ms ease-in",
  background: "transparent",

  "&:hover": {
    scale: 1.05,
    transition:
      "transform 300ms ease-out, background 300ms ease-out, scale 300ms ease-out",
    background: "linear-gradient(180deg, $violetA10, $crimsonA6)",
    boxShadow: "$smooth",
  },
})

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$5",
  color: "$violet3",

  "@bp1": {
    size: "$5",
  }
})

const ReadingProgress = ({ targetRef }) => {
  //Hook for reading and setting reading progress
  const [readingProgress, setReadingProgress] = React.useState(0);

  //Listener that updates the reading progress on scroll events
  const scrollListener = () => {
    if (!targetRef.current) {
      return;
    }

    //Get the number of pixels the document is scrolled along the Y-axis and current height of the targetRef element
    const element = targetRef.current;
    const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);

    //Support for different browsers
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

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
    background: "linear-gradient(90deg, rgba(142, 117, 255, 0.78204) 0%, rgba(254, 49, 134, 0.60515) 100%)",
    borderRadius: "99px",
  })

  return (
    <ReadingProgressContainer>
      <ProgressBarContainer>
        <ProgressLabel>{RoundReadingProgress}%</ProgressLabel>
        <ProgressBarOuter>
          <ProgessBarInner />
        </ProgressBarOuter>
      </ProgressBarContainer>
      <Provider>
        <Tooltip>
          <TooltipTrigger asChild>
            <IconLink href="/">
              <Icon><CloseLineIcon /></Icon>
            </IconLink>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>Close Article</TooltipContent>
        </Tooltip>
      </Provider>
    </ReadingProgressContainer>
  )
}

export default ReadingProgress;