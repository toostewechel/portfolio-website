import { styled } from "../../stitches.config.js";
import ReadingProgress from "../readingprogress/ReadingProgress.js";
import React from "react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "space-between",
  padding: "24px",
  backgroundColor: "transparent",
  alignItems: "center",
  position: "sticky",
  top: 0,
  backgroundColor: "#FFE0B4",

  "@bp1": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});

const Box = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Logo = styled("div", {
  display: "flex",
  size: "$8",
  mr: "$spacing-03",
});

const IconBox = styled("div", {
  display: "flex",
  size: "$7",
  mr: "$spacing-03",
});

const Title = styled("p", {
  display: "flex",
  alignItems: "center",
  gap: "$spacing-03",
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  fontSize: "$3xl",
  mt: "$spacing-02",
});

const StyledSpan = styled("span", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-normal",
  fontSize: "$lg",
  backgroundColor: "$crimsonA8",
  pr: "8px",
  pl: "8px",
  pt: "6px",
  pb: "4px",
  borderRadius: "4px",
  color: "$crimson2",
  boxShadow: "$smooth",
  mt: "-8px",
});


function ContentHeader(props) {
  return (
      <Container>
        <Box>
          <Title>Snapshots / <StyledSpan> Blog </StyledSpan></Title>
        </Box>
        <ReadingProgress targetRef={props.targetRef} />
      </Container>
  );
}

export default ContentHeader;
