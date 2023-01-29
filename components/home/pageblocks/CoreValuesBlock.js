import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Section from "../../layouts/blocks/Section.js";
import Spacer from "../../layouts/blocks/Spacer.js";

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

  "@bp1": {
    gap: "48px 24px",
  }
});

const CoreValueItem = styled("li", {
  display: "flex",
  flexDirection: "column",
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

const CoreValueCard = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "$spacing-03",
  borderRadius: "16px",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",
  pb: "$spacing-03",
});

const LabelIcon = styled("div", {
  width: "13px",
  height: "13px",
  borderRadius: "4px",

  variants: {
    color: {
      plum: {
        backgroundColor: "$plum11",
      },
      blue: {
        backgroundColor: "$blue11",
      },
      crimson: {
        backgroundColor: "$crimson11",
      },
      violet: {
        backgroundColor: "$violet11",
      },
      teal: {
        backgroundColor: "$teal11",
      },
      cyan: {
        backgroundColor: "$cyan11",
      },
    },
  },
});

const Label = styled("p", {
  display: "flex",
  fontSize: "$xs",
  fontWeight: "$medium",
  fontFamily: "$default",

  variants: {
    color: {
      plum: {
        color: "$plum11",
      },
      blue: {
        color: "$blue11",
      },
      crimson: {
        color: "$crimson11",
      },
      violet: {
        color: "$violet11",
      },
      teal: {
        color: "$teal11",
      },
      cyan: {
        color: "$cyan11",
      },
    },
  },
});

const ValueTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$black",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-02",

  "@bp3": {
    fontSize: "$2xl",
    mb: "$spacing-04",
  },
  "@bp4": {
    fontSize: "$3xl",
    mb: "$spacing-04",
  },
});

const ValueDescriptionBox = styled("div", {
  ml: 0,
  p: "$spacing-03",
  borderRadius: 0,

  variants: {
    color: {
      plum: {
        borderLeft: 0,

        '@bp1': {
          borderLeft: "4px solid $plum11",
          color: "$plum12",
          borderRadius: "8px",
        },
      },
      blue: {
        borderLeft: 0,

         '@bp1': {
            borderLeft: "4px solid $blue11",
            color: "$blue12",
            borderRadius: "8px",
        },
      },
      crimson: {
        borderLeft: 0,

         '@bp1': {
            borderLeft: "4px solid $crimson11",
            color: "$crimson12",
            borderRadius: "8px",
        },
      },
      violet: {
        borderLeft: 0,

         '@bp1': {
            borderLeft: "4px solid $violet11",
            color: "$violet12",
            borderRadius: "8px",  
        },
      },
      teal: {
        borderLeft: 0,

         '@bp1': {
            borderLeft: "4px solid $teal11",
            color: "$teal12",
            borderRadius: "8px",
        },
      },
      cyan: {
       borderLeft: 0,

         '@bp1': {
            borderLeft: "4px solid $cyan11",
            color: "$cyan12",
            borderRadius: "8px", 
        },
      },
    },
  },
});

const ValueDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
  pl: "$spacing-04",

  "@bp1": {
    fontSize: "$base",
  },
});

function CoreValuesBlock() {
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
        <CoreValueItems>
          <CoreValueItem>
            <CoreValueCard>
              <LabelContainer>
                <LabelIcon color="plum" />
                <Label color="plum">Actions and words align</Label>
              </LabelContainer>
              <ValueTitle>Reliable</ValueTitle>
              <ValueDescriptionBox color="plum">
                <ValueDescription>
                  I move with intent, keep my word and follow through, even on
                  the little things, so clients and team members can put their
                  trust in me
                </ValueDescription>
              </ValueDescriptionBox>
            </CoreValueCard>
          </CoreValueItem>
          <CoreValueItem>
            <CoreValueCard>
              <LabelContainer>
                <LabelIcon color="blue" />
                <Label color="blue">Circle of influence</Label>
              </LabelContainer>
              <ValueTitle>Pro-active</ValueTitle>
              <ValueDescriptionBox color="blue">
                <ValueDescription>
                  I take responsibility and focus my efforts on new initiatives,
                  innovative ideas and complex problems inside my circle of
                  influence
                </ValueDescription>
              </ValueDescriptionBox>
            </CoreValueCard>
          </CoreValueItem>
          <CoreValueItem>
            <CoreValueCard>
              <LabelContainer>
                <LabelIcon color="crimson" />
                <Label color="crimson">Dive into the unknown</Label>
              </LabelContainer>
              <ValueTitle>Curious</ValueTitle>
              <ValueDescriptionBox color="crimson">
                <ValueDescription>
                  I have a deep desire to explore, investigate and learn new
                  things to understand the people and world around me
                </ValueDescription>
              </ValueDescriptionBox>
            </CoreValueCard>
          </CoreValueItem>
          <CoreValueItem>
            <CoreValueCard>
              <LabelContainer>
                <LabelIcon color="violet" />
                <Label color="violet">Seek to understand</Label>
              </LabelContainer>
              <ValueTitle>Empathy</ValueTitle>
              <ValueDescriptionBox color="violet">
                <ValueDescription>
                  I have empathy for those around me and always try to
                  understand their needs and perspectives first and foremost
                </ValueDescription>
              </ValueDescriptionBox>
            </CoreValueCard>
          </CoreValueItem>
          <CoreValueItem>
            <CoreValueCard>
              <LabelContainer>
                <LabelIcon color="teal" />
                <Label color="teal">Grow the pie together</Label>
              </LabelContainer>
              <ValueTitle>Win-Win</ValueTitle>
              <ValueDescriptionBox color="teal">
                <ValueDescription>
                  I always try to look for solutions that benefit the majority
                  involved in order to collaborate more effectively with others
                </ValueDescription>
              </ValueDescriptionBox>
            </CoreValueCard>
          </CoreValueItem>
          <CoreValueItem>
            <CoreValueCard>
              <LabelContainer>
                <LabelIcon color="cyan" />
                <Label color="cyan">Put first things first</Label>
              </LabelContainer>
              <ValueTitle>Autonomous</ValueTitle>
              <ValueDescriptionBox color="cyan">
                <ValueDescription>
                  I try to live by being driven by principles I value most
                  instead of by (hidden) agendas and forces surrounding me
                </ValueDescription>
              </ValueDescriptionBox>
            </CoreValueCard>
          </CoreValueItem>
        </CoreValueItems>
      </CoreValuesWrapper>
    </Section>
  );
}


export default CoreValuesBlock;
