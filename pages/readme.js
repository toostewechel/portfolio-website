import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/blocks/Header.tsx";
import Footer from "../components/layouts/blocks/Footer.js";
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
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-11",
  marginTop: "70px",
  marginBottom: "232px",

  "@bp1": {
    gap: "$spacing-13",
  },
  "@bp2": {
    gap: "$spacing-14",
  },
});

const ReadMe = () => {
  return (
    <Wrapper>
      <Header />
      <PageLayout>
        <ContentContainer>
          <ReadMeLandingBlock />
          <CoreValuesBlock />
          <PersonalityBlock />
          <CompetenciesBlock />
          <CollaborationBlock />
        </ContentContainer>
      </PageLayout>
      <Footer />
    </Wrapper>
  );
};

export default ReadMe;
