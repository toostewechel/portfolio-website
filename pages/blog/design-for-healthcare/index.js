import { styled } from "@stitches/react";
import { createRef } from "react";
import Head from "next/head";

import {
  BlogContentLayout,
  BlogMarkdownContent,
} from "../../../components/layouts/Layout.js";
import Header from "../../../components/blog/Header.js";
import Landing from "../../../components/blog/Landing.js";
import LandingContent from "../../../components/blog/LandingContent.js";
import LandingImage from "../../../components/blog/LandingImage.js";
import Chapter from "../../../components/blog/Chapter.js";
import ChapterContent from "../../../components/blog/ChapterContent.js";
import ChapterImage from "../../../components/blog/ChapterImage.js";
import NavBar from "../../../components/blog/NavBar.js";

import MarkdownContentBlock from "../../../components/content/MarkdownContentBlock.js";
import Spacer from "../../../components/layouts/blocks/Spacer.js";
import Chapter1 from "./01-chapter.mdx";
import Chapter2 from "./02-chapter.mdx";
import Chapter3 from "./03-chapter.mdx";
import Footer from "../../../components/layouts/blocks/Footer.js";

const shareTo = {
  whatsapp: "https://www.whatsapp.com/",
  facebook: "https://www.facebook.com/",
  twitter:
    "https://twitter.com/intent/tweet?text=Ontwerpen%20voor%20toegankelijkheid%20maakt%20de%20gebruikservaring%20beter%20voor%20iedereen%2C%20ongeacht%20beperking.&url=https%3A%2F%2Fpersonal-website.toostewechel.repl.co%2Fblog%2Fdesign-for-healthcare",
  linkedin: "https://www.linkedin.com/",
};

const ContentWrapper = styled("div", {
  display: "flex",
  backgroundColor: "white",
  maxWidth: "1720px",
  margin: "0 auto",
  borderRadius: "16px",
  border: "1px solid $gray6",
});

function Index() {
  const targetRef = createRef();
  return (
    <>
      <Head>
        <title>Snapshots Labs - Blog</title>
        <meta
          name="description"
          content="Snapshots Labs is a portfolio site with a curated overview of my professional and personal work throughout the years as product designer."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@boonikad93" />
        <meta name="twitter:title" content="Snapshots Labs" />
        <meta
          name="twitter:description"
          content="Snapshots Labs is a portfolio site with a curated overview of my professional and personal work throughout the years as product designer."
        />
        <meta
          name="twitter:image"
          content="https://origintrail.club/socials/twitter/placeholder-twitter.jpg"
        />
        <meta name="twitter:image:alt" content="Origintrail Community Hub" />

        <meta property="og:title" content="Origintrail Community Hub" />
        <meta
          property="og:description"
          content="Snapshots Labs is a portfolio site with a curated overview of my professional and personal work throughout the years as product designer."
        />
        <meta
          property="og:image"
          content="https://origintrail.club/socials/open-graph/placeholder-og.jpg"
        />
        <meta property="og:site_name" content="Snapshots Labs" />
      </Head>
      <div ref={targetRef}>
        <Header
          targetRef={targetRef}
          whatsapp={shareTo.whatsapp}
          facebook={shareTo.facebook}
          twitter={shareTo.twitter}
          linkedin={shareTo.linkedin}
          gradient="design"
        />
        <article>
          <Landing
            AccentColor="crimson"
            LandingContent={
              <LandingContent
                AvatarImage="/avatar/avatar-tom-oostewechel.png"
                AvatarLabel="Tom Oostewechel"
                AvatarDescription="Author"
                DatePosted="4 Feb, 2023"
                HeadingTitle="Design Accessible Experiences for the Healthcare Sector"
                Description="Easily convert paper healthcare protocols and methods, 			without technical knowledge, into tailor-made, user friendly online modules and launch in production within weeks instead of months."
              />
            }
            LandingImage={
              <LandingImage Image="/images/landing-image-blog.png" />
            }
          />

          <BlogContentLayout>
            <NavBar ActivePageTitle="Design Accessible Experiences for the Healthcare Sector" />
            <BlogMarkdownContent>
              <div></div>
              <MarkdownContentBlock chapter="1" Content={Chapter1} />
            </BlogMarkdownContent>
            <Chapter
              ChapterContent={
                <ChapterContent
                  ChapterTitle="Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief"
                  ChapterDescription="In de afgelopen jaren is in onze samenleving veel dienstverlening gedigitaliseerd. Maar zodra iets online staat, betekent dit niet gelijk dat het beter toegankelijk is of gemakkelijker in gebruik."
									href="#chapter2"
                />
              }
							ChapterImage={
								<ChapterImage Image="/images/blog-chapter-2.png" />
							}
            />
            <BlogMarkdownContent id="chapter2">
              <div></div>
              <MarkdownContentBlock chapter="2" Content={Chapter2} />
            </BlogMarkdownContent>
          </BlogContentLayout>
        </article>
      </div>
    </>
  );
}

export default Index;
