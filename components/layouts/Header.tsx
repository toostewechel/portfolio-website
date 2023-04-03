import { FC } from "react";
import { styled } from "../../stitches.config.js";
import ShareToPopover from "../popover/ShareToPopover";
import { ReadingProgressBar } from "../progress/ReadingProgressBar.js";
import { X } from "lucide-react";
import { IconButton } from "../button/IconButton";
import AvatarStatusBadgePopover from "../popover/AvatarStatusBadgePopover.js";
import { NavBar } from "./NavBar";
import SiteLogo from "./SiteLogo.js";

const Wrapper = styled("header", {
  padding: "$spacing-04",
  position: "sticky",
  top: -1,
  zIndex: 9999,
  p: "$spacing-03",
});

const HeaderContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: "$spacing-03",
  background: "rgba( 255, 255, 255, 0.65 )",
  boxShadow: "$small",
  backdropFilter: "blur(4px)",
  webkitBackdropFilter: "blur(4px)",
  borderRadius: "6px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",

  "@bp5": {},
  "@bp6": {
    background: "transparent",
    boxShadow: "none",
    backdropFilter: "none",
    webkitBackdropFilter: "none",
    border: "none",
  },
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "none",

  "@bp2": {
    gap: "$spacing-02",
  },
});

const FlexBox = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "$spacing-02",
  width: "232px",
});

interface BlogHeaderProps {
  whatsapp: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  progressBarGradient: string;
  targetRef: React.RefObject<HTMLElement>;
  gradient: string;
}

export const BlogHeader: FC<BlogHeaderProps> = ({
  facebook,
  linkedin,
  twitter,
  targetRef,
  gradient,
}) => {
  return (
    <Wrapper>
      <HeaderContent>
        <SiteLogo />
        <Controls>
          <ShareToPopover
            facebook={facebook}
            twitter={twitter}
            linkedin={linkedin}
          />
          <ReadingProgressBar targetRef={targetRef} gradient={gradient} />
          <IconButton href="/blog" ariaLabel="Close" tooltipLabel="Close Post">
            <X size={20} />
          </IconButton>
        </Controls>
      </HeaderContent>
    </Wrapper>
  );
};

export const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <SiteLogo />
        <NavBar />
        <FlexBox>
          <AvatarStatusBadgePopover />
        </FlexBox>
      </HeaderContent>
    </Wrapper>
  );
};
