import { styled } from "../stitches.config.js";
import { PageLayout, GridWidgetsLayout } from "../components/layouts/Layout.js";
import Header from "../components/layouts/blocks/Header.js";
import Footer from "../components/layouts/blocks/Footer.js";
import { Tag } from "../components/tag/Tag.tsx";
import { ChevronsRight } from "lucide-react";
import { ProfileInformation } from "../components/widgets/ProfileInformation.tsx";
import { Snapshot } from "../components/widgets/Snapshot.tsx";
import { BookMeeting } from "../components/widgets/BookMeeting.tsx";
import { Personality } from "../components/widgets/Personality.tsx";
import { CoreCompetencies } from "../components/widgets/CoreCompetencies.tsx";
import { Blogpost } from "../components/widgets/Blogpost.tsx";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines-red.svg)",
  backgroundPositionX: "center",
});

const PersonalityWidget = styled("div", {
  gridArea: "pers",
  display: "flex",
  backgroundColor: "$olive6",
  boxShadow: "$small",
  borderRadius: "16px",
  aspectRatio: "1/1",
});

const BlogPostWidget = styled("div", {
  gridArea: "bp",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: "$olive6",
  boxShadow: "$small",
  borderRadius: "16px",
});

const CollaborationWidget = styled("div", {
  gridArea: "col",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: "$olive6",
  boxShadow: "$small",
  borderRadius: "16px",
});

const ExperienceWidget = styled("div", {
  gridArea: "exp",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: "$olive6",
  boxShadow: "$small",
  borderRadius: "16px",
});

const Heading = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "0",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

export default function WidgetsGrid() {
  return (
    <Wrapper>
      <Header></Header>
      <PageLayout
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "232px",
        }}
      >
        <Heading>Take a Peek</Heading>
        <GridWidgetsLayout>
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
            color="teal"
            imageSrc="/widgets/blog-cover.png"
            title="Living With a Linear Mind in an Exponential Age"
            description="Why Personal Knowledge Management can help you thrive in an exponential age"
            datePosted="24 February, 2023"
          />
          <CollaborationWidget />
          <ExperienceWidget />
        </GridWidgetsLayout>
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
