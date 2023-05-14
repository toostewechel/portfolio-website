import { styled } from "../stitches.config.js";
import Head from "next/head";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/blocks/Header";
import Footer from "../components/layouts/blocks/Footer.js";
import ExperienceBlock from "../components/pageblocks/ExperienceBlock.js";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines.svg)",
  backgroundPositionX: "center",
});

export default function BlogPost() {
  return (
    <Wrapper>
      <Head>
        <meta
          name="description"
          content="Author: Tom Oostewechel, Category: Personal Portfolio Site"
        />
        <title>Snapshot Labs | Experience</title>
      </Head>
      <Header />
      <PageLayout style={{ marginTop: "80px" }}>
        <ExperienceBlock />
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
