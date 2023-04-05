//Default Imports
import { createRef } from "react";
import Head from "next/head";
import { styled } from "../../../stitches.config.js";

//Blog Header & Footer
import { BlogHeader } from "../../../components/layouts/blocks/Header";
import Footer from "../../../components/layouts/blocks/Footer.js";

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
} from "../../../components/blog/KeyTakeawaysCollapsible";
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
  fontFamily: "$default",
  fontSize: "$xs",
  width: "280px",
  gap: "$spacing-02",

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "rgba(0,0,0, 0.05)",
    border: "1px solid $mauveA11",
  },
});

function HoverCard() {
  return (
    <HoverCardRoot>
      <HoverCardTrigger asChild>
        <PoweredByBadge href="https://www.jeroenkrul.nl/" target="_blank">
          <p>Illustration by </p>
          <img
            style={{ height: "24px" }}
            src="/badges/jeroen-krul-badge.png"
            alt="Jeroen Krul Logo"
          />
        </PoweredByBadge>
      </HoverCardTrigger>
      <HoverCardPanel
        logo="/avatar/jeroen-krul.png"
        title="Jeroen Krul"
        socialHandle="@jeroenkrul"
        description="In mijn werk ben ik voortdurend op zoek naar de balans tussen illustratie en verhaal. Daarvoor gebruik ik zowel analoge als digitale methoden en vaak gecombineerd"
        followingCount="993"
        followersCount="1,42K"
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
        <title>Snapshot Labs | Blogpost | Design for Accessibility</title>
      </Head>
      <BlogHeader targetRef={targetRef} gradient="crimson" />
      <article>
        <Landing
          accentColor="crimson"
          LandingContent={
            <LandingContent
              href="#blog-content"
              avatarImage="/avatar/avatar-tom-oostewechel.png"
              avatarLabel="Tom Oostewechel"
              avatarDescription="Author"
              datePosted="11 Feb, 2020"
              blogTitle="Design Accessible Experiences for the Healthcare Sector"
              blogDescription="In deze blogpost lees je wat digitale toegankelijkheid betekent voor een gebruiker, waarom het verstandig is om hier gericht voor te ontwerpen en waar je kunt beginnen met de implementatie."
            />
          }
          LandingImage={
            <LandingImage src="/blog/design-for-accessibility/landing.png" />
          }
          HoverCardContent={<HoverCard />}
        />
        <BlogContentLayout id="blog-content">
          <NavBar activePageTitle="Design Accessible Experiences for the Healthcare Sector" />
          <BlogMarkdownContentLayout>
            <KeyTakeawaysCollapsible accentColor="crimson">
              <ListItem>
                Toegankelijkheid is een complex organisatorisch vraagstuk
              </ListItem>
              <ListItem>
                Iets is pas toegankelijk wanneer mensen zelf een taak kunnen
                volbrengen in een vergelijkbare hoeveelheid tijd en moeite als
                iemand die geen beperking heeft
              </ListItem>
              <ListItem>
                Iets is pas toegankelijk wanneer mensen zelf een taak kunnen
                volbrengen in een vergelijkbare hoeveelheid tijd en moeite als
                iemand die geen beperking heeft
              </ListItem>
            </KeyTakeawaysCollapsible>
            <MarkdownContentBlock chapter="chapter-01" Content={Chapter1} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="crimson"
            ChapterContent={
              <ChapterContent
                href="#chapter-02"
                chapterNumber="02"
                accentColor="crimson"
                chapterTitle="Toegankelijkheid is inclusief, contextafhankelijk en keuzevrijheid hebben"
                chapterDescription="In de afgelopen jaren is in onze samenleving veel dienstverlening gedigitaliseerd. Maar zodra iets online staat, betekent dit niet gelijk dat het beter toegankelijk is of gemakkelijker in gebruik."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/design-for-accessibility/chapter-02.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-02">
            <MarkdownContentBlock chapter="chapter-02" Content={Chapter2} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="crimson"
            ChapterContent={
              <ChapterContent
                href="#chapter-03"
                chapterNumber="03"
                accentColor="crimson"
                chapterTitle="De meerwaarde van toegankelijkheid"
                chapterDescription="Het ontwikkelen van online diensten in de zorg brengt al genoeg uitdagingen met zich mee. Zouden we ons om nog een ‘extra’ ding druk moeten maken?"
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/design-for-accessibility/chapter-03.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-03">
            <MarkdownContentBlock chapter="chapter-03" Content={Chapter3} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="crimson"
            ChapterContent={
              <ChapterContent
                href="#chapter-04"
                chapterNumber="04"
                accentColor="crimson"
                chapterTitle="Toegankelijkheid overstijgt disciplines en domeinen"
                chapterDescription="De hoeveelheid informatie rondom de implementatie van toegankelijkheid is overweldigend. Dit maakt het een uitdaging om te bepalen wie waar verantwoordelijk voor is en om met toegankelijkheid te beginnen."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/design-for-accessibility/chapter-04.png" />
            }
            HoverCardContent={<HoverCard />}
          />
          <BlogMarkdownContentLayout id="chapter-04">
            <MarkdownContentBlock chapter="chapter-04" Content={Chapter4} />
          </BlogMarkdownContentLayout>
          <Chapter
            accentColor="crimson"
            ChapterContent={
              <ChapterContent
                href="#chapter-05"
                chapterNumber="05"
                accentColor="crimson"
                chapterTitle="Conclusie"
                chapterDescription="Digitale toegankelijkheid is niet een vakje dat je zomaar aan kunt vinken. Het is een complex organisatorisch vraagstuk waarbij verschillende disciplines samen moeten werken om een toegankelijke ervaring te creëren voor gebruikers."
              />
            }
            ChapterImage={
              <ChapterImage src="/blog/design-for-accessibility/chapter-05.png" />
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
