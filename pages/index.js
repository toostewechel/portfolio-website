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
              href="/blog/deploy-your-site-on-the-decentralised-cloud/"
              color="blue"
              imageSrc="/widgets/cover-image-deploy-your-site-on-the-decentralised-cloud.png"
              title="Deploy your Site on the Decentralised Cloud"
              description="A step-by-step walkthrough of how to deploy your Next.JS site to the decentralised cloud."
              datePosted="20 June 2023"
              labelColor="blue"
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
