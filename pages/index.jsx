import { styled } from "../stitches.config.js";
import ProfessionalAchievementsTab from "../components/tabs/ProfessionalAchievementsTabs.js";
import Banner from "../components/about/pageblocks/Banner.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
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
      <Landing />
      <Spacer level={12} />
      <PageLayout>
        <Paragraph>In the gist above we imported the Head component from “next/document”, as well as added links for our font files. The only thing you might need to change from the example above in your project is the link type, depending on the format of your font. In our case “font/ttf” will do the trick.</Paragraph>
      </PageLayout>
      <Spacer level={12} />
      <PageLayout>
        <img src="/images/project-section-placeholder.png" />
      </PageLayout>
      <Spacer level={12} />
      <Banner />
      <Spacer level={7} />
      <PageLayout>
        <ProfessionalAchievementsTab />
      </PageLayout>
      <Spacer level={12} />
      <PageLayout>
        <img src="/images/writing-section-placeholder.png" />
      </PageLayout>
      <a href="/projects/gestandaardiseerde-ehealth-modules-ontwikkelen/">Go to link!!!</a>
    </div>
  );
}

export default HomePage;
