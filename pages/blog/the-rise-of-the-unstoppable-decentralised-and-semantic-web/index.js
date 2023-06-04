//Default Imports
import { createRef } from "react";
import Head from "next/head";
import { styled } from "../../../stitches.config.js";
import { useRouter } from "next/router";

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

//ShareToLinks Object
const shareTo = {
  twitter:
    "https://twitter.com/intent/tweet?url=https://snapshotlabs.nl/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web&text=Since%20the%20web%20came%20into%20existence%20in%201989%2C%20it%20has%20steadily%20evolved%20into%20an%20ecosystem%20of%20large%2C%20corporate-controlled%2C%20centralised%20mega-platforms.",
  linkedin:
    "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsnapshotlabs.nl%2Fblog%2Fthe-rise-of-the-unstoppable-decentralised-and-semantic-web&title=The%20Rise%20of%20the%20Unstoppable%20Decentralised%20and%20Semantic%20Web&summary=Since%20the%20web%20came%20into%20existence%20in%201989%2C%20it%20has%20steadily%20evolved%20into%20an%20ecosystem%20of%20large%2C%20corporate-controlled%2C%20centralised%20mega-platforms.",
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
  const router = useRouter();
  const currentUrl = `https://www.snapshotlabs.nl${router.asPath}`;
  return (
    <div ref={targetRef}>
      <Head>
        <title>
          Snapshot Labs | Blogpost | The Rise of The Unstoppable, Decentralised,
          and Semantic Web
        </title>
        <meta
          property="og:title"
          content="Snapshot Labs | Blogpost | The Rise of The Unstoppable, Decentralised, and Semantic Web"
        />
        <meta
          property="og:description"
          content="Since the web came into existence in 1989, it has steadily evolved into an ecosystem of large, corporate-controlled, centralised mega-platforms."
        />
        <meta
          property="og:image"
          content="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web/cover.png"
        />
        <meta property="og:image:width" content="760" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={currentUrl} />
      </Head>
      <BlogHeader
        targetRef={targetRef}
        gradient="gray"
        twitter={shareTo.twitter}
        linkedin={shareTo.linkedin}
      />
      <article>
        <Landing
          accentColor="gray"
          LandingContent={
            <LandingContent
              href="#blog-content"
              avatarImage="/avatar/avatar-tom-oostewechel.png"
              avatarLabel="Tom Oostewechel"
              avatarDescription="Author"
              datePosted="31 March, 2023"
              blogTitle="The Rise of The Unstoppable, Decentralised,
              and Semantic Web"
              blogDescription="Since the web came into existence in 1989, it has steadily evolved into an ecosystem of large, corporate-controlled, centralised mega-platforms."
            />
          }
          LandingImage={
            <LandingImage src="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web/landing.png" />
          }
          HoverCardContent={<HoverCard />}
        />
        <BlogContentLayout id="blog-content">
          <KeyTakeawaysCollapsible accentColor="gray">
            <ListItem>
              There is an ever-growing gap between the increased pace of change
              and our society’s ability to keep up
            </ListItem>
            <ListItem>
              I believe every person needs some sort of personal knowledge
              capture system that can adapt to our changing needs
            </ListItem>
            <ListItem>
              Knowledge workers spend an average of 40% looking for information
              and discretionary activities that offer little personal
              satisfaction
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
              A PKM system can serve many different functions and capabilities,
              so you should always start with why you need or want to use it in
              the first place.
            </ListItem>
            <ListItem>
              Your system can look chaotic to others, but it is right for you if
              it brings you value and delight.
            </ListItem>
            <ListItem>
              Organise by balancing structure and flexibility: apply a bottom-up
              approach, augment your brain by choosing an application that uses
              a knowledge graph database and reduce cognitive load by
              standardising how and in which format you capture object types.
            </ListItem>
            <ListItem>
              Organise your knowledge organically and according to your
              interests by tagging or assigning keywords to your objects.
            </ListItem>
            <ListItem>
              Being organised is a habit - a repeated set of actions you take as
              you encounter, work with and put the information to use
            </ListItem>
          </KeyTakeawaysCollapsible>
          <BlogMarkdownContentLayout id="chapter-01">
            <MarkdownContentBlock chapter="chapter-01" Content={Chapter1} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="gray"
            ChapterContent={
              <ChapterContent
                href="#chapter-02"
                chapterNumber="02"
                accentColor="gray"
                chapterTitle="The Value of Decentralisation"
                chapterDescription="Decentralisation focuses on structural interventions that might realign power relationships between institutions and their end users. Properly designed decentralised systems strive to avoid any chokepoint where a single actor can constrain the use of the system. "
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web/chapter-02.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-02">
            <MarkdownContentBlock chapter="chapter-02" Content={Chapter2} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="gray"
            ChapterContent={
              <ChapterContent
                href="#chapter-03"
                chapterNumber="03"
                accentColor="gray"
                chapterTitle="Standing at Crossroads"
                chapterDescription="As we slowly move into the third era of the internet, most of the core services you use and love today will likely be almost entirely rearchitected in the coming decades."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web/chapter-03.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-03">
            <MarkdownContentBlock chapter="chapter-03" Content={Chapter3} />
          </BlogMarkdownContentLayout>
        </BlogContentLayout>
      </article>
    </div>
  );
}
