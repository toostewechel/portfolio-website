import { createRef } from "react";
import ContentHeader from "../../../components/content/ContentHeader.js";
import ContentLanding from "../../../components/content/ContentLanding.js";
import ContentBlock from "../../../components/content/ContentBlock.js";
import ContentOpening from "../../../components/content/ContentOpening.js";
import Spacer from "../../../components/layouts/blocks/Spacer.js";
import Chapter1 from "./01-chapter.mdx";
import Chapter2 from "./02-chapter.mdx";
import Chapter3 from "./03-chapter.mdx";
import Footer from "../../../components/layouts/blocks/Footer.js";

function Index() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader targetRef={targetRef} />
      <ContentLanding
        color="crimson"
        label="Design"
        title="Design Accessible Experiences for the Healthcare Sector"
        src="/blog/design-for-healthcare/landing.png"
        meta="20 December 2020 • 15 min read"
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
  );
}

export default Index;
