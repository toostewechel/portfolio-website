import { styled } from "../../../stitches.config.js";
import Toolbar from "../../toolbar/Toolbar.js";
import React, { useState } from "react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "space-between",
  padding: "24px",
  backgroundColor: "transparent",
  alignItems: "center",

  "@bp1": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  fontSize: "$2xl",
  mt: "$spacing-02",

  "@bp2": {
    fontSize: "$3xl",
  },
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

const ToolbarContainer = styled("div", {
  display: "none",

  "@bp3": {
    display: "flex",
  },
});

function Header() {
  return (
    <Container>
      <Box>
        <Title>
          Snapshots / <StyledSpan> Home </StyledSpan>{" "}
        </Title>
      </Box>
      <ToolbarContainer>
        <Toolbar />
      </ToolbarContainer>
    </Container>
  );
}

export default Header;
