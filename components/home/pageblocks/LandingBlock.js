import { styled } from "../../../stitches.config.js";
import Section from "../../layouts/blocks/Section.js";
import AnimatedGradientHeading from "./AnimatedGradientHeading.js";

const LandingWrapper = styled("div", {
  maxWidth: "1234px",
  margin: "0 auto",
  padding: "0 $spacing-03",
});

const LandingItems = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0",
  gap: "$spacing-08",

  "@bp2": {
    flexDirection: "row",
  },
});

const LandingItem = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "auto",
  mr: 0,

  "@bp2": {
    flexBasis: "calc(50% - 16px)",
  },
});

const Description = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
  maxWidth: "720px",
  mb: "$spacing-09",

  "@bp1": {
    fontSize: "$xl",
  },
});

const StyledImage = styled("img", {
  width: "100%",
  height: "auto",
});

const ContentContainer = styled("div", {
  maxWidth: "532px",
});

const BackgroundPattern = styled("div", {
  // position: "absolute",
  // width: "100%",
  // height: "100%",
  // backgroundImage: "url(/patterns/circular-background-pattern.svg)",
  // backgroundRepeat: "repeat-x",
  // left: 0,
  // top: 124,
});

const Button = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  padding: "$spacing-04 $spacing-05",
  background: "$mauve12",
  color: "$mauveA12",
  fontFamily: "$default",
  fontSize: "$base",
  fontWeight: "$medium",
  borderRadius: "6px",

  "&:hover": {
    background: "linear-gradient(90deg, $violet11, $blue11)",
    color: "$mauveA12",
  },

  "@bp1": {
    fontSize: "$lg",
  }
});

function LandingBlock() {
  return (
    <Section id="home">
      <LandingWrapper>
        <BackgroundPattern />
        <LandingItems>
          <LandingItem>
            <ContentContainer>
              <AnimatedGradientHeading />
              <Description>
                I create digital products by <em>un•tang•ling</em> complexity in
                a structured, creative and visual way. I am passionate about
                building innovative and valuable products that have a real
                impact.
              </Description>
              <Button href="#">
                My Design Vision
                <span style={{ marginLeft: "8px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Button>
            </ContentContainer>
          </LandingItem>
          <LandingItem>
            <StyledImage src="/images/landing-placeholder.png" />
          </LandingItem>
        </LandingItems>
      </LandingWrapper>
    </Section>
  );
}

export default LandingBlock;
