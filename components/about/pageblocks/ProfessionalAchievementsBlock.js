import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import ProfessionalAchievementsTabs from "../../tabs/ProfessionalAchievementsTabs.js";

const Container = styled("div", {});

const Content = styled("div", {
  pb: "$spacing-09",
});

function ProfessionalAchievementsBlock() {
  return (
    <Container id="professional-achievements">
      <Content>
        <ContentBlock
          heading="My Experience"
          description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        />
      </Content>
      <ProfessionalAchievementsTabs />
    </Container>
  );
}

export default ProfessionalAchievementsBlock;
