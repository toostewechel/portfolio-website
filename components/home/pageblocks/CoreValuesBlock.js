import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Section from "../../layouts/blocks/Section.js";
import Spacer from "../../layouts/blocks/Spacer.js";
import CoreValueCard from "../../card/CoreValueCard.js";
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
    gap: "48px 24px",
  },
  "@bp3": {
    gap: "16px",
  },
});

const CoreValueItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "auto",
  mb: 0,

  "&:first-child": {
    borderTop: "1px solid $gray6",
  },

  "@bp2": {
    flexBasis: "calc(50% - 12px)",

    "&:first-child": {
      borderTop: 0,
    },
  },

  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 16px)",

    "&:first-child": {
      borderTop: 0,
    },
  },
});

function MobileCoreValues() {
  return (
    <CoreValueItems>
      <CoreValueItem>
        <CoreValueCard
          color="plum"
          label="Actions and words align"
          title="Reliable"
          state={false}
        >
          I move with intent, keep my word and follow through, even on the
          little things, so clients and team members can put their trust in me
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="blue"
          label="Circle of influence"
          title="Pro-active"
          state={false}
        >
          I take responsibility and focus my efforts on new initiatives,
          innovative ideas and complex problems inside my circle of influence
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="crimson"
          label="Dive into the unknown"
          title="Curious"
          state={false}
        >
          I have a deep desire to explore, investigate and learn new things to
          understand the people and world around me
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="violet"
          label="Seek to understand"
          title="Empathetic"
          state={false}
        >
          I have empathy for those around me and always try to understand their
          needs and perspectives first and foremost
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="teal"
          label="Grow the pie together"
          title="Win-Win"
          state={false}
        >
          I always try to look for solutions that benefit the majority involved
          in order to collaborate more effectively with others
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="cyan"
          label="Put first things first"
          title="Autonomous"
          state={false}
        >
          I try to live by being driven by principles I value most instead of by
          (hidden) agendas and forces surrounding me
        </CoreValueCard>
      </CoreValueItem>
    </CoreValueItems>
  );
}

function DesktopCoreValues() {
  return (
    <CoreValueItems>
      <CoreValueItem>
        <CoreValueCard
          color="plum"
          label="Actions and words align"
          title="Reliable"
          state={true}
        >
          I move with intent, keep my word and follow through, even on the
          little things, so clients and team members can put their trust in me
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="blue"
          label="Circle of influence"
          title="Pro-active"
          state={true}
        >
          I take responsibility and focus my efforts on new initiatives,
          innovative ideas and complex problems inside my circle of influence
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="crimson"
          label="Dive into the unknown"
          title="Curious"
          state={true}
        >
          I have a deep desire to explore, investigate and learn new things to
          understand the people and world around me
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="violet"
          label="Seek to understand"
          title="Empathetic"
          state={true}
        >
          I have empathy for those around me and always try to understand their
          needs and perspectives first and foremost
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="teal"
          label="Grow the pie together"
          title="Win-Win"
          state={true}
        >
          I always try to look for solutions that benefit the majority involved
          in order to collaborate more effectively with others
        </CoreValueCard>
      </CoreValueItem>
      <CoreValueItem>
        <CoreValueCard
          color="cyan"
          label="Put first things first"
          title="Autonomous"
          state={true}
        >
          I try to live by being driven by principles I value most instead of by
          (hidden) agendas and forces surrounding me
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
        heading="Core Values"
        alignment="center"
        description="These values guide me when making decisions, building relationships and solving problems."
        hasButton="true"
        buttonLabel="My User Manual"
      />
      <Spacer level={6} />
      <CoreValuesWrapper>
        {isMobile ? <MobileCoreValues /> : <DesktopCoreValues />}
      </CoreValuesWrapper>
    </Section>
  );
}

export default CoreValuesBlock;
