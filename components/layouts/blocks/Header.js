import { styled } from "../../../stitches.config.js";
import Toolbar from "../../toolbar/Toolbar.js";
import React, { useState } from "react";
import AvatarStatusBadgePopover from "../../popover/AvatarStatusBadgePopover.js";

const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-04",
  backgroundColor: "transparent",

  "@bp1": {
    padding: "$spacing-05",
  },
});

const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "196px",

  "@bp1": {
    width: "232px",
  },
});

const StyledLogo = styled("img", {
  width: "100%",
  height: "auto",
});

function Header() {
  return (
    <HeaderContainer>
      <Box>
        <StyledLogo src="/logo/logo.png" />
      </Box>
      <AvatarStatusBadgePopover />
    </HeaderContainer>
  );
}

export default Header;
