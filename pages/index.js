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
import { CarouselExample } from "../components/carousel/Carousel.tsx";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines.svg)",
  backgroundPositionX: "center",
});

const CoreCompetenciesWidget = styled("div", {
  gridArea: "cc",
  display: "flex",
  backgroundColor: "$olive6",
  boxShadow: "$small",
  borderRadius: "16px",
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

export default function WidgetsGrid() {
  return (
    <Wrapper>
      <Header></Header>
			<CarouselExample />
      <PageLayout
        style={{
          marginTop: "152px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "232px",
        }}
      >
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
          <CoreCompetenciesWidget>
						
					</CoreCompetenciesWidget>
          <BlogPostWidget />
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
