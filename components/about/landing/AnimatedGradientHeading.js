import { styled, keyframes } from "../../../stitches.config.js";

const AnimatedGradientTitle1 = keyframes({
  "0%, 16.667%, 100%": { opacity: 1 },
  "33.333%, 83.333%": { opacity: 0 },
});

const AnimatedGradientTitle2 = keyframes({
  "0%, 16.667%, 66.667%, 100%": { opacity: 0 },
  "33.333%, 50%": { opacity: 1 },
});

const AnimatedGradientTitle3 = keyframes({
  "0%, 50%, 100%": { opacity: 0 },
  "66.667%, 83.333%": { opacity: 1 },
});

const ProcessStepContainer = styled("div", {
  position: "relative",
  mb: "$spacing-06",
});

const ProcessStepTitleContainer = styled("div", {
  position: "relative",
});

const ProcessStepTitle = styled("h1", {
  fontSize: "$5xl",
  fontWeight: "$black",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
});

const ProcessStepTitleOverlay = styled("div", {
  fontSize: "$5xl",
  fontWeight: "$black",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  position: "absolute",
  top: 0,
  left: 0,
  width: "auto",
  pr: "$spacing-04",
  height: "100%",
  opacity: 1,
  "-webkit-text-fill-color": "transparent",
  "-webkit-background-clip": "text",

  variants: {
    gradient: {
      1: {
        backgroundImage: "linear-gradient(90deg, $violet11, $blue11)",
        animation: `${AnimatedGradientTitle1} 6s infinite ease-in-out`,
      },
      2: {
        backgroundImage: "linear-gradient(90deg, $blue11, $plum10)",
        animation: `${AnimatedGradientTitle2} 6s infinite ease-in-out`,
      },
      3: {
        backgroundImage: "linear-gradient(90deg, $orange10, $crimson10)",
        animation: `${AnimatedGradientTitle3} 6s infinite ease-in-out`,
      },
    },
  },
});

function AnimatedGradientHeading() {
  return (
    <ProcessStepContainer>
      <ProcessStepTitleContainer>
        <ProcessStepTitle>Plan.</ProcessStepTitle>
        <ProcessStepTitleOverlay gradient={1}>Plan.</ProcessStepTitleOverlay>
      </ProcessStepTitleContainer>
      <ProcessStepTitleContainer>
        <ProcessStepTitle>Design.</ProcessStepTitle>
        <ProcessStepTitleOverlay gradient={2}>Design.</ProcessStepTitleOverlay>
      </ProcessStepTitleContainer>
      <ProcessStepTitleContainer>
        <ProcessStepTitle>Develop.</ProcessStepTitle>
        <ProcessStepTitleOverlay gradient={3}>Develop.</ProcessStepTitleOverlay>
      </ProcessStepTitleContainer>
    </ProcessStepContainer>
  );
}

export default AnimatedGradientHeading;
