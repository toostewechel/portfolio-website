import { styled } from "../../stitches.config.js";
import ContentBlock from "../layouts/blocks/ContentBlock";
import Spacer from "../layouts/blocks/Spacer.js";
import Section from "../layouts/blocks/Section.js";
import { Timeline, TimelineItem } from "../timeline/Timeline.js";
import CardHeader from "../card/CardHeader";
import BlogTimelineCard from "../card/BlogTimelineCard";

const ContentContainer = styled("div", {
  marginBottom: "232px",
});

function BlogpostsBlock() {
  return (
    <Section>
      <ContentContainer>
        <ContentBlock
          title="Stories & Ideas"
          alignment="left"
          description="I write about various topics, but most of my stories are related to technological innovation, user interface and user experience design, and workflow management."
        />
        <Spacer level={6} />
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2023"
            />
            <BlogTimelineCard
              href="/blog/deploy-your-site-on-the-decentralised-cloud"
              image="/blog/deploy-your-site-on-the-decentralised-cloud/cover.png"
              title="Deploy your Site on the Decentralised Cloud"
              description="Decentralised cloud computing aims to create a more democratic and secure system, where users have greater control over their data and privacy."
              meta="17 June 2023"
              color="blue"
              category="Tech"
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="teal"
              hasYear={true}
              alignment="left"
              year="2023"
            />
            <BlogTimelineCard
              href="/blog/living-with-a-linear-mind-in-an-exponential-age"
              image="/blog/living-with-a-linear-mind-in-an-exponential-age/cover.png"
              title="Living With a Linear Mind in an Exponential Age"
              description="How Personal Knowledge Management can help you thrive in an exponential age by efficiently turning your thoughts, ideas and discoveries into wisdom."
              meta="31 March 2023"
              color="plum"
              category="Workflow"
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="bronze"
              hasYear={true}
              alignment="right"
              year="2023"
            />
            <BlogTimelineCard
              href="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web"
              image="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web/cover.png"
              title="The Rise of the Unstoppable, Decentralized and Semantic Web"
              description="Since the web came into existence in 1989, it has steadily evolved into an ecosystem of large, corporate-controlled, centralised mega-platforms."
              meta="21 January 2023"
              color="blue"
              category="Tech"
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="crimson"
              hasYear={true}
              alignment="left"
              year="2021"
            />
            <BlogTimelineCard
              href="/blog/design-for-accessibility"
              image="/blog/design-for-accessibility/cover.png"
              title="Design Accessibile Experiences in the Healthcare Sector"
              description="Ontwerpen voor toegankelijkheid maakt de gebruikservaring beter voor iedereen. In dit artikel lees je wat digitale toegankelijkheid betekent voor een gebruiker."
              meta="11 February 2020"
              color="crimson"
              category="Design"
              language="dutch"
            />
          </TimelineItem>
        </Timeline>
      </ContentContainer>
    </Section>
  );
}

export default BlogpostsBlock;
