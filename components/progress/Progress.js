import React from "react";
import { styled } from "../../stitches.config.js";
import * as Progress from "@radix-ui/react-progress";

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const LabelContainer = styled("div", {
  display: "flex",
  width: "100%",
  mt: "$spacing-02",
});

const HelpText = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontStyle: "italic",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const StyledProgress = styled(Progress.Root, {
  overflow: "hidden",
  background: "$mauve3",
  borderRadius: "2px",
  width: "100%",
  height: "18px",
  transform: "translateZ(0)",
  boxShadow:
    "1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(221, 217, 214, 0.5), inset -2px 2px 4px rgba(221, 217, 214, 0.2), inset 2px -2px 4px rgba(221, 217, 214, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(221, 217, 214, 0.9)",
});

const StyledProgressIndicator = styled(Progress.Indicator, {
  width: "100%",
  height: "100%",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  borderRadius: "2px",

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
    },
  },
});

const InnerContainer = styled("div", {
  overflow: "hidden",
  height: "18px",
  width: "100%",
  ml: "$spacing-02",
  mr: "$spacing-02",
  pt: "$spacing-02",
  pb: "$spacing-02",
  borderRadius: "6px",
});

export default function ProgressBar({ gradient, progressValue, helpText }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressValue), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <StyledProgress value={progressValue}>
        <InnerContainer>
          <StyledProgressIndicator
            gradient={gradient}
            style={{ transform: `translateX(-${100 - progressValue}%)` }}
          />
        </InnerContainer>
      </StyledProgress>
      <LabelContainer>
        <HelpText>{helpText}</HelpText>
      </LabelContainer>
    </Container>
  );
}
