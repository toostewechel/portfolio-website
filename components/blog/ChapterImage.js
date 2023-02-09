import { styled } from "../../stitches.config.js";

const StyledImage = styled("img", {
  width: "100%",
  height: "auto",
  zIndex: "4",
});

export default function LandingImage({ Image }) {
  return <StyledImage src={Image} />;
}
