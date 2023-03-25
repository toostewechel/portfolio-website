import { styled } from "../../stitches.config.js";
import Section from "../layouts/blocks/Section.js";
import LandingContent from "../readme/LandingContent";

const LandingWrapper = styled("div", {
  maxWidth: "1234px",
  margin: "$spacing-14 auto",
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
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "0",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
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
    fontSize: "$lg",
  },
});

const StyledImage = styled("img", {
  width: "100%",
  height: "auto",
});

const ContentContainer = styled("div", {
  maxWidth: "532px",
});

export default function ReadmeLandingBlock() {
  return (
    <Section>
      <LandingWrapper>
        <LandingItems>
          <LandingItem>
            <LandingContent
              pageTitle="Read Me"
              pageDescription="An alternative way for you (current teammate, future friend, internet stranger) to understand me better. This page is a constant work in progress!"
            />
          </LandingItem>
          <LandingItem>
            <StyledImage src="/images/landing-placeholder-2.png" />
          </LandingItem>
        </LandingItems>
      </LandingWrapper>
    </Section>
  );
}
