import { FC } from "react";
import { styled } from "../../stitches.config.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover.js";
import { Share, X } from "lucide-react";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import CopyToClipboard from "../button/CopyToClipboard";
import { useRouter } from "next/router";

const StyledPopoverContent = styled(PopoverContent, {
  minWidth: "232px",
});

const IconButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  color: "$mauve11",
  padding: "$spacing-04",
  transition: "background 150ms ease-in",
  background: "transparent",
  border: "2px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "rgba(0,0,0, 0.05)",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "rgba(0,0,0, 0.1)",
  },
  "&:focus": {
    border: "2px solid $blue11",
    backgroundColor: "rgba(0,0,0, 0.1)",
    color: "$mauve12",
  },
});

const ShareLinkContainer = styled("a", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
  borderRadius: "4px",
  p: "$spacing-03 $spacing-02",
  willChange: "transform",
  transition: "all 150ms ease-in",
  background: "transparent",
  color: "$mauveA11",
  outline: "none",
  textDecoration: "none",

  "&:hover": {
    transition: "all 150ms ease-out",
    background: "$mauveA6",
    color: "$mauveA12",
  },
  "&:active": {
    backgroundColor: "$mauveA7",
  },
  "&:visited": {
    color: "$mauveA12",
  },
  "&:focus": {
    transition: "all 150ms ease-out",
    color: "$mauveA12",
    backgroundColor: "$mauveA7",
  },
});

const Label = styled("p", {
  fontSize: "$xs",
  fontWeight: "$medium",
  fontFamily: "$default",
});

const Title = styled("p", {
  fontSize: "$base",
  fontWeight: "$bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve1",
  lineHeight: "$none",
  marginBottom: "$spacing-04",
  marginTop: "$spacing-02",
});

interface ShareToPopoverProps {
  twitter: string;
  linkedin: string;
}

const ShareToPopover: FC<ShareToPopoverProps> = ({ twitter, linkedin }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Share Options">
          <Share size={20} />
        </IconButton>
      </PopoverTrigger>
      <StyledPopoverContent>
        <Title>Share Post</Title>
        <CopyToClipboard text={`https://snapshotlabs.nl${pathname}`} />
        <ShareLinkContainer href={twitter} target="_blank">
          <TwitterLineIcon size={20} />
          <Label>Twitter</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={linkedin} target="_blank">
          <LinkedinFillIcon size={20} />
          <Label>LinkedIn</Label>
        </ShareLinkContainer>
        <PopoverClose aria-label="Close">
          <X size={17} />
        </PopoverClose>
      </StyledPopoverContent>
    </Popover>
  );
};

export default ShareToPopover;
