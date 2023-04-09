import React from "react";
import { styled } from "../../stitches.config.js";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1900px",
  boxShadow: "$xs",
  borderRadius: "0",
  marginTop: "-16px",
  marginBottom: "-16px",
  zIndex: "3",
  border: 0,
  padding: "$spacing-04",
  width: "100%",

  variants: {
    color: {
      crimson: {
        background: "linear-gradient(180.04deg, #F9E5F9 0.04%, #FCE5F0 99.96%)",
        border: "2px solid $crimson6",
      },
      teal: {
        background: "linear-gradient(164.85deg, #E7F9F5 8.07%, #92CEAC 94.06%)",
        border: "2px solid $teal7",
      },
      gray: {
        background: "linear-gradient(164.85deg, $bronze3, $slate7)",
        border: "2px solid $slate8",
      },
    },
  },

  "@bp4": {
    flexDirection: "row",
    height: "1080px",
    width: "100%",
    boxShadow: "$medium",
    borderRadius: "12px",
    padding: "$spacing-06",
    borderRadius: "24px",
  },
});

const ChapterContentContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: "$spacing-04",
  alignItems: "center",
  justifyContent: "center",

  "@bp4": {
    width: "50%",
  },
});

const ChapterImageContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  pl: "0",
  pr: "0",
  pt: "$spacing-08",
  pb: "$spacing-13",

  "@bp4": {
    width: "50%",
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

export default function Chapter({
  ChapterContent,
  ChapterImage,
  HoverCardContent,
  accentColor,
}) {
  return (
    <Wrapper color={accentColor}>
      <ChapterContentContainer>{ChapterContent}</ChapterContentContainer>
      <ChapterImageContainer>
        <MetaInformationContainer>
          <div>{HoverCardContent}</div>
        </MetaInformationContainer>
        {ChapterImage}
      </ChapterImageContainer>
    </Wrapper>
  );
}
