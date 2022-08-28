import { styled } from "../stitches.config.js";
import { createRef, useEffect, useState } from "react";
import ContentHeader from "../components/content/ContentHeader.js";
import ContentLanding from "../components/content/ContentLanding.js";
import ContentWrapper from "../components/content/ContentWrapper.js";
import Layout from "../components/layouts/Layout.js";

import Chapter1 from "./Chapter1.mdx";

function Progress() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader targetRef={targetRef} />
      <ContentLanding english />
      <ContentWrapper Content={Chapter1} />
    </div>
  );
}

export default Progress;
