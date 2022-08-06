import { styled } from "../stitches.config.js";
import ListItem from "../components/ListItem.js";
import SkillsCore from "../components/collapsible/SkillsCore.js";
import SkillsLearning from "../components/collapsible/SkillsLearning.js";
import StyledLink from "../components/StyledLink.js";

const Title = styled("h2", {
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

const Paragraph = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",
  mb: "$spacing-07",

  "@bp1": {
    fontSize: "$lg",
  },
});

function HomePage() {
  return (
    <div>
      <div>
        <SkillsCore />
        <SkillsLearning />
      </div>
      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "4px" }}>
          <Title>Experience & Education</Title>
          <Paragraph>
            I can effectively manage the product creation process throughout the
            different product development stages, from initial concept to
            product launch.
          </Paragraph>
        </div>
        <ListItem
          src="/logo/university-twente-logo.png"
          title="University of Twente"
          subtitle="Master Industrial Design Engineering"
          description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
          duration="2015 - 2018"
          location="Enschede, Netherlands"
        />
        <ListItem
          src="/logo/university-twente-logo.png"
          title="University of Twente"
          subtitle="Master Industrial Design Engineering"
          description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
          duration="2015 - 2018"
          location="Enschede, Netherlands"
        />
        <ListItem
          src="/logo/university-twente-logo.png"
          title="University of Twente"
          subtitle="Master Industrial Design Engineering"
          description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
          duration="2015 - 2018"
          location="Enschede, Netherlands"
        />
      </div>
      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "4px" }}>
          <Title>Software Stack</Title>
          <Paragraph>
            I mainly focus on (learning) industry leading tools and frameworks
            to streamline and optimize my design and development workflow.
          </Paragraph>
        </div>
        <StyledLink
          href="https://twitter.com/home"
          src="/logo/figma-logo.png"
          title="Figma"
          description="The collaborative interface design tool"
        />
        <StyledLink
          href="https://twitter.com/home"
          src="/logo/spline3d-logo.png"
          title="Spline 3D"
          description="The collaborative interface design tool"
        />
        <StyledLink
          href="https://twitter.com/home"
          src="/logo/adobe-illustrator-logo.png"
          title="Adobe Illustrator"
          description="The collaborative interface design tool"
        />
      </div>
    </div>
  );
}

export default HomePage;
