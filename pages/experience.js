import { styled } from "../stitches.config.js";
import { PageLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/Header.tsx";
import Footer from "../components/layouts/blocks/Footer.js";
import ExperienceBlock from "../components/pageblocks/ExperienceBlock.js";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines-red.svg)",
  backgroundPositionX: "center",
});

export default function BlogPost() {
  return (
    <Wrapper>
      <Header></Header>
      <PageLayout style={{ marginTop: "70px" }}>
        <ExperienceBlock />
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
