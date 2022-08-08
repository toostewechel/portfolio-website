import { styled } from "../stitches.config.js";
import SkillsCore from "../components/collapsible/SkillsCore.js";
import SkillsLearning from "../components/collapsible/SkillsLearning.js";
import ProfessionalAchievementsTabs from "../components/tabs/ProfessionalAchievementsTabs.js";
import SoftwareStackTabs from "../components/tabs/SoftwareStackTabs.js";

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
  ml: "auto",
  mr: "auto",
})

const FlexContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  columnGap: "$spacing-05",

  "@bp3": {
    flexDirection: "row",
    rowGap: "$spacing-04",
  }
})

const Flex = styled("div", {
  width: "100%",
})

function HomePage() {
  return (
    <PageLayout>
      <div style={{ marginBottom: "256px", marginTop: "256px" }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <div>
            <Title>My Skillset</Title>
            <Paragraph>
              Modern work demands knowledge transfer: the ability to learn and apply knowledge to complex problems, new situations and domains. That’s why I focus on building knowledge that spans a significant number of areas which enables me to be a better designer, colleague and teamplayer.
            </Paragraph>
            <FlexContainer>
              <Flex>
                <SkillsCore />
              </Flex>
              <SkillsLearning />
            </FlexContainer>
          </div>
          <div>
            <img src="/images/skillset-web.png" />
          </div>
        </div>

      </div>
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
    </PageLayout >
  );
}

export default HomePage;
