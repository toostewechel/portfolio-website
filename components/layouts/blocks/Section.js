import { styled } from "../../../stitches.config.js";

const StyledSection = styled("section", {
  scrollMarginTop: "115px",
});

function Section({ children, ...props }) {
  return <StyledSection id={props.id}>{children}</StyledSection>;
}

export default Section;
