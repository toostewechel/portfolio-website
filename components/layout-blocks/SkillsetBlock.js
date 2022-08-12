import { styled } from "../../stitches.config.js";
import SkillsCore from "../collapsible/SkillsCore.js";
import SkillsLearning from "../collapsible/SkillsLearning.js";
import ContentBlock from "./ContentBlock.js";

const Content = styled("div", {
  gridArea: "cnt",
  pb: "$spacing-05",
});

const Image = styled("div", {
  gridArea: "img",
  justifySelf: "center",
  padding: "$spacing-04",

  "@bp4": {
    justifySelf: "end",
    pl: "$spacing-12",
  },
});

const CoreSkillsContainer = styled("div", {
  gridArea: "sc",
  display: "flex",
  alignSelf: "flex-start",
});

const LearningSkillsContainer = styled("div", {
  gridArea: "ls",
  display: "flex",
  alignSelf: "flex-start",
});

const GridContainer = styled("div", {
  display: "grid",
  columnGap: "$spacing-06",
  rowGap: "$spacing-04",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridAutoRows: "minmax(125px, auto)",
  gridTemplateAreas: `
    "img img img img img img img img"
    "cnt cnt cnt cnt cnt cnt cnt cnt"
    "sc sc sc sc sc sc sc sc"
    "ls ls ls ls ls ls ls ls"
  `,
  "@bp3": {
    gridTemplateAreas: `
    "cnt cnt cnt cnt img img img img"
    "sc sc sc sc img img img img"
    "ls ls ls ls img img img img"
    ". . . . img img img img"
  `,
  },
  "@bp4": {
    gridTemplateAreas: `
    "cnt cnt cnt cnt img img img img"
    "sc sc ls ls img img img img"
    "sc sc ls ls img img img img"
  `,
    rowGap: "$spacing-06",
  },
});

function SkillsetBlock() {
  return (
    <GridContainer id="skillset">
      <Content>
        <ContentBlock
          heading="My Skillset"
          description="Modern work demands knowledge transfer: the ability to learn and apply
          knowledge to complex problems, new situations and domains. That’s why
          I focus on building knowledge that spans a significant number of areas
          which enables me to be a better designer, colleague and teamplayer."
        />
      </Content>
      <CoreSkillsContainer>
        <SkillsCore />
      </CoreSkillsContainer>
      <LearningSkillsContainer>
        <SkillsLearning />
      </LearningSkillsContainer>
      <Image>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src="/images/skillset-web.png"
        />
      </Image>
    </GridContainer>
  );
}

export default SkillsetBlock;
