import { styled } from "../../stitches.config.js";
import SkillsCore from "../collapsible/SkillsCore.js";
import SkillsLearning from "../collapsible/SkillsLearning.js";

const Content = styled("div", {
  gridArea: "cnt",
  pb: "$spacing-06",
});

const Heading = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const Description = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",

  "@bp1": {
    fontSize: "$lg",
  },
});

const Image = styled("div", {
  gridArea: "img",

  "@bp4": {
    justifySelf: "end",
  },
});

const CoreSkillsContainer = styled("div", {
  gridArea: "sc",
  pr: "$none",
  pb: "$spacing-03",

  "@bp4": {
    pr: "$spacing-03",
  },
});

const LearningSkillsContainer = styled("div", {
  gridArea: "ls",
  pl: "$none",

  "@bp4": {
    pl: "$spacing-03",
  },
});

const GridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridAutoRows: "minmax(100px, auto)",
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
    "sc sc ls ls img img img img"
    "sc sc ls ls img img img img"
  `,
  },
});

function Skillset() {
  return (
    <GridContainer>
      <Content>
        <Heading>My Skillset</Heading>
        <Description>
          Modern work demands knowledge transfer: the ability to learn and apply
          knowledge to complex problems, new situations and domains. That’s why
          I focus on building knowledge that spans a significant number of areas
          which enables me to be a better designer, colleague and teamplayer.
        </Description>
      </Content>
      <CoreSkillsContainer>
        <SkillsCore />
      </CoreSkillsContainer>
      <LearningSkillsContainer>
        <SkillsLearning />
      </LearningSkillsContainer>
      <Image>
        {" "}
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src="/images/skillset-web.png"
        />
      </Image>
    </GridContainer>
  );
}

export default Skillset;
