import { styled } from "../../stitches.config.js";
import ContentBlock from "./ContentBlock.js";
import ProfessionalAchievementsTabs from "../tabs/ProfessionalAchievementsTabs.js";

const Container = styled("div", {});

const Content = styled("div", {
  pb: "$spacing-07",
});

function ProfessionalAchievementsBlock() {
  return (
    <Container>
      <Content>
        <ContentBlock
          heading="Experience & Education"
          description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        />
      </Content>
      <ProfessionalAchievementsTabs />
    </Container>
  );
}

export default ProfessionalAchievementsBlock;
