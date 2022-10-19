import { styled } from "../../../stitches.config.js";
import { createRef, useEffect, useState } from "react";
import ContentHeader from "../../../components/content/ContentHeader.js";
import ContentLanding from "../../../components/content/ContentLanding.js";
import ContentMeta from "../../../components/content/ContentMeta.js";
import ContentOpening from "../../../components/content/ContentOpening.js";
import ContentBlock from "../../../components/content/ContentBlock.js";
import Spacer from "../../../components/layouts/blocks/Spacer.js";
import Content from "./01-content.mdx";

function Index() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader targetRef={targetRef} />
      <ContentLanding title="The Rise of the Unstoppable Decentralised and Semantic Web" />
      <Spacer level={8} />
      <ContentBlock Content={Content} />
    </div>
  );
}

export default Index;
