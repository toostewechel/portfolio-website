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
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
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
      <Controls>
        <ShareToPopover
          whatsapp={props.whatsapp}
          facebook={props.facebook}
          twitter={props.twitter}
          linkedin={props.linkedin}
        />
        <ReadingProgress targetRef={props.targetRef} gradient={props.gradient} />
      </Controls>
    </HeaderContainer>
  );
}

export default ContentHeader;
