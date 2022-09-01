import { styled } from "../../stitches.config.js";
import Avatar from "../avatar/Avatar.js";
import ShareToPopover from "../popover/ShareToPopover.js";

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid $gray5",
  m: "0 auto",
  maxWidth: "760px",
  p: "$spacing-04 $none",
});

function ContentMeta() {
  return (
    <Container>
      <Avatar
        src="/images/avatar-placeholder.png"
        name="Tom Oostewechel"
        description="Author"
      />
      <ShareToPopover />
    </Container>
  );
}

export default ContentMeta;
