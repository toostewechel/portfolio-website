import { styled } from "../../stitches.config.js";
import React from "react";

const ReadingProgressBar = styled("div", {
  padding: "23px",
  position: "sticky",
  height: "24px",
  top: 0,
  backgroundColor: "#ffffff",
  mb: "24px",
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

  return (
    <ReadingProgressBar>
      <div style={{ width: `${readingProgress}%`, height: "16px", background: "linear-gradient(90deg, rgba(142, 117, 255, 0.78204) 0%, rgba(254, 49, 134, 0.60515) 100%)", }} />
      <p>{RoundReadingProgress}%</p>
    </ReadingProgressBar>
  )
}

export default ReadingProgress;