import { styled } from "../../stitches.config.js";
import Toolbar from "./Toolbar.js";
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
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  fontSize: "$3xl",
  mt: "$spacing-02",
});

function Header() {
  return (
    <Container>
      <Box>
        <Title>Snapshots.</Title>
      </Box>
      <Toolbar />
    </Container>
  );
}

export default Header;
