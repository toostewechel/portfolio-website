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
          Snapshot Labs | Blogpost | Deploy your Site on the Decentralised Cloud
        </title>
        <meta
          property="og:title"
          content="Snapshot Labs | Blogpost | Deploy your Site on the Decentralised Cloud"
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
              blogTitle="Deploy your Site on the Decentralised Cloud"
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
              A few big players control the majority of society's assets and
              extract the most value.
            </ListItem>
            <ListItem>
              Mega-platforms have improved usability and enabled billions to
              create and publish content at near zero cost.{" "}
            </ListItem>
            <ListItem>
              The web is increasingly becoming a battleground for protecting
              freedom of speech and expression.
            </ListItem>
            <ListItem>
              Mega-platforms with outsized control over content can be a target
              for censorship and create filter bubbles.
            </ListItem>
            <ListItem>
              Privacy is fundamental to an open society and requires anonymous
              transaction systems and strong cryptography. Privacy is a
              universal human right and a social value.
            </ListItem>
            <ListItem>
              Proponents of the decentralized web want a new web that is open,
              private, secure, reliable, and free from censorship.
            </ListItem>
            <ListItem>
              Centralisation can have benefits, but it comes at a cost of
              control and freedom.
            </ListItem>
            <ListItem>
              Decentralisation aims to realign power relationships between
              institutions and end-users.
            </ListItem>
            <ListItem>
              Decentralised systems strive to avoid chokepoints where a single
              actor can constrain the use of the system.
            </ListItem>
            <ListItem>
              Properties of decentralised systems include censorship resistance,
              data portability and interoperability, peer-to-peer networks,
              trust-less transparency networks, ownership of data, and
              self-sovereign identity
            </ListItem>
            <ListItem>
              Decentralised systems can enhance the everyday experience of the
              web and create new digital economies.
            </ListItem>
            <ListItem>
              Challenges to decentralisation include technical complexity,
              security, monetisation and incentives, and governance and
              regulatory issues.
            </ListItem>
            <ListItem>
              The Semantic Web aims to create well-defined, interoperable, and
              machine-readable data.
            </ListItem>
            <ListItem>
              Applications can use semantic data for search and discovery,
              automation tasks, aggregation, and data exchange between
              applications.
            </ListItem>
            <ListItem>
              Agents can represent individuals, organizations, or objects and
              act independently to generate economic value for their owner.
            </ListItem>
            <ListItem>
              Decentralized and centralized systems will compete in the third
              era of the internet, depending on factors such as usability,
              performance, compliance, and attracting developers and
              entrepreneurs.
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
        </BlogContentLayout>
      </article>
    </div>
  );
}
