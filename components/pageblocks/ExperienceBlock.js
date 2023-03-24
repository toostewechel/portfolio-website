import dynamic from "next/dynamic";
import { styled } from "../../stitches.config.js";
import ContentBlock from "../layouts/blocks/ContentBlock.js";
import Section from "../layouts/blocks/Section.js";
import Spacer from "../layouts/blocks/Spacer.js";
import SoftwareStackTabs from "../tabs/SoftwareStackTabs.js";

const ProfessionalAchievementsTabs = dynamic(
  () => import("../tabs/ProfessionalAchievementsTabs.js"),
  { ssr: false }
);

const Content = styled("div", {
  pb: "$spacing-09",
});

const ContentContainer = styled("div", {
  marginBottom: "232px",
});

function ExperienceBlock() {
  return (
    <Section>
      <ContentContainer>
        <ContentBlock
          title="Experience"
          description="I can be of value in the product creation process throughout all the different product development stages, from initial concept creation to product launch."
        />
        <Spacer level={6} />
        <ProfessionalAchievementsTabs />
        <Spacer level={12} />
        <ContentBlock
          title="Software Stack"
          description="I mainly focus on (learning) industry leading tools and frameworks to streamline and optimize my design and development workflow."
        />
        <Spacer level={6} />
        <SoftwareStackTabs />
      </ContentContainer>
    </Section>
  );
}

export default ExperienceBlock;
