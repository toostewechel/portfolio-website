import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/Header.tsx";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Spacer from "../components/layouts/blocks/Spacer.js";
import ReadMeLandingBlock from "../components/pageblocks/ReadMeLandingBlock.js";
import CoreValuesBlock from "../components/pageblocks/CoreValuesBlock.js";
import PersonalityBlock from "../components/pageblocks/PersonalityBlock.js";
import CompetenciesBlock from "../components/pageblocks/CompetenciesBlock.js";
import CollaborationBlock from "../components/pageblocks/CollaborationBlock.js";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines.svg)",
  backgroundPositionX: "center",
});

const ContentContainer = styled("div", {
  marginTop: "70px",
});

const ReadMe = () => {
  return (
    <Wrapper>
      <Header />
      <ContentContainer>
        <PageLayout>
          <ReadMeLandingBlock />
          <Spacer level={13} />
          <CoreValuesBlock />
          <Spacer level={13} />
          <PersonalityBlock />
          <Spacer level={13} />
          <CompetenciesBlock />
          <Spacer level={13} />
          <CollaborationBlock />
          <Spacer level={13} />
        </PageLayout>
      </ContentContainer>
    </Wrapper>
  );
};

export default ReadMe;
