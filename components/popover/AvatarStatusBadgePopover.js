import { styled } from "../../stitches.config.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover.js";
import AvatarStatusBadge from "../avatar/AvatarStatusBadge.js";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import ProfileCard from "../card/ProfileCard.js";
import { MoreHorizontal } from "lucide-react";

const IconButtonContainer = styled("button", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve11",
});

const StyledPopoverClose = {
  color: "white",
  top: 16,
  right: 16,
};

const StyledArrowDown = styled("div", {
  color: "$mauve11",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  borderRadius: "4px",
  willChange: "transform",
  transition: "transform 300ms ease-in, background 300ms ease-in",
  background: "transparent",

  "&:hover": {
    transition: "transform 300ms ease-out, background 300ms ease-out",
    backgroundColor: "$gray2",
  },
});

function AvatarStatusBadgePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButtonContainer aria-label="Menu">
          <AvatarStatusBadge
            size={7}
            status="open"
            src="/images/placeholder-avatar.png"
          />
          <StyledArrowDown>
            <MoreHorizontal size={20} />
          </StyledArrowDown>
        </IconButtonContainer>
      </PopoverTrigger>
      <PopoverContent sideOffset={8}>
        <ProfileCard badge={true} />
        <PopoverClose
          style={StyledPopoverClose}
          aria-label="Close"
        ></PopoverClose>
      </PopoverContent>
    </Popover>
  );
}

export default AvatarStatusBadgePopover;
