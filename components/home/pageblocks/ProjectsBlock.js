import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Spacer from "../../layouts/blocks/Spacer.js";
import Section from "../../layouts/blocks/Section.js";
import { Timeline, TimelineItem } from "../../timeline/Timeline.js";
import CardHeader from "../../card/CardHeader.js";
import ProjectTimelineCard from "../../card/ProjectTimelineCard.js";

function ProjectsBlock() {
  return (
    <Section id="projects">
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
          <ProjectTimelineCard
            background="/images/placeholder-project-yellow.png"
            english
            title="Design and Develop a Portfolio Site in Next.JS"
            meta="Case Study • 20 min"
          />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="blue"
            hasYear={true}
            alignment="left"
            year="2021"
          />
          <ProjectTimelineCard
            background="/images/placeholder-project-green.png"
            english
            title="Building standardised eHealth modules for healthcare"
            meta="Case Study • 20 min"
          />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="plum"
            hasYear={true}
            alignment="right"
            year="2022"
          />
          <ProjectTimelineCard
            background="/images/placeholder-project-blue.png"
            dutch
            title="De verborgen complexiteit achter noodtoegang"
            meta="Case Study • 15 min"
          />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="blue"
            hasYear={true}
            alignment="left"
            year="2021"
          />
          <ProjectTimelineCard
            background="/images/placeholder-project-crimson.png"
            dutch
            title="Gestandaardiseerde e-health modules ontwikkelen"
            meta="Case Study • 20 min"
          />
        </TimelineItem>
      </Timeline>
    </Section>
  );
}

export default ProjectsBlock;
