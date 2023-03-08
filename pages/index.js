import { styled } from "../stitches.config.js";
import { PageLayout, GridWidgetsLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/Header.tsx";
import Footer from "../components/layouts/blocks/Footer.js";
import { Tag } from "../components/tag/Tag.tsx";
import { ChevronsRight } from "lucide-react";
import { GridHeader } from "../components/widgets/GridHeader.tsx";
import { ProfileInformation } from "../components/widgets/ProfileInformation.tsx";
import { Snapshot } from "../components/widgets/Snapshot.tsx";
import { BookMeeting } from "../components/widgets/BookMeeting.tsx";
import { Personality } from "../components/widgets/Personality.tsx";
import { CoreCompetencies } from "../components/widgets/CoreCompetencies.tsx";
import { Blogpost } from "../components/widgets/Blogpost.tsx";
import { OperatingPrinciples } from "../components/widgets/OperatingPrinciples.tsx";
import { Experience } from "../components/widgets/Experience.tsx";
import { ArrowUpRight } from "lucide-react";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines-red.svg)",
  backgroundPositionX: "center",
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "232px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "72px",
});

export default function WidgetsGrid() {
  return (
    <Wrapper>
      <Header></Header>
      <PageLayout>
        <ContentContainer>
          <GridWidgetsLayout>
            <GridHeader />
            <ProfileInformation
              tagLabel="Open for Work"
              tagColor="teal"
              hasIcon={false}
              hasJob={false}
            />
            <Snapshot
              type="Case Study"
              title="Build Standardised eHealth Modules for Healthcare"
              language="en"
              backgroundColor="blue"
              backgroundImage="/widgets/case-study-cover.png"
            />
            <BookMeeting />
            <Personality />
            <CoreCompetencies />
            <Blogpost
              color="crimson"
              imageSrc="/widgets/cover-image-design-for-healthcare.png"
              title="Design for Accessibility"
              description="Ontwerpen voor toegankelijkheid maakt de gebruikservaring beter voor iedereen, ongeacht beperking"
              datePosted="24 February, 2020"
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
