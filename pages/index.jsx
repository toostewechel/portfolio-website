import { styled } from "../stitches.config.js";
import StyledLink from "../components/StyledLink.js";
import ListItem from "../components/ListItem.js";
import SkillsCollapsible from "../components/primitives/SkillsCollapsible.js"
import SkillsCollapsibleAnimate from "../components/primitives/SkillsCollapsibleAnimate.js"

function HomePage() {
  return (
    <div>
      <SkillsCollapsible />
      <SkillsCollapsibleAnimate />
    </div>
  );
}

export default HomePage;
