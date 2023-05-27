import { styled } from "../stitches.config.js";
import Head from "next/head";
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
import { CheckSquare } from "lucide-react";

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
  marginTop: "80px",
});

export default function WidgetsGrid() {
  return (
    <Wrapper>
      <Head>
        <meta
          name="description"
          content="Author: Tom Oostewechel, Category: Personal Portfolio Site"
        />
        <title>Snapshot Labs | Dashboard</title>
      </Head>
      <Header></Header>
      <PageLayout>
        <ContentContainer>
          <GridWidgetsLayout>
            <GridHeader />
            <ProfileInformation
              tagLabel="Employed"
              tagColor="teal"
              href="/readme"
              hasIcon={true}
              Icon={<CheckSquare size={15} />}
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
