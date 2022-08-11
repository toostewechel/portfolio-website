import { styled } from "../stitches.config.js";
import SkillsetBlock from "../components/layout-blocks/SkillsetBlock.js";
import ProfessionalAchievementsBlock from "../components/layout-blocks/ProfessionalAchievementsBlock.js";
import SoftwareStackBlock from "../components/layout-blocks/SoftwareStackBlock.js";
import QuickMenu from "../components/QuickMenu.js";

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
  mt: "96px",
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
  pt: "$spacing-10",
  pb: "$spacing-10",
});

function HomePage() {
  return (
    <PageLayout>
      <Spacer>
        <QuickMenu />
      </Spacer>
      <Spacer>
        <SkillsetBlock />
      </Spacer>
      <Spacer>
        <ProfessionalAchievementsBlock />
      </Spacer>
      <Spacer>
        <SoftwareStackBlock />
      </Spacer>
    </PageLayout>
  );
}

export default HomePage;
