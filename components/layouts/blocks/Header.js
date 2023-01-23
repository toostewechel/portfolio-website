import { styled } from "../../../stitches.config.js";
import React from "react";
import AvatarStatusBadgePopover from "../../popover/AvatarStatusBadgePopover.js";
import CMDK from "../../cmdk/CMDK.tsx";
import CommandDialog from "../../cmdk/CommandDialog.js";

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

const LogoBox = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "196px",

  "@bp1": {
    width: "232px",
  },
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
})

const StyledLogo = styled("img", {
  width: "100%",
  height: "auto",
});

const SearchBoxButton = styled("button", {
  display: "flex",
  alignItems: "center",
  padding: "$spacing-03",
  justifyContent: "space-between",
  width: "592px",
  height: "40px",
  backgroundColor: "$gray2",
  border: "1px solid $gray4",
  borderRadius: "4px",
});

const ShortcutContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  allignItems: "center",
  padding: "$spacing-02",
  backgroundColor: "$gray5",
  border: "1px solid $gray3",
  color: "$mauveA12",
  borderRadius: "4px",
  display: "none",

  "@bp3": {
    display: "flex",
  },
});

const ShortcutLabel = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$compact",
  color: "$mauve12",
  fontSize: "$xs",
});

const SearchLabel = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$compact",
  color: "$gray9",
  fontSize: "$xs",
});

// Make command character useable in React
let command = String.fromCodePoint(8984);


function Header() {
  return (
    <HeaderContainer>
      <LogoBox href="/">
        <StyledLogo src="/logo/logo.png" />
      </LogoBox>
      <Box>
        <CommandDialog />
        <AvatarStatusBadgePopover />
      </Box>
    </HeaderContainer>
  );
}

export default Header;
