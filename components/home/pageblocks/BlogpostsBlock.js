import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Spacer from "../../layouts/blocks/Spacer.js";
import Section from "../../layouts/blocks/Section.js";
import { Timeline, TimelineItem } from "../../timeline/Timeline.js";
import CardHeader from "../../card/CardHeader.js";
import BlogTimelineCard from "../../card/BlogTimelineCard.js";

const BackgroundContainer = styled("div", {
  position: "relative",
  overflow: "visible",
})

const BackgroundPattern = styled("div", {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundImage: "url(/patterns/writing-section-background.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "135% auto",
  top: "-50%",
  zIndex: -1,

  "@bp2": {
    backgroundSize: "75% auto",
    top: -364,
  }
})

function BlogpostsBlock() {
  return (
    <Section id="writing">
      <BackgroundContainer>
      <BackgroundPattern />
      <ContentBlock
        heading="Stories & Ideas"
        alignment="center"
        description="I write about various topics, but most of my stories are related to technological innovation, user interface and user experience design, and workflow management. "
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
          <BlogTimelineCard
            href="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web"
            image="/images/placeholder-timeline-item.png"
            title="The Rise of the Unstoppable, Decentralized and Semantic Web"
            description="I have empathy for those around me and respect their point of view. I have empathy for those around me and respect their point of view"
            meta="Article • 20 min read"
            color="blue"
            category="Tech"
          />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="plum"
            hasYear={true}
            alignment="right"
            year="2022"
          />
         <BlogTimelineCard
            image="/images/placeholder-timeline-item.png"
            title="The Rise of the Unstoppable, Decentralized and Semantic Web"
            description="I have empathy for those around me and respect their point of view. I have empathy for those around me and respect their point of view"
            meta="Article • 20 min read"
            color="blue"
            category="Tech"
          />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="blue"
            hasYear={true}
            alignment="left"
            year="2021"
          />
         <BlogTimelineCard
            image="/images/placeholder-timeline-item.png"
            title="The Rise of the Unstoppable, Decentralized and Semantic Web"
            description="I have empathy for those around me and respect their point of view. I have empathy for those around me and respect their point of view"
            meta="Article • 20 min read"
            color="blue"
            category="Tech"
          />
        </TimelineItem>
        <TimelineItem>
          <CardHeader color="blue" hasYear={false} alignment="left" />
          <BlogTimelineCard background="/images/placeholder-timeline-item.png" />
        </TimelineItem>
        <TimelineItem>
          <CardHeader
            color="blue"
            hasYear={true}
            alignment="left"
            year="2021"
          />
          <BlogTimelineCard
            image="/images/placeholder-timeline-item.png"
            title="The Rise of the Unstoppable, Decentralized and Semantic Web"
            description="I have empathy for those around me and respect their point of view. I have empathy for those around me and respect their point of view"
            meta="Article • 20 min read"
            color="blue"
            category="Tech"
          />
        </TimelineItem>
      </Timeline>
        </BackgroundContainer>
    </Section>
  );
}

export default BlogpostsBlock;
