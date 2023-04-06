import { styled } from "../../stitches.config.js";
import Section from "../layouts/blocks/Section.js";
import LandingContent from "../readme/LandingContent";

const LandingWrapper = styled("div", {
  m: 0,

  "@bp4": {
    overflow: "hidden",
  },
  "@bp5": {
    overflow: "hidden",
  },
  "@bp6": {
    overflow: "visible",
  },
});

const LandingItems = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "0",
  gap: "$none",

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

const DesktopContainer = styled("div", {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "650px",
});

const TabletContainer = styled("div", {});

function StyledSplineScene({ width, height }) {
  return (
    <spline-viewer
      width={width}
      height={height}
      url="https://prod.spline.design/AaRRyVI2zmxoTZpj/scene.splinecode"
    ></spline-viewer>
  );
}

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
            <DesktopContainer>
              <StyledSplineScene width="800" height="800" />
            </DesktopContainer>
          </LandingItem>
        </LandingItems>
      </LandingWrapper>
    </Section>
  );
}
