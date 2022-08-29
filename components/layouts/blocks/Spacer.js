import { styled } from "../../../stitches.config.js";

const StyledSpacer = styled("div", {
  p: "$spacing-07 $none",
});

function Spacer() {
  return <StyledSpacer />;
}

export default Spacer;
