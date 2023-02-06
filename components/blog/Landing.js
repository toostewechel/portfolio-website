import React from "react";
import { styled } from "../../stitches.config.js";
import Tag from "../tag/Tag.js";
import {
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardPanel,
} from "../card/HoverCard.js";

const Wrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "white",
  marginTop: "-88px",

  "@bp4": {
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
  },
});

const LandingContentContainer = styled("div", {
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
  width: "800px",
  height: "800px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  zIndex: "3",
  display: "none",

  "@bp4": {
    display: "block",
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
});

const ImageContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  heigth: "50%",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacing-4",

  "@bp4": {
    padding: "$spacing-10",
    width: "50%",
  },

  variants: {
    color: {
      crimson: {
        background:
          "linear-gradient(166.69deg, rgba(249, 229, 249, 0.75) 3.84%, #FCE5F0 90.43%)",
      },
    },
  },
});

const MetaInformationContainer = styled("div", {
  padding: "$spacing-04",
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  bottom: 0,
});

const PoweredByBadge = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve9",
  transition: "background 300ms ease-in",
  background: "transparent",
  padding: "$spacing-03",
  borderRadius: "6px",
  border: "1px solid transparent",
  transition: "background 300ms ease-in",

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "$gray2",
    border: "1px solid $gray6",
  },
});

export default function Landing({ LandingContent, LandingImage, AccentColor }) {
  return (
    <Wrapper>
      <CircularPatternDesktop />
      <LandingContentContainer>
        <CircularPatternTablet />
        {LandingContent}
      </LandingContentContainer>
      <ImageContainer color={AccentColor}>
        <MetaInformationContainer>
          <Tag color={AccentColor} label="Design" />
          <HoverCardRoot>
            <HoverCardTrigger asChild>
              <PoweredByBadge href="https://www.jeroenkrul.nl/" target="_blank">
                <img src="/badges/jeroen-krul-badge.png" alt="Spline 3D Logo" />
              </PoweredByBadge>
            </HoverCardTrigger>
            <HoverCardPanel
              logo="/avatar/jeroen-krul.png"
              title="Jeroen Krul"
              socialHandle="@jeroenkrul"
              description="Freelance illustrator die gebruik maakt van zowel analoge als digitale methoden."
              followingCount="1,426"
              followersCount="1,002"
            />
          </HoverCardRoot>
        </MetaInformationContainer>
        {LandingImage}
      </ImageContainer>
    </Wrapper>
  );
}
