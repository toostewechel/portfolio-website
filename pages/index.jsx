import { styled } from "../stitches.config.js";
import SkillsetBlock from "../components/about/pageblocks/SkillsetBlock.js";
import ProfessionalAchievementsBlock from "../components/about/pageblocks/ProfessionalAchievementsBlock.js";
import SoftwareStackBlock from "../components/about/pageblocks/SoftwareStackBlock.js";
import ContentBlock from "../components/layouts/blocks/ContentBlock.js";
import QuickMenu from "../components/about/menu/QuickMenu.js";
import Link from "next/link";

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
  padding: "8px",
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
    <div>
      <PageLayout>
        <Spacer>
          <QuickMenu />
        </Spacer>
        <Spacer></Spacer>
        <div id="values">
          <ContentBlock
            heading="My core values"
            description="These values guide me when making decisions, building relationships and solving problems."
            alignment="center"
          ></ContentBlock>
        </div>
      </PageLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-96px",
        }}
      >
        <img src="/images/values.png" />
      </div>
      <PageLayout>
        <Spacer>
          <SkillsetBlock />
        </Spacer>
        <Spacer>
          <ProfessionalAchievementsBlock />
        </Spacer>
        <Spacer>
          <SoftwareStackBlock />
        </Spacer>
        <Link href="/markdown">
          <a>Go to link</a>
        </Link>
      </PageLayout>
    </div>
  );
}

export default HomePage;
