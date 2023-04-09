import React from "react";
import { styled } from "../../stitches.config.js";

const Wrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  marginTop: "0px",
  maxWidth: "100%",

  "@bp4": {
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    marginTop: "-112px",
  },
});

const LandingContentContainer = styled("header", {
  position: "relative",
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  padding: "$spacing-04",
  zIndex: "4",

  "@bp4": {
    width: "50%",
  },
});

const CircularPatternDesktop = styled("div", {
  position: "absolute",
  backgroundImage: "url(/patterns/circular-pattern-blog-landing.png)",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  zIndex: "3",
  display: "none",

  "@bp4": {
    display: "block",
    width: "600px",
    height: "600px",
  },
  "@bp5": {
    width: "650px",
    height: "650px",
  },
  "@bp6": {
    width: "800px",
    height: "800px",
  },

  variants: {
    backgroundPatternColor: {
      crimson: {
        backgroundImage: "url(/patterns/circular-pattern-blog-landing.png)",
      },
      teal: {
        backgroundImage:
          "url(/patterns/blog/circular-pattern-blog-landing-teal.png)",
      },
      bronze: {
        backgroundImage: "url(/patterns/circular-pattern-landing-bronze.png)",
      },
    },
  },
});

const CircularPatternTablet = styled("div", {
  position: "absolute",
  backgroundImage: "url(/patterns/circular-pattern-blog-landing.png)",
  bottom: "-180px",
  width: "360px",
  height: "360px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  zIndex: "3",
  display: "block",

  "@bp2": {
    bottom: "-240px",
    width: "480px",
    height: "480px",
  },
  "@bp3": {
    bottom: "-320px",
    width: "640px",
    height: "640px",
  },
  "@bp4": {
    display: "none",
  },

  variants: {
    backgroundPatternColor: {
      crimson: {
        backgroundImage: "url(/patterns/circular-pattern-blog-landing.png)",
      },
      teal: {
        backgroundImage:
          "url(/patterns/blog/circular-pattern-blog-landing-teal.png)",
      },
      bronze: {
        backgroundImage: "url(/patterns/circular-pattern-landing-bronze.png)",
      },
    },
  },
});

const ImageContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  pl: "0",
  pr: "0",
  pt: "$spacing-11",
  pb: "$spacing-13",

  "@bp4": {
    padding: "$spacing-11",
    width: "50%",
  },

  variants: {
    backgroundGradient: {
      crimson: {
        background:
          "linear-gradient(166.69deg, rgba(249, 229, 249, 0.75) 3.84%, #FCE5F0 90.43%)",
      },
      teal: {
        background: "linear-gradient(164.85deg, #E7F9F5 8.07%, #92CEAC 94.06%)",
      },
      bronze: {
        background: "linear-gradient(138.88deg, #F8F1EE 0.36%, #E5DFD0 93.42%)",
      },
    },
  },
});

const MetaInformationContainer = styled("div", {
  padding: "$spacing-04",
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  bottom: 0,
});

export default function Landing({
  LandingContent,
  LandingImage,
  HoverCardContent,
  accentColor,
}) {
  return (
    <Wrapper id="landing">
      <CircularPatternDesktop backgroundPatternColor={accentColor} />
      <LandingContentContainer>
        <CircularPatternTablet backgroundPatternColor={accentColor} />
        {LandingContent}
      </LandingContentContainer>
      <ImageContainer backgroundGradient={accentColor}>
        <MetaInformationContainer>
          <div>{HoverCardContent}</div>
        </MetaInformationContainer>
        {LandingImage}
      </ImageContainer>
    </Wrapper>
  );
}
