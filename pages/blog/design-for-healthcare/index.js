import { styled } from "../../../stitches.config.js";
import { createRef } from "react";
import ContentHeader from "../../../components/content/ContentHeader.js";
import ContentLanding from "../../../components/content/ContentLanding.js";
import ContentBlock from "../../../components/content/ContentBlock.js";
import ContentOpening from "../../../components/content/ContentOpening.js";
import Spacer from "../../../components/layouts/blocks/Spacer.js";
import Chapter1 from "./01-chapter.mdx";
import Chapter2 from "./02-chapter.mdx";
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
      <ContentOpening />
      <Spacer level={9} />
      <ContentBlock Content={Chapter2} />
      <Footer />
    </div>
  );
}

export default Index;
