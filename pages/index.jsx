import { styled } from "../stitches.config.js";
import ProfessionalAchievementsTab from "../components/tabs/ProfessionalAchievementsTabs.js";
import Banner from "../components/home/pageblocks/Banner.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
import ContentBlock from "../components/layouts/blocks/ContentBlock.js";
import Header from "../components/layouts/blocks/Header.js";
import Landing from "../components/home/landing/Landing.js";
import CoreValues from "../components/home/pageblocks/CoreValues.js";
import { Timeline, TimelineItem } from "../components/timeline/Timeline.js";
import CardHeader from "../components/card/CardHeader.js";
import BlogTimelineCard from "../components/card/BlogTimelineCard.js";
import ProjectTimelineCard from "../components/card/ProjectTimelineCard.js";

const Title = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const Paragraph = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$body",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",
  mb: "$spacing-06",

  "@bp1": {
    fontSize: "$xl",
  },
});

const PageLayout = styled("div", {
  maxWidth: "1234px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

function HomePage() {
  return (
    <div>
      <Header />
      <Spacer level={12} />
      <Landing />
      <Spacer level={12} />
      <PageLayout>
        <ContentBlock
          heading="Core Values"
          alignment="center"
          description="These values guide me when making decisions, building relationships and solving problems."
        />
      </PageLayout>
      <Spacer level={6} />
      <CoreValues />
      <Spacer level={12} />
      <PageLayout>
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
      <Spacer level={12} />
      <Banner />
      <Spacer level={7} />
      <PageLayout>
        <ProfessionalAchievementsTab />
      </PageLayout>
      <Spacer level={12} />
      <a href="/projects/gestandaardiseerde-ehealth-modules-ontwikkelen/">
        Go to link!!!
      </a>
    </div>
  );
}

export default HomePage;
