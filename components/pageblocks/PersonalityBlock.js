import { styled } from "../../stitches.config.js";
import ContentBlock from "../layouts/blocks/ContentBlock.js";
import Section from "../layouts/blocks/Section.js";
import Spacer from "../layouts/blocks/Spacer.js";
import PersonalityCard from "../card/PersonalityCard.js";

export default function PersonalityBlock() {
  return (
    <Section id="personality">
      <ContentBlock
        textAlignment="left"
        title="Personality"
        description="Although I firmly believe in a growth mindset and don't like to put labels on people, personality tests are a helpful tool for introspection and becoming aware of strengths and weaknesses related to your personality traits:"
      />
      <Spacer level={6} />
      <PersonalityCard />
    </Section>
  );
}
