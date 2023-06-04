import { styled } from "../stitches.config.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageLayout, GridWidgetsLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/blocks/Header";
import Footer from "../components/layouts/blocks/Footer.js";
import { GridHeader } from "../components/widgets/GridHeader.tsx";
import { ProfileInformation } from "../components/widgets/ProfileInformation.tsx";
import { Snapshot } from "../components/widgets/Snapshot.tsx";
import { BookMeeting } from "../components/widgets/BookMeeting.js";
import { Personality } from "../components/widgets/Personality.tsx";
import { CoreCompetencies } from "../components/widgets/CoreCompetencies.tsx";
import { Blogpost } from "../components/widgets/Blogpost.tsx";
import { OperatingPrinciples } from "../components/widgets/OperatingPrinciples.tsx";
import { Experience } from "../components/widgets/Experience.tsx";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines.svg)",
  backgroundPositionX: "center",
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "232px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "87px",
});

export default function WidgetsGrid() {
  const router = useRouter();
  const currentUrl = `https://www.snapshotlabs.nl${router.asPath}`;

  return (
    <Wrapper>
      <Head>
        <title>Snapshot Labs | Widgets</title>
        <meta property="og:title" content="Snapshot Labs | Widgets" />
        <meta
          property="og:description"
          content="This site offers a fun and personal showcase. Take a sneak peek into my world, featuring a carefully curated selection of my creative and professional achievements."
        />
        <meta property="og:image" content="/widgets/cover-home.png" />
        <meta property="og:image:width" content="760" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={currentUrl} />
      </Head>
      <Header></Header>
      <PageLayout>
        <ContentContainer>
          <GridWidgetsLayout>
            <GridHeader />
            <ProfileInformation
              tagLabel="Employed"
              tagColor="olive"
              href="/readme"
            />
            <Snapshot
              type="Case Study"
              title="Build Standardised eHealth Modules for Healthcare"
              language="en"
              backgroundColor="blue"
              backgroundImage="/widgets/cover-build-standardised-ehealth.png"
            />
            <BookMeeting />
            <Personality />
            <CoreCompetencies />
            <Blogpost
              href="/blog/living-with-a-linear-mind-in-an-exponential-age/"
              color="teal"
              imageSrc="/widgets/cover-image-living-with-a-linear-mind-in-an-exponential-age.png"
              title="Living With a Linear Mind in an Exponential Age"
              description="How personal knowledge management can help you thrive in an exponential age."
              datePosted="31 March 2023"
              labelColor="teal"
            />
            <OperatingPrinciples />
            <Experience />
          </GridWidgetsLayout>
        </ContentContainer>
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
