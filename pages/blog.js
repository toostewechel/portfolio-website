import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/Header.tsx";
import Footer from "../components/layouts/blocks/Footer.js";
import BlogpostsBlock from "../components/pageblocks/BlogpostsBlock.js";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines-red.svg)",
  backgroundPositionX: "center",
  height: "100%",
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "232px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "72px",
});

export default function BlogPost() {
  return (
    <Wrapper>
      <Header></Header>
      <PageLayout style={{ marginTop: "70px" }}>
        <BlogpostsBlock />
      </PageLayout>
      <Footer />
    </Wrapper>
  );
}
