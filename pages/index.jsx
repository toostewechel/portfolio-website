import { styled } from "../stitches.config.js";
import StyledLink from "../components/StyledLink.js";

function HomePage() {
  return (
    <div>
      <StyledLink href="https://www.figma.com/" src="/logo/figma-logo.png" title="Figma" description="The collaborative interface design tool"></StyledLink>
    </div>
  );
}

export default HomePage;
