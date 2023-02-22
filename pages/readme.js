import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import Landing from "../components/layouts/Landing.js";
import LandingImage from "../components/blog/LandingImage.js";
import LandingContent from "../components/readme/LandingContent.js";
import CharacterTrait from "../components/readme/CharacterTrait.js";
import Header from "../components/layouts/blocks/Header.js";
import CoreValuesBlock from "../components/pageblocks/CoreValuesBlock.js";
import ProgressBar from "../components/progress/Progress.js";

const ContentContainer = styled("div", {
  backgroundColor: "$bronze1",
  pt: "$spacing-14",
  pb: "$spacing-14",
});

const ReadMe = () => {
  return (
    <div>
      <Header />

      <Landing
        accentColor="bronze"
        LandingContent={
          <LandingContent
            pageTitle="Read.Me"
            pageDescription="A fun and alternative way for you; current teammate, future friend, internet stranger, to understand me better. This page is a constant work in progress."
            dateUpdated="24 Feb, 2023"
          />
        }
        LandingImage={<LandingImage src="/readme/cover.png" />}
      />
      <ContentContainer>
        <PageLayout>
          <ProgressBar gradient="blue" progressValue={50} />
					<CharacterTrait 
						labelLeft="What is Read.Me?"
						labelRight="What is Read.Me?"
						percentageLeft="50%"
						percentageRight="50%"
						charactertraitDescription="Read.Me is a free software project that is designed to help you learn more about the internet and how to use it. It is a free, open source, and open source software project. Read.Me"
						progressValue={50}
						gradient="teal"
					/>
          <CoreValuesBlock />
        </PageLayout>
      </ContentContainer>
    </div>
  );
};

export default ReadMe;
