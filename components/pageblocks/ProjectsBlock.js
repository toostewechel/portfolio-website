import { styled } from "../../stitches.config.js";
import ContentBlock from "../layouts/blocks/ContentBlock";
import Spacer from "../layouts/blocks/Spacer.js";
import Section from "../layouts/blocks/Section.js";
import { Timeline, TimelineItem } from "../timeline/Timeline.js";
import CardHeader from "../card/CardHeader";
import { ProjectTimelineCard } from "../card/ProjectTimelineCard";

const ContentContainer = styled("div", {
  marginBottom: "232px",
});

function ProjectsBlock() {
  return (
    <Section>
      <ContentContainer>
        <ContentBlock
          title="Snapshots"
          alignment="left"
          description="A curated overview of my professional and personal work throughout the years as product designer"
        />
        <Spacer level={6} />
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="gray"
              hasYear={true}
              alignment="left"
              year="2023"
            />
            <ProjectTimelineCard
              type="Project"
              title="Design and Develop a Portfolio Site in Next.JS"
              language="en"
              backgroundColor="blue"
              backgroundImage="/widgets/cover-develop-next-js-site.png"
            />
          </TimelineItem>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="bronze"
              hasYear={true}
              alignment="right"
              year="2023"
            />
            <ProjectTimelineCard
              type="Case Study"
              title="Build Standardised eHealth Modules for Healthcare"
              language="en"
              backgroundColor="blue"
              backgroundImage="/widgets/cover-build-standardised-ehealth.png"
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2022"
            />
            <ProjectTimelineCard
              type="Project"
              title="De verborgen complexiteit achter noodtoegang"
              language="nl"
              backgroundColor="blue"
              backgroundImage="/widgets/cover-emergency-procedure.png"
            />
          </TimelineItem>
        </Timeline>
      </ContentContainer>
    </Section>
  );
}

export default ProjectsBlock;
