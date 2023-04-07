import { styled } from "../stitches.config.js";
import Head from "next/head";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/blocks/Header";
import Footer from "../components/layouts/blocks/Footer.js";
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
  marginTop: "59px",
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
      <Head>
        <meta
          name="description"
          content="Author: Tom Oostewechel, Category: Personal Portfolio Site"
        />
        <title>Snapshot Labs | Read Me</title>
      </Head>
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
