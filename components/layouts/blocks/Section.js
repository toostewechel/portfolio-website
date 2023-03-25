import { styled } from "../../../stitches.config.js";

const StyledSection = styled("section", {});

function Section({ children, ...props }) {
  return <StyledSection id={props.id}>{children}</StyledSection>;
}

export default Section;
