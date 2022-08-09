import { styled } from "../stitches.config.js";
import SkillsCore from "../components/collapsible/SkillsCore.js";
import SkillsLearning from "../components/collapsible/SkillsLearning.js";
import ProfessionalAchievementsTabs from "../components/tabs/ProfessionalAchievementsTabs.js";
import SoftwareStackTabs from "../components/tabs/SoftwareStackTabs.js";
import Skillset from "../components/layout-blocks/Skillset.js";

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
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",
  mb: "$spacing-06",

  "@bp1": {
    fontSize: "$lg",
  },
});

const PageLayout = styled("div", {
  maxWidth: "1234px",
  padding: "4px",
  ml: "auto",
  mr: "auto",
});

const FlexContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  columnGap: "$spacing-05",

  "@bp4": {
    flexDirection: "row",
    rowGap: "$spacing-04",
  },
});

const Flex = styled("div", {
  width: "100%",
});

const Spacer = styled("div", {
  mt: "$spacing-10",
  mb: "$spacing-10",
});

function HomePage() {
  return (
    <PageLayout>
      <Spacer>
        <Skillset />
      </Spacer>
      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "4px" }}>
          <Title>Experience & Education</Title>
          <Paragraph>
            I can effectively manage the product creation process throughout the
            different product development stages, from initial concept to
            product launch.
          </Paragraph>
        </div>
        <ProfessionalAchievementsTabs />
      </div>
      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "4px" }}>
          <Title>Software Stack</Title>
          <Paragraph>
            I mainly focus on (learning) industry leading tools and frameworks
            to streamline and optimize my design and development workflow.
          </Paragraph>
        </div>
        <SoftwareStackTabs />
      </div>
    </PageLayout>
  );
}

export default HomePage;
