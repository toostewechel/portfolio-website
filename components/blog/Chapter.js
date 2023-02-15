import React from "react";
import { styled } from "../../stitches.config.js";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1900px",
  boxShadow: "none",
  borderRadius: "12px",
  marginTop: "-16px",
  marginBottom: "-16px",
  zIndex: "3",

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
    },
  },

  "@bp4": {
    flexDirection: "row",
    height: "1080px",
    width: "100%",
    boxShadow: "$medium",
  },
});

const ChapterContentContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: "$spacing-04",
  alignItems: "center",
  justifyContent: "center",
});

const ChapterImageContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacing-10",
});

export default function Chapter({ ChapterContent, ChapterImage, accentColor }) {
  return (
    <Wrapper color={accentColor}>
      <ChapterContentContainer>{ChapterContent}</ChapterContentContainer>
      <ChapterImageContainer>{ChapterImage}</ChapterImageContainer>
    </Wrapper>
  );
}
