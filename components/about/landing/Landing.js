import { styled } from "../../../stitches.config.js";
import ProfileCard from "../profilecard/ProfileCard.js";
import Header from "../../layouts/blocks/Header.js";
import Section from "../../layouts/blocks/Section.js";
import AnimatedGradientHeading from "./AnimatedGradientHeading.js";

const LandingWrapper = styled("div", {
  maxWidth: "1234px",
  margin: "0 auto",
});

const LandingItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
  gap: "$spacing-08",

  "@bp2": {
    flexDirection: "row",
  },
});

const LandingItem = styled("div", {
  display: "flex",
  alignItems: "center",
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

function Landing() {
  return (
    <Section id="#home">
      <LandingWrapper>
        <LandingItems>
          <LandingItem>
            <ContentContainer>
              <AnimatedGradientHeading />
              <Description>
                I design and build digital products by <em>un•tang•ling</em>{" "}
                complexity in a structured, creative and visual way. I am
                passionate about building valuable products that have a real
                impact.
              </Description>
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
