import { styled } from "@stitches/react";
import { createRef } from "react";
import Head from "next/head";
import ContentHeader from "../../../components/content/ContentHeader.js";
import ContentLanding from "../../../components/content/ContentLanding.js";
import ContentBlock from "../../../components/content/ContentBlock.js";
import ContentOpening from "../../../components/content/ContentOpening.js";
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
  linkedIn: "https://www.linkedin.com/",
};

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
        <ContentHeader targetRef={targetRef} twitter={shareTo.twitter} gradient="design" />
        <ContentLanding
          color="crimson"
          label="Design"
          title="Design Accessible Experiences for the Healthcare Sector"
          src="/blog/design-for-healthcare/landing.png"
          meta="20 December 2020"
        />
        <Spacer level={9} />
        <ContentBlock Content={Chapter1} />
        <Spacer level={9} />
        <ContentOpening
          backgroundImage="url(/blog/design-for-healthcare/chapter-2.png)"
          tagColor="violet"
          tagLabel="Chapter"
          title="Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief"
          description="In de afgelopen jaren is in onze samenleving veel dienstverlening gedigitaliseerd. Maar zodra iets online staat, betekent dit niet gelijk dat het beter toegankelijk is of gemakkelijker in gebruik."
          label="Read"
          id="#chapter2"
        />
        <Spacer level={9} />
        <ContentBlock id="chapter2" Content={Chapter2} />
        <Spacer level={9} />
        <ContentOpening
          backgroundImage="url(/blog/design-for-healthcare/chapter-3.png)"
          title="De meerwaarde van toegankelijkheid"
          description="Het ontwikkelen van online diensten in de zorg brengt al genoeg uitdagingen met zich mee. Zouden we ons om nog een ‘extra’ ding druk moeten maken?"
          label="Read Section"
          id="#chapter3"
        />
        <Spacer level={9} />
        <ContentBlock id="chapter3" Content={Chapter3} />
        <Footer />
      </div>
    </>
  );
}

export default Index;
