import React from "react";
import { styled } from "../../stitches.config.js";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1900px",
  background: "",
  boxShadow: "none",
  borderRadius: "12px",
  marginTop: "-16px",
  marginBottom: "-16px",
  zIndex: "9",

  variants: {
    accentColor: {
      crimson: {
        background: "linear-gradient(180.04deg, #F9E5F9 0.04%, #FCE5F0 99.96%)",
        border: "1px solid $crimson6",
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
  padding: "$spacing-04",
});

export default function Chapter({ ChapterContent, ChapterImage }) {
  return (
    <Wrapper accentColor="crimson">
      <ChapterContentContainer>{ChapterContent}</ChapterContentContainer>
      <ChapterImageContainer>{ChapterImage}</ChapterImageContainer>
    </Wrapper>
  );
}
