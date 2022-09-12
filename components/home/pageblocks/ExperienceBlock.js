import dynamic from "next/dynamic";
import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Section from "../../layouts/blocks/Section.js";

const ProfessionalAchievementsTabs = dynamic(
  () => import("../../tabs/ProfessionalAchievementsTabs.js"),
  { ssr: false }
);

const Content = styled("div", {
  pb: "$spacing-09",
});

function ExperienceBlock() {
  return (
    <Section id="experience">
      <Content>
        <ContentBlock
          heading="Experience"
          description="I can be of value in the product creation process throughout all the different product development stages, from initial concept creation to product launch."
        />
      </Content>
      <ProfessionalAchievementsTabs />
    </Section>
  );
}

export default ExperienceBlock;
