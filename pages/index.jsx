import { styled } from "../stitches.config.js";
import StyledLink from "../components/StyledLink.js";

function HomePage() {
  return (
    <div>
      <StyledLink
        href="https://www.figma.com/"
        src="/logo/figma-logo.png"
        title="Figma"
        description="The collaborative interface design tool"
      />
      <StyledLink
        href="https://www.figma.com/"
        src="/logo/spline3d-logo.png"
        title="Spline 3D"
        description="Design tool for 3D web browser experiences"
      />
      <StyledLink
        href="https://www.figma.com/"
        src="/logo/adobe-photoshop-logo.png"
        title="Adobe Illustrator"
        description="Pixel based graphical design tool"
      />
      <StyledLink
        href="https://www.figma.com/"
        src="/logo/adobe-illustrator-logo.png"
        title="Adobe Photoshop"
        description="Vector based graphical design tool"
      />
    </div>
  );
}

export default HomePage;
