import { styled } from "../../stitches.config.js";

const StyledStrong = styled("strong", {
  fontWeight: "$medium",
  color: "$mauve12",
});

function Strong(props) {
  return <StyledStrong>{props.children}</StyledStrong>;
}

export default Strong;
