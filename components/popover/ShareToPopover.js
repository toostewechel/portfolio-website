import { styled } from "../../stitches.config.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover.js";
import ShareLineIcon from "remixicon-react/ShareLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

const IconButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$violet11",
  size: "$7",
  borderRadius: "4px",

  "&:hover": { backgroundColor: "$violet3" },
  "&:active": { backgroundColor: "$violet4" },
});

const ShareLinkContainer = styled("a", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
  borderRadius: "4px",
  p: "$spacing-03 $spacing-02",
  "&:hover": { backgroundColor: "$violet3" },
});

const SocialIcon = styled("img", {
  $size: "$5",
});

const Label = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve12",
});

const Title = styled("p", {
  fontSize: "$lg",
  fontWeight: "$semi-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  marginBottom: "$spacing-02",
});

const shareTo = {
  whatsapp: "https://www.whatsapp.com/",
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  linkedIn: "https://www.linkedin.com/",
};

function ShareToPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Share to">
          <ShareLineIcon />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <Title>Share</Title>
        <ShareLinkContainer href={shareTo.whatsapp} target="_blank">
          <SocialIcon src="/logo/whatsapp-logo.svg" />
          <Label>Whatsapp</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={shareTo.facebook} target="_blank">
          <SocialIcon src="/logo/facebook-logo.svg" />
          <Label>Facebook</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={shareTo.twitter} target="_blank">
          <SocialIcon src="/logo/twitter-logo.svg" />
          <Label>Twitter</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={shareTo.linkedIn} target="_blank">
          <SocialIcon src="/logo/linked-in-logo.svg" />
          <Label>LinkedIn</Label>
        </ShareLinkContainer>
        <PopoverClose aria-label="Close">
          <CloseLineIcon />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}

export default ShareToPopover;
