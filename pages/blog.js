import { styled } from "../stitches.config.js";
import Head from "next/head";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/blocks/Header";
import Footer from "../components/layouts/blocks/Footer.js";
import BlogpostsBlock from "../components/pageblocks/BlogpostsBlock.js";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines.svg)",
  backgroundPositionX: "center",
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
      <Head>
        <meta
          name="description"
          content="Author: Tom Oostewechel, Category: Personal Portfolio Site"
        />
        <title>Snapshot Labs | Blog</title>
      </Head>
      <Header />
      <PageLayout style={{ marginTop: "70px" }}>
        <BlogpostsBlock />
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
