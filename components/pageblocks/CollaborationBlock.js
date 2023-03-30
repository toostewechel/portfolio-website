import { styled } from "../../stitches.config.js";
import ContentBlock from "../layouts/blocks/ContentBlock";
import Section from "../layouts/blocks/Section.js";
import Spacer from "../layouts/blocks/Spacer.js";
import CollaborationAccordion from "../accordion/CollaborationAccordion.js";

export default function CompetenciesBlock() {
  return (
    <Section id="collaboration">
      <ContentBlock
        textAlignment="left"
        title="Collaboration"
        description="If we work together, there are a few ways you can utilise my strengths and consider my preferences and peculiarities to get an as frictionless and pleasant experience as possible."
      />
      <Spacer level={6} />
      <CollaborationAccordion />
    </Section>
  );
}
