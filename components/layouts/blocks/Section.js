import { styled } from "../../../stitches.config.js";

const StyledSection = styled("section", {
  height: "100%",
});

function Section({ children, ...props }) {
  return <StyledSection id={props.id}>{children}</StyledSection>;
}

export default Section;
