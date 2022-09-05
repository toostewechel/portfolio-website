import { styled } from "../../../stitches.config.js";
import ProfileCard from "../profilecard/ProfileCard.js";
import Header from "../../layouts/blocks/Header.js";
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

const Heading = styled("h1", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$5xl",
    mb: "$spacing-06",
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
  mb: "$spacing-07",

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
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: "url(/patterns/circular-background-pattern.svg)",
  backgroundRepeat: "repeat-x",
  left: 0,
  top: 96,
});

const Button = styled("button", {
  padding: "$spacing-04 $spacing-05",
  backgroundColor: "$violet11",
  color: "$violet2",
  fontFamily: "$default",
  fontSize: "$lg",
  fontWeight: "semi-bold",
  borderRadius: "8px",
});

function Landing() {
  return (
    <Section id="#home">
      <LandingWrapper>
        <BackgroundPattern />
        <LandingItems>
          <LandingItem>
            <ContentContainer>
              <AnimatedGradientHeading />
              <Description>
                I create digital products by <em>un•tang•ling</em> complexity in
                a structured, creative and visual way. I am passionate about
                building valuable products that have a real impact.
              </Description>
              <Button>Design Vision</Button>
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

export default Landing;
