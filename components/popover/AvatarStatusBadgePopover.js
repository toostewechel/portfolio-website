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
import ProfileCard from "../about/profilecard/ProfileCard.js"

const IconButtonContainer = styled("button", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-03",
  alignItems: "center",
  justifyContent: "center",
  color: "$violet11",
});

const StyledPopoverClose = {
  color: "white",
  top: 16,
  right: 16,
}


function AvatarStatusBadgePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButtonContainer aria-label="Menu">
          <AvatarStatusBadge size={7} status="open" src="/images/placeholder-avatar.png" statusBadge />
          <ArrowDownSLineIcon />
        </IconButtonContainer>
      </PopoverTrigger>
      <PopoverContent sideOffset={8}>
         <ProfileCard badge={true} />
        <PopoverClose style={StyledPopoverClose} aria-label="Close">
          <CloseLineIcon />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}

export default AvatarStatusBadgePopover;