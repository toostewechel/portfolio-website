import { styled } from "../stitches.config.js";
import ProfessionalAchievementsTab from "../components/tabs/ProfessionalAchievementsTabs.js";
import Banner from "../components/about/pageblocks/Banner.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
import Timeline from "../components/timeline/Timeline.js";
import ContentBlock from "../components/layouts/blocks/ContentBlock.js";
import Header from "../components/layouts/blocks/Header.js";
import Landing from "../components/about/landing/Landing.js";

const Title = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const Paragraph = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$body",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",
  mb: "$spacing-06",

  "@bp1": {
    fontSize: "$xl",
  },
});

const PageLayout = styled("div", {
  maxWidth: "1234px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

function HomePage() {
  return (
    <div>
      <Header />
      <Spacer level={12} />
      <Landing />
      <Spacer level={12} />
      <PageLayout>
        <ContentBlock
          heading="Stories & Ideas"
          alignment="center"
          description="I write about various topics, but most of my stories are related to technological innovation, user interface and user experience design, and workflow management. "
        />
        <Timeline />
      </PageLayout>
      <Spacer level={12} />
      <Spacer level={12} />
      <Banner />
      <Spacer level={7} />
      <PageLayout>
        <ProfessionalAchievementsTab />
      </PageLayout>
      <Spacer level={12} />
      <a href="/projects/gestandaardiseerde-ehealth-modules-ontwikkelen/">
        Go to link!!!
      </a>
    </div>
  );
}

export default HomePage;
