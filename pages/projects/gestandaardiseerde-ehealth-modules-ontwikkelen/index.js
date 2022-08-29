import { styled } from "../../../stitches.config.js";
import { createRef, useEffect, useState } from "react";
import ContentHeader from "../../../components/content/ContentHeader.js";
import ContentLanding from "../../../components/content/ContentLanding.js";
import ContentOpening from "../../../components/content/ContentOpening.js";
import ContentBlock from "../../../components/content/ContentBlock.js";
import ScrollContainerX from "./components/ScrollContainerX.js";
import Spacer from "../../../components/layouts/blocks/Spacer.js";

import Inleiding from "./1-inleiding.mdx";
import Probleem from "./2-probleem-definitie.mdx";
import ProductVisie from "./3-product-visie.mdx";
import Anatomie from "./4-anatomie-van-modules.mdx";
import MentaalModel from "./5-mentaal-model.mdx";
import SysteemBlauwdruk from "./6-systeem-blauwdruk.mdx";

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
      <Spacer />
      <ContentBlock Content={Inleiding} />
      <ContentBlock Content={Probleem} />
      <ContentBlock Content={ProductVisie} />
      <Spacer />
      <ContentOpening />
      <Spacer />
      <ContentBlock Content={Anatomie} />
      <Spacer />
      <ScrollContainerX />
      <Spacer />
      <ContentBlock Content={MentaalModel} />
      <ContentBlock Content={SysteemBlauwdruk} />
    </div>
  );
}

export default Index;
