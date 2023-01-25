import { styled } from "../../stitches.config.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover.js";
import { Share, X } from "lucide-react";
import WhatsappLineIcon from 'remixicon-react/WhatsappLineIcon';
import TwitterLineIcon from 'remixicon-react/TwitterLineIcon';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';

const StyledPopoverContent = styled(PopoverContent, {
  minWidth: "232px",
});

const IconButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  color: "$mauve11",
  padding: "$spacing-04",
  willChange: "transform",
  transition: "all 300ms ease-in",
  background: "transparent",

  "&:hover": {
    transition: "all 300ms ease-out",
    backgroundColor: "$mauve2",
    color: "$mauve12",
  },

  "&:active": { backgroundColor: "$mauve3" },
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
  fontWeight: "$semi-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve1",
  marginBottom: "$spacing-02",
});

function ShareToPopover(props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Share to">
          <Share size={20} />
        </IconButton>
      </PopoverTrigger>
      <StyledPopoverContent>
        <Title>Share</Title>
        <ShareLinkContainer href={props.whatsapp} target="_blank">
          <WhatsappLineIcon size={20} />
          <Label>Whatsapp</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={props.facebook} target="_blank">
          <FacebookFillIcon size={20} />
          <Label>Facebook</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={props.twitter} target="_blank">
          <TwitterLineIcon size={20} />
          <Label>Twitter</Label>
        </ShareLinkContainer>
        <ShareLinkContainer href={props.linkedin} target="_blank">
         <LinkedinFillIcon size={20} />
          <Label>LinkedIn</Label>
        </ShareLinkContainer>
        <PopoverClose aria-label="Close">
          <X size={16} />
        </PopoverClose>
      </StyledPopoverContent>
    </Popover>
  );
}

export default ShareToPopover;
