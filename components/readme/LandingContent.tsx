import { useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";
import ProfileCard from "../card/ProfileCard";
import MenuItem from "../home/profilecard/MenuItem";
import ContentBlock from "../layouts/blocks/ContentBlock";
import CollapsibleContent from "../collapsible/Collapsible";

const ContentContainer = styled("div", {
  display: "flex",
  gap: "$spacing-09",
  flexDirection: "column",
  alignItems: "flex-start",
});

const ProfileCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "$spacing-04",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "16px",
  width: "100%",

  "@bp1": {
    width: "100%",
    flexDirection: "row",
  },
});

const ProfileCardIndex = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  padding: "$spacing-03 $none",
  gap: "$spacing-03",

  "@bp1": {
    display: "flex",
    padding: "$spacing-05",
  },
});

const Menu = styled("p", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  lineHeight: "$compact",
  color: "$mauve12",
  display: "none",

  "@bp1": {
    display: "flex",
  },
});

const ContentLayout = styled("div", {
  width: "100%",

  "@bp2": {
    width: "55%",
  },
});

function ProfileCardMenu() {
  return (
    <ProfileCardIndex>
      <Menu>Menu</Menu>
      <MenuItem label="Values & Strengths" href="#core-values" />
      <MenuItem label="Personality" href="#personality" />
      <MenuItem label="Competencies" href="#competencies" />
      <MenuItem label="Collaboration" href="#collaboration" />
    </ProfileCardIndex>
  );
}

export default function LandingContent() {
  const [bp1, setBp1] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 480px)");
    setBp1(mediaQuery.matches);

    const listener = () => {
      setBp1(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <ContentContainer>
      <ContentBlock
        textAlignment="left"
        as="h1"
        title="Read.Me"
        description="An alternative way for you (current teammate, future friend, internet stranger) to understand me better. This page is a constant work in progress!"
      />
      <ProfileCardContainer>
        <ProfileCard />
        <ContentLayout>
          {bp1 ? (
            <ProfileCardMenu />
          ) : (
            <CollapsibleContent title="Menu" color="gray">
              <ProfileCardMenu />
            </CollapsibleContent>
          )}
        </ContentLayout>
      </ProfileCardContainer>
    </ContentContainer>
  );
}
