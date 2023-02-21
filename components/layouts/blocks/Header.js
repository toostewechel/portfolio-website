import { styled } from "../../../stitches.config.js";
import React from "react";
import AvatarStatusBadgePopover from "../../popover/AvatarStatusBadgePopover.js";
import CommandDialog from "../../cmdk/CommandDialog.js";

const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-03",
  backgroundColor: "transparent",
	zIndex: 9999,
	position: "sticky",

  "@bp1": {
    padding: "$spacing-04",
  },
});

const LogoBox = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "164px",

  "@bp1": {
    width: "232px",
  },
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  alignItems: "center",
});

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

const SiteMapContainer = styled("div", {
  mt: "$spacing-04",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "$spacing-03",

  "@bp2": {
    flexDirection: "row",
    gap: "$spacing-04",
    alignItems: "center",
  },
});

const Link = styled("a", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$mauve9",
  p: "$spacing-01",
});

const Circle = styled("div", {
  display: "none",

  "@bp2": {
    display: "flex",
    size: "$3",
    background: "$gray6",
    borderRadius: "100%",
  },
});

// Make command character useable in React
let command = String.fromCodePoint(8984);

function Header() {
  return (
    <HeaderContainer>
      <LogoBox href="/">
        <StyledLogo src="/logo/snapshots-labs-logo.png" />
      </LogoBox>
			<SiteMapContainer>
              <Link href="/design-vision">Design Vision</Link>
              <Circle />
              <Link href="/readme">READ.me</Link>
              <Circle />
              <Link href="/release-notes">Release Notes</Link>
            </SiteMapContainer>
      <Box>
        <CommandDialog />
        <AvatarStatusBadgePopover />
      </Box>
    </HeaderContainer>
  );
}

export default Header;
