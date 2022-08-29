import { styled } from "../../../stitches.config.js";

const StyledSpacer = styled("div", {
  p: "$spacing-12 $none",
});

function Spacer() {
  return <StyledSpacer />;
}

export default Spacer;
