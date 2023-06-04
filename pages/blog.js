import { styled } from "../stitches.config.js";
import Head from "next/head";
import { useRouter } from "next/router";
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
  marginTop: "80px",
});

export default function BlogPost() {
  const router = useRouter();
  const currentUrl = `https://www.snapshotlabs.nl${router.asPath}`;

  return (
    <Wrapper>
      <Head>
        <title>Snapshot Labs | Blog</title>
        <meta property="og:title" content="Snapshot Labs | Blog" />
        <meta
          property="og:description"
          content="This site offers a fun and personal showcase. Take a sneak peek into my world, featuring a carefully curated selection of my creative and professional achievements."
        />
        <meta property="og:image" content="/widgets/cover-home.png" />
        <meta property="og:image:width" content="760" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={currentUrl} />
      </Head>
      <Header />
      <PageLayout style={{ marginTop: "84px" }}>
        <BlogpostsBlock />
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
