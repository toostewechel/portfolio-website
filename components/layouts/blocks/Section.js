import { styled } from "../../../stitches.config.js";

const StyledSection = styled("section", {
  height: "auto",

  "@bp1": {
    height: "100vh",
  }
})

function Section({children, ...props}) {
  return(
    <StyledSection id={props.id}>{children}</StyledSection>
  )
}

export default Section;