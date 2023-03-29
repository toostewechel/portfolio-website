import { styled } from "../../stitches.config.js";
import ContentBlock from "../layouts/blocks/ContentBlock";
import Section from "../layouts/blocks/Section.js";
import Spacer from "../layouts/blocks/Spacer.js";

export default function CompetenciesBlock() {
  return (
    <Section id="competencies">
      <ContentBlock
        textAlignment="left"
        title="Generalising Specialist"
        description="Modern work demands knowledge transfer: the ability to learn and apply knowledge to complex problems, new situations and domains. That’s why I focus on building knowledge that spans a significant number of areas which enables me to be a better designer, collaborator and team player."
      />
      <Spacer level={6} />
    </Section>
  );
}
