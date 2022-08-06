import { styled } from "../stitches.config.js";
import StyledLink from "../components/StyledLink.js";
import ListItem from "../components/ListItem.js";
import SkillsCore from "../components/collapsible/SkillsCore.js"
import SkillsLearning from "../components/collapsible/SkillsLearning.js"


function HomePage() {
  return (
    <div>
      <SkillsCore />
      <SkillsLearning />
    </div>
  );
}

export default HomePage;
