import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Section from "../../layouts/blocks/Section.js";
import Spacer from "../../layouts/blocks/Spacer.js";
import CoreValueCard from "../../card/CoreValueCard.js";
import CoreValuesAccordion from "../../accordion/CoreValuesAccordion.js";
import { useMediaQuery } from "react-responsive";

const CoreValuesWrapper = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1234px",
  margin: "0 auto",
});

const CoreValueItems = styled("ul", {
  maxWidth: "1234px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "$none",
  listStyle: "none",

  "@bp2": {
    gap: "16px",
  },
  "@bp3": {
    gap: "16px",
  },
});

const CoreValueItem = styled("li", {
  display: "flex",
  flex: "0 0 100%",
  height: "auto",
  mb: 0,

  "@bp2": {
    flexBasis: "calc(50% - 12px)",
  },

  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 16px)",
  },
});

function CoreValuesCardLayout() {
  return (
    <CoreValueItems>
      <CoreValueItem>
        <CoreValueCard
          color="plum"
          label="Actions and Words Align"
          title="Reliable"
          state={true}
        >
         I always try to pull my weight, do my 'homework', keep my word and follow through, even on the little things, so clients and team members can trust me.
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="blue"
          label="Circle of Influence"
          title="Pro-active"
          state={true}
        >
          I take responsibility and focus my efforts on new initiatives, innovative ideas and complex problems inside my circle of influence; I don't focus on things I can't control.
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="crimson"
          label="Dive Into the Unknown"
          title="Curious"
          state={true}
        >
          I have a deep desire to read, explore, investigate, learn new things, and ask questions to understand the people and world around me better.
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="violet"
          label="Seek to Understand"
          title="Empathetic"
          state={true}
        >
          I have empathy for those around me and always try to actively listen and understand their needs and perspectives first and foremost.
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="teal"
          label="A Rising Tide Lifts all Boats"
          title="Altruistic"
          state={true}
        >
            I always try to look for solutions that benefit the majority involved and contribute to whatever needs to be done for the success of the whole.
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="cyan"
          label="Put First Things First"
          title="Principled"
          state={true}
        >
         I am self-motivated and try to live by being driven by the principles I value most instead of by (hidden) agendas and forces surrounding me.
        </CoreValueCard>
      </CoreValueItem>
    </CoreValueItems>
  );
}

function CoreValuesBlock() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <Section id="core-values">
      <ContentBlock
        heading="Values and Strengths"
        alignment="left"
        description="The roots that make me who I am and guide me when making decisions, building relationships and solving problems."
        buttonLabel="My User Manual"
      />
      <Spacer level={6} />
      <CoreValuesWrapper>
        {isMobile ? <CoreValuesAccordion /> : <CoreValuesCardLayout />}
      </CoreValuesWrapper>
    </Section>
  );
}

export default CoreValuesBlock;
