import { styled } from "../../stitches.config.js";
import ContentBlock from "./ContentBlock.js";
import SoftwareStackTabs from "../tabs/SoftwareStackTabs.js";

const Container = styled("div", {});

const Content = styled("div", {
  pb: "$spacing-07",
});

function SoftwareStackBlock() {
  return (
    <Container>
      <Content>
        <ContentBlock
          heading="Software Stack"
          description="I mainly focus on (learning) industry leading tools and frameworks to streamline and optimize my design and development workflow."
        />
      </Content>
      <SoftwareStackTabs />
    </Container>
  )
}

export default SoftwareStackBlock;