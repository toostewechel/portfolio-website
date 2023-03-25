import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import Landing from "../components/layouts/Landing.js";
import LandingImage from "../components/blog/LandingImage.js";
import LandingContent from "../components/readme/LandingContent";
import { Header } from "../components/layouts/Header.tsx";
import CoreValuesBlock from "../components/pageblocks/CoreValuesBlock.js";
import PersonalityBlock from "../components/pageblocks/PersonalityBlock.js";
import CoreCompetenciesAccordion from "../components/accordion/CoreCompetenciesAccordion.js";
import CompetenciesBlock from "../components/pageblocks/CompetenciesBlock.js";
import ProgressBar from "../components/progress/Progress.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
import ReadmeLandingBlock from "../components/pageblocks/ReadmeLandingBlock.js";

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
          <ReadmeLandingBlock />
          <Spacer level={13} />
          <CoreValuesBlock />
          <Spacer level={13} />
          <PersonalityBlock />
          <Spacer level={13} />
          <CompetenciesBlock />
          <CoreCompetenciesAccordion />
        </PageLayout>
      </ContentContainer>
    </Wrapper>
  );
};

export default ReadMe;
