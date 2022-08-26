import { styled } from "../stitches.config.js";
import { createRef, useEffect, useState } from "react";
import ContentHeader from "../components/header/ContentHeader.js";
import ContentWrapper from "../components/content/ContentWrapper.js";
import Layout from "../components/layouts/Layout.js";

import Chapter1 from "./Chapter1.mdx";

const BackgroundImage = styled("div", {
  margin: 0,
  backgroundColor: "#FFE0B4",

  "@bp1": {
    backgroundImage: "url(/images/wallpaper.png)",
    opacity: 1,
    backgroundSize: "contain",
    backgroundPosition: "-264px center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
});


function Progress() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader targetRef={targetRef} />
      <BackgroundImage />
        
        <ContentWrapper Content={Chapter1} />
   
    </div>
  )
}

export default Progress;