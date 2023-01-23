import { styled } from "../../stitches.config.js";
import ReadingProgress from "../readingprogress/ReadingProgress.js";
import React from "react";
import ShareToPopover from "../popover/ShareToPopover.js";

const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-04",
  backgroundColor: "white",
  position: "sticky",
  top: 0,
  zIndex: 2,

  "@bp5": {
    padding: "$spacing-05",
    backgroundColor: "transparent",
  },
});

const Box = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "196px",

  "@bp1": {
    width: "232px",
  },
});

const FlexBox = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "2px",
});

const StyledLogo = styled("img", {
  width: "100%",
  height: "auto",
});

function ContentHeader(props) {
  return (
    <HeaderContainer>
      <Box href="/">
        <StyledLogo src="/logo/logo.png" />
      </Box>
      <FlexBox>
        <ShareToPopover
          whatsapp={props.whatsapp}
          facebook={props.facebook}
          twitter={props.twitter}
          linkedin={props.linkedin}
        />
        <ReadingProgress targetRef={props.targetRef} />
      </FlexBox>
    </HeaderContainer>
  );
}

export default ContentHeader;
