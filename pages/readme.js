import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import Landing from "../components/layouts/Landing.js";
import LandingImage from "../components/blog/LandingImage.js";
import LandingContent from "../components/readme/LandingContent.js";
import Header from "../components/layouts/blocks/Header.js";
import CoreValuesBlock from "../components/pageblocks/CoreValuesBlock.js";

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
          <CoreValuesBlock />
        </PageLayout>
      </ContentContainer>
    </div>
  );
};

export default ReadMe;
