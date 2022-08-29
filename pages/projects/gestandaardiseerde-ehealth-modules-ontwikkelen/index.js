import { styled } from "../../../stitches.config.js";
import { createRef, useEffect, useState } from "react";
import ContentHeader from "../../../components/content/ContentHeader.js";
import ContentLanding from "../../../components/content/ContentLanding.js";
import ContentOpening from "../../../components/content/ContentOpening.js";
import ContentBlock from "../../../components/content/ContentBlock.js";
import ScrollContainerX from "../../../components/about/scrollcontainer/ScrollContainerX.js";

import Inleiding from "./1-inleiding.mdx";
import Probleem from "./2-probleem-definitie.mdx";
import ProductVisie from "./3-product-visie.mdx";
import Anatomie from "./4-anatomie-van-modules.mdx";

function Index() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader pageType="Case Study" targetRef={targetRef} />
      <ContentLanding
        title="Gestandaardiseerde e-health modules ontwikkelen"
        date="22 jun 2022"
        duration="25 min"
        dutch
      />
      <ContentBlock Content={Inleiding} />
      <ContentBlock Content={Probleem} />
      <ContentBlock Content={ProductVisie} />
      <ContentOpening />
      <ContentBlock Content={Anatomie} />
      <ScrollContainerX />
    </div>
  );
}

export default Index;
