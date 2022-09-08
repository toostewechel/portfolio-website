import { styled } from "../stitches.config.js";
import { createRef } from "react";
import ContentHeader from "../components/content/ContentHeader.js";
import ContentLanding from "../components/content/ContentLanding.js";

function Blog() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader pageType="Blog" targetRef={targetRef} />
      <ContentLanding english />
      <div>Lalalla</div>
    </div>
  );
}

export default Blog;
