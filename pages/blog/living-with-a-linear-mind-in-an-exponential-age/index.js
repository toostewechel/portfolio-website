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
import Chapter5 from "./05-chapter.mdx";

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
  const router = useRouter();
  const currentUrl = `https://www.snapshotlabs.nl${router.asPath}`;

  return (
    <div ref={targetRef}>
      <Head>
        <title>
          Snapshot Labs | Blogpost | Living With A Linear Mind in an Exponential
          Age
        </title>
        <meta
          property="og:title"
          content="Snapshot Labs | Blogpost | Living With A Linear Mind in an Exponential Age"
        />
        <meta
          property="og:description"
          content="How personal knowledge management can help you thrive in an exponential age by efficiently turning your thoughts, ideas and discoveries into a interconnected knowledge base."
        />
        <meta
          property="og:image"
          content="/blog/living-with-a-linear-mind-in-an-exponential-age/cover.png"
        />
        <meta property="og:image:width" content="760" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={currentUrl} />
      </Head>
      <BlogHeader
        targetRef={targetRef}
        gradient="teal"
        twitter={shareTo.twitter}
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
          <Chapter
            accentColor="teal"
            ChapterContent={
              <ChapterContent
                href="#chapter-05"
                chapterNumber="05"
                accentColor="teal"
                chapterTitle="The Key Principles of Personal Knowledge Management"
                chapterDescription="As we have covered the need and purpose of personal knowledge management and elaborated on the key concepts and fundamental principles, we can derive a checklist and memory aid in designing our own PKM system."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/chapter-05.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-05">
            <MarkdownContentBlock chapter="chapter-05" Content={Chapter5} />
          </BlogMarkdownContentLayout>
        </BlogContentLayout>
      </article>
    </div>
  );
}
