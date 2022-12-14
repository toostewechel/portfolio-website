import { styled } from "../stitches.config.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
import ContentBlock from "../components/layouts/blocks/ContentBlock.js";
import Header from "../components/layouts/blocks/Header.js";
import Footer from "../components/layouts/blocks/Footer.js";
import LandingBlock from "../components/home/pageblocks/LandingBlock.js";
import CoreValuesBlock from "../components/home/pageblocks/CoreValuesBlock.js";
import ProjectsBlock from "../components/home/pageblocks/ProjectsBlock.js";
import SkillsetBlock from "../components/home/pageblocks/SkillsetBlock.js";
import ExperienceBlock from "../components/home/pageblocks/ExperienceBlock.js";
import BlogpostsBlock from "../components/home/pageblocks/BlogpostsBlock.js";
import SoftwareStackBlock from "../components/home/pageblocks/SoftwareStackBlock.js";

const PageLayout = styled("div", {
  maxWidth: "1234px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

function Index() {
  return (
    <div>
      <Header />
      <Spacer level={12} />
      <LandingBlock />
      <Spacer level={13} />
      <CoreValuesBlock />
      <Spacer level={13} />
      <PageLayout>
        <ProjectsBlock />
      </PageLayout>
      <Spacer level={13} />
      <PageLayout>
        <SkillsetBlock />
      </PageLayout>
      <Spacer level={13} />
      <PageLayout>
        <ExperienceBlock />
      </PageLayout>
      <Spacer level={13} />
      <Spacer level={12} />
      <PageLayout>
        <BlogpostsBlock />
      </PageLayout>
      <Spacer level={12} />
      <PageLayout>
        <SoftwareStackBlock />
      </PageLayout>
      <Spacer level={12} />
      <Footer />
    </div>
  );
}

export default Index;
