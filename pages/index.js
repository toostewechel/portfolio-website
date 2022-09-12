import { styled } from "../stitches.config.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
import ContentBlock from "../components/layouts/blocks/ContentBlock.js";
import Header from "../components/layouts/blocks/Header.js";
import Footer from "../components/layouts/blocks/Footer.js";
import Landing from "../components/home/landing/Landing.js";
import CoreValuesBlock from "../components/home/pageblocks/CoreValuesBlock.js";
import { Timeline, TimelineItem } from "../components/timeline/Timeline.js";
import CardHeader from "../components/card/CardHeader.js";
import ProjectTimelineCard from "../components/card/ProjectTimelineCard.js";
import SkillsetBlock from "../components/home/pageblocks/SkillsetBlock.js";
import ExperienceBlock from "../components/home/pageblocks/ExperienceBlock.js";
import SoftwareStackBlock from "../components/home/pageblocks/SoftwareStackBlock.js";

const PageLayout = styled("div", {
  maxWidth: "1234px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

function Index() {
  return (
    <div>
      <Header />
      <Spacer level={12} />
      <Landing />
      <Spacer level={12} />
      <CoreValuesBlock />
      <Spacer level={12} />
      <PageLayout id="projects">
        <ContentBlock
          heading="Snapshots"
          alignment="left"
          description="A curated overview of my professional and personal work throughout the years as product designer"
        />
        <Spacer level={6} />
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="crimson"
              hasYear={true}
              alignment="left"
              year="2022"
            />
            <ProjectTimelineCard background="/images/placeholder-timeline-item.png" />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="right"
              year="2022"
            />
            <ProjectTimelineCard background="/images/placeholder-timeline-item2.png" />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2021"
            />
            <ProjectTimelineCard background="/images/placeholder-timeline-item3.png" />
          </TimelineItem>
          <TimelineItem>
            <CardHeader color="blue" hasYear={false} alignment="left" />
            <ProjectTimelineCard background="/images/placeholder-timeline-item.png" />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2021"
            />
            <ProjectTimelineCard background="/images/placeholder-timeline-item.png" />
          </TimelineItem>
        </Timeline>
      </PageLayout>
      <Spacer level={12} />
      <PageLayout>
        <SkillsetBlock />
      </PageLayout>
      <Spacer level={12} />
      <PageLayout>
        <ExperienceBlock />
      </PageLayout>
      <Spacer level={6} />
      <PageLayout>
        <SoftwareStackBlock />
      </PageLayout>
      <Spacer level={6} />
      <PageLayout>
        <Footer />
      </PageLayout>
    </div>
  );
}

export default Index;
