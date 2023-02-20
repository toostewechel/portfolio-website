//Defaults
import { createRef } from "react";
import Head from "next/head";
import { styled } from "../../../stitches.config.js";

//Blog Header & Footer
import Header from "../../../components/blog/Header.js";
import Footer from "../../../components/layouts/blocks/Footer.js";

//Blog Landing Components
import Landing from "../../../components/blog/Landing.js";
import LandingContent from "../../../components/blog/LandingContent.js";
import LandingImage from "../../../components/blog/LandingImage.js";

//HoverCard Components
import {
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardPanel,
} from "../../../components/card/HoverCard.js";

//Blog Content Layouts
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
} from "../../../components/blog/KeyTakeawaysCollapsible.js";
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
const shareTo = {};

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
  transition: "background 300ms ease-in",
  fontFamily: "$default",
  fontSize: "$xs",
  width: "280px",

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauveA9",
    border: "1px solid $mauveA11",
  },
});

export default function BlogPostPage() {
  //Create Ref for ReadingProgressBar
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <Header targetRef={targetRef} progressBarGradient="teal" />
      <article>
        <Landing
          accentColor="teal"
          LandingContent={
            <LandingContent
              href="#blog-content"
              avatarImage="/avatar/avatar-tom-oostewechel.png"
              avatarLabel="Tom Oostewechel"
              avatarDescription="Author"
              datePosted="11 Feb, 2023"
              blogTitle="Living With a Linear Mind in an Exponential Age"
              blogDescription="How personal knowledge management can help you thrive in an exponential age by efficiently turning your thoughts, ideas and discoveries into a interconnected knowledge base."
            />
          }
          LandingImage={
            <LandingImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/landing.png" />
          }
          HoverCardContent={
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
          }
        />
        <BlogContentLayout id="blog-content">
          <NavBar activePageTitle="Living With a Linear Mind in an Exponential Age" />
          <BlogMarkdownContentLayout>
            <KeyTakeawaysCollapsible accentColor="teal"></KeyTakeawaysCollapsible>
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
						HoverCardContent={
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
          }
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
              <ChapterImage src="/blog/living-with-a-linear-mind-in-an-exponential-age/chapter-02.png" />
            }
          />
          <BlogMarkdownContentLayout id="chapter-04">
            <MarkdownContentBlock chapter="chapter-04" Content={Chapter4} />
          </BlogMarkdownContentLayout>
        </BlogContentLayout>
      </article>
    </div>
  );
}
