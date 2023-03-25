import { styled } from "../../stitches.config.js";
import Section from "../layouts/blocks/Section.js";
import LandingContent from "../readme/LandingContent";
import ContentBlock from "../layouts/blocks/ContentBlock.js";

const LandingWrapper = styled("div", {});

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

const StyledImage = styled("img", {
  width: "100%",
  height: "auto",
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
              dateUpdated="25 March, 2023"
            />
          </LandingItem>
          <LandingItem>
            <StyledImage src="/readme/landing.png" />
          </LandingItem>
        </LandingItems>
      </LandingWrapper>
    </Section>
  );
}
