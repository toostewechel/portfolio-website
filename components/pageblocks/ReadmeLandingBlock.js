import { styled } from "../../stitches.config.js";
import Section from "../layouts/blocks/Section.js";
import LandingContent from "../readme/LandingContent";

const LandingWrapper = styled("div", {
  m: 0,
});

const LandingItems = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "0",
  gap: "$spacing-08",

  "@bp4": {
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
  width: "100%",

  "@bp2": {
    flexBasis: "calc(50% - 16px)",
  },
});

const StyledImage = styled("img", {
  width: "100%",
  height: "auto",
});

export default function ReadMeLandingBlock() {
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
