import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import SoftwareStackTabs from "../../tabs/SoftwareStackTabs.js";
import Section from "../../layouts/blocks/Section.js";
import Spacer from "../../layouts/blocks/Spacer.js";

function SoftwareStackBlock() {
  return (
    <Section id="software">
        <ContentBlock
          heading="Software"
          description="I mainly focus on (learning) industry leading tools and frameworks to streamline and optimize my design and development workflow."
        />
      <Spacer level={6} />
      <SoftwareStackTabs />
    </Section>
  );
}

export default SoftwareStackBlock;
