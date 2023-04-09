//Default Imports
import { createRef } from "react";
import Head from "next/head";
import { styled } from "../../../stitches.config.js";

//Blog Header & Footer
import { BlogHeader } from "../../../components/layouts/blocks/Header";

//Blog Landing Components
import Landing from "../../../components/layouts/Landing.js";
import LandingContent from "../../../components/blog/LandingContent.js";
import LandingImage from "../../../components/blog/LandingImage.js";

//HoverCard Components
import {
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardPanel,
} from "../../../components/card/HoverCard.js";

//Blog Content Layout
import {
  BlogContentLayout,
  BlogMarkdownContentLayout,
} from "../../../components/layouts/Layout.js";

//Blog NavBar
import NavBar from "../../../components/blog/NavBar.js";

//Blog Content Components
import {
  KeyTakeawaysCollapsible,
  ListItem,
} from "../../../components/blog/KeyTakeawaysCollapsible.tsx";
import MarkdownContentBlock from "../../../components/blog/MarkdownContentBlock.js";

//Blog Chapter Components
import Chapter from "../../../components/blog/Chapter.js";
import ChapterContent from "../../../components/blog/ChapterContent.js";
import ChapterImage from "../../../components/blog/ChapterImage.js";

//Content
import Chapter1 from "./01-chapter.mdx";
import Chapter2 from "./02-chapter.mdx";
import Chapter3 from "./03-chapter.mdx";
import Chapter4 from "./04-chapter.mdx";

//ShareToLinks Object
const shareTo = {
  twitter:
    "https://twitter.com/intent/tweet?url=https://www.snapshotlabs.nl/blog/living-with-a-linear-mind-in-an-exponential-age&text=How%20personal%20knowledge%20management%20can%20help%20you%20thrive%20in%20an%20exponential%20age%20by%20efficiently%20turning%20your%20thoughts%2C%20ideas%20and%20discoveries%20into%20a%20interconnected%20knowledge%20base.",
  linkedin:
    "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsnapshotlabs.nl%2Fblog%2Fliving-with-a-linear-mind-in-an-exponential-age&title=Living%20with%20a%20Linear%20Mind%20in%20an%20Exponential%20Age&summary=How%20personal%20knowledge%20management%20can%20help%20you%20thrive%20in%20an%20exponential%20age%20by%20efficiently%20turning%20your%20thoughts%2C%20ideas%20and%20discoveries%20into%20a%20interconnected%20knowledge%20base.",
};

//Custom Component
const PoweredByBadge = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve12",
  transition: "background 300ms ease-in",
  background: "transparent",
  padding: "$spacing-03",
  borderRadius: "6px",
  border: "1px solid transparent",
  fontFamily: "$default",
  fontSize: "$xs",
  width: "280px",

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauveA9",
    border: "1px solid $mauveA11",
  },
});

function HoverCard() {
  return (
    <HoverCardRoot>
      <HoverCardTrigger asChild>
        <PoweredByBadge href="https://midjourney.com" target="_blank">
          <p>Illustration by </p>
          <img
            style={{ height: "32px" }}
            src="/badges/midjourney-logo-badge.png"
            alt="Midjourney Logo"
          />
        </PoweredByBadge>
      </HoverCardTrigger>
      <HoverCardPanel
        logo="/avatar/midjourney.png"
        title="Midjourney"
        socialHandle="@midjourney"
        description="New research lab. Exploring new mediums of thought. Expanding the imaginative powers of the human species."
        followingCount="0"
        followersCount="190,4K"
      />
    </HoverCardRoot>
  );
}

export default function BlogPostPage() {
  //Create Ref for ReadingProgressBar
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <Head>
        <meta
          name="description"
          content="Author: Tom Oostewechel, Category: Personal Portfolio Site"
        />
        <title>
          Snapshot Labs | Blogpost | Living With A Linear Mind in an Exponential
          Age
        </title>
      </Head>
      <BlogHeader
        targetRef={targetRef}
        gradient="teal"
        twitter={shareTo.twitter}
        facebook={shareTo.facebook}
        linkedin={shareTo.linkedin}
      />
      <article>
        <Landing
          accentColor="teal"
          LandingContent={
            <LandingContent
              href="#blog-content"
              avatarImage="/avatar/avatar-tom-oostewechel.png"
              avatarLabel="Tom Oostewechel"
              avatarDescription="Author"
              datePosted="31 March, 2023"
              blogTitle="Living With a Linear Mind in an Exponential Age"
              blogDescription="How personal knowledge management can help you thrive in an exponential age by efficiently turning your thoughts, ideas and discoveries into a interconnected knowledge base."
            />
          }
          LandingImage={
            <LandingImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/landing.png" />
          }
          HoverCardContent={<HoverCard />}
        />
        <BlogContentLayout id="blog-content">
        <KeyTakeawaysCollapsible accentColor="teal">
              <ListItem>
                There is an ever-growing gap between the increased pace of
                change and our society’s ability to keep up
              </ListItem>
              <ListItem>
                I believe every person needs some sort of personal knowledge
                capture system that can adapt to our changing needs
              </ListItem>
              <ListItem>
                Knowledge workers spend an average of 40% looking for
                information and discretionary activities that offer little
                personal satisfaction
              </ListItem>
              <ListItem>
                To have a clear and focused mind, we need to externalise our
                thoughts out of our heads and into our external memory system
              </ListItem>
              <ListItem>
                Writing is, without question, the best facilitator for thinking,
                reading, learning, understanding and generating ideas we have.
                Write it down if you want to learn something in the long run.
              </ListItem>
              <ListItem>
                At its core, PKM is about rethinking your relationship with
                information and cultivating self-awareness and self-knowledge.
              </ListItem>
              <ListItem>
                Tools and techniques should be embedded into a standardised
                workflow to prevent falling back into old habits.
              </ListItem>
              <ListItem>
                A good workflow that works for you should provide structure and
                enables trust and a flow state.
              </ListItem>
              <ListItem>
                Always decide your preferred workflow before choosing the tools
                and techniques.
              </ListItem>
              <ListItem>
                A PKM system can serve many different functions and
                capabilities, so you should always start with why you need or
                want to use it in the first place.
              </ListItem>
              <ListItem>
                Your system can look chaotic to others, but it is right for you
                if it brings you value and delight.
              </ListItem>
              <ListItem>
                Organise by balancing structure and flexibility: apply a
                bottom-up approach, augment your brain by choosing an
                application that uses a knowledge graph database and reduce
                cognitive load by standardising how and in which format you
                capture object types.
              </ListItem>
              <ListItem>
                Organise your knowledge organically and according to your
                interests by tagging or assigning keywords to your objects.
              </ListItem>
              <ListItem>
                Being organised is a habit - a repeated set of actions you take
                as you encounter, work with and put the information to use
              </ListItem>
            </KeyTakeawaysCollapsible>
          <BlogMarkdownContentLayout>
            <MarkdownContentBlock chapter="chapter-01" Content={Chapter1} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="teal"
            ChapterContent={
              <ChapterContent
                href="#chapter-02"
                chapterNumber="02"
                accentColor="teal"
                chapterTitle="The Enemies and Limitations of Our Brain"
                chapterDescription="How often have you tried to remember something important after a busy day and felt it slip through your mental grasp? Our brains have limited capabilities, and information overload heavily taxes our mental resources."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/chapter-02.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-02">
            <MarkdownContentBlock chapter="chapter-02" Content={Chapter2} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="teal"
            ChapterContent={
              <ChapterContent
                href="#chapter-03"
                chapterNumber="03"
                accentColor="teal"
                chapterTitle="Change Your Mindset and Keep It Simple"
                chapterDescription="Personal knowledge management is about personal growth and a shifting mindset. A good application requires habit change, deliberate practice, and perseverance. Good solutions are simple and provide structure, enabling trust and flow."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/chapter-03.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-03">
            <MarkdownContentBlock chapter="chapter-03" Content={Chapter3} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="teal"
            ChapterContent={
              <ChapterContent
                href="#chapter-04"
                chapterNumber="04"
                accentColor="teal"
                chapterTitle="Organise Knowledge by Balancing Structure and Flexibility"
                chapterDescription="A critical trade-off we should make for the design of our system is the balance between structure and flexibility. Finding the right balance between the two is critical to designing a stable system that provides direction and adapts to changing circumstances and needs."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/chapter-04.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-04">
            <MarkdownContentBlock chapter="chapter-04" Content={Chapter4} />
          </BlogMarkdownContentLayout>
        </BlogContentLayout>
      </article>
    </div>
  );
}
