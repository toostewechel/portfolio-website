import { Tabs, TabsList, TabsContent, TabsTrigger } from "./Tabs.js";
import { styled } from "../../stitches.config.js";
import StyledLink from "../../components/StyledLink";

const FlexContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  columnGap: "$spacing-07",
  mt: 0,

  "@bp3": {
    flexDirection: "row",
    rowGap: "$spacing-04",
    mt: "$spacing-04",
  },
});

const Flex = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-02",
  mb: "$spacing-02",

  "@bp3": {
    gap: "$spacing-06",
    mb: 0,
  },
});

function SoftwareStackTabs() {
  return (
    <Tabs defaultValue="workflow">
      <TabsList>
        <TabsTrigger value="workflow">Workflow</TabsTrigger>
        <TabsTrigger value="development">Development</TabsTrigger>
        <TabsTrigger value="design">Design</TabsTrigger>
      </TabsList>
      <TabsContent value="workflow">
        <FlexContainer>
          <Flex>
            <StyledLink
              href="https://linear.app/"
              src="/logo/linear-logo.png"
              title="Linear"
              description="Issue Tracking Tool"
            />
            <StyledLink
              href="https://geticonjar.com/"
              src="/logo/iconjar-logo.png"
              title="IconJar"
              description="Icon Organizer for MacOS"
            />
            <StyledLink
              href="https://www.notion.so/"
              src="/logo/notion-logo.png"
              title="Notion"
              description="Workspace for Notes & Docs"
            />
            <StyledLink
              href="https://codespace.app/"
              src="/logo/codespace-logo.png"
              title="Codespace"
              description="Code Snippets Manager"
            />
            <StyledLink
              href="https://capacities.io/"
              src="/logo/capacities-logo.svg"
              title="Capacities"
              description="Tool for Networked Thoughts"
            />
          </Flex>
          <Flex>
            <StyledLink
              href="https://1password.com/"
              src="/logo/1password-logo.png"
              title="1Password"
              description="Password Manager"
            />
            <StyledLink
              href="https://wormhole.app/"
              src="/logo/wormhole-logo.png"
              title="Wormhole"
              description="E2E Encrypted File Sharing"
            />
            <StyledLink
              href="https://signal.org/"
              src="/logo/signal-logo.png"
              title="Signal"
              description="E2E Encrypted Messaging"
            />
            <StyledLink
              href="https://skiff.com/"
              src="/logo/skiff-logo.png"
              title="Skiff"
              description="E2E Encrypted Mail"
            />
            <StyledLink
              href="https://raycast.com/"
              src="/logo/raycast-logo.png"
              title="Raycast"
              description="Supercharge your Productivity"
            />
          </Flex>
        </FlexContainer>
      </TabsContent>
      <TabsContent value="development">
        <FlexContainer>
          <Flex>
            <StyledLink
              href="https://www.replit.com/"
              src="/logo/replit-logo.png"
              title="Replit"
              description="Collaborative Browser Based IDE"
            />
            <StyledLink
              href="https://stitches.dev/"
              src="/logo/stitches-logo.png"
              title="Stitches"
              description="CSS-in-JS Library"
            />
            <StyledLink
              href="https://reactjs.org/"
              src="/logo/react-logo.png"
              title="React"
              description="JavaScript Library for Building UI's"
            />
            <StyledLink
              href="https://www.radix-ui.com/"
              src="/logo/radix-logo.png"
              title="Radix UI"
              description="Unstyled Component Library"
            />
          </Flex>
          <Flex>
            <StyledLink
              href="https://www.github.com"
              src="/logo/github-logo.png"
              title="GitHub"
              description="Complete Developer Platform"
            />
            <StyledLink
              href="https://hyper.is/"
              src="/logo/hyper-logo.png"
              title="Hyper"
              description="Extensible Command-line Interface"
            />
            <StyledLink
              href="https://nextjs.org/"
              src="/logo/nextjs-logo.png"
              title="Next.JS"
              description="The React Framework for Production"
            />
            <StyledLink
              href="https://code.visualstudio.com/"
              src="/logo/visual-studio-code-logo.png"
              title="Visual Studio Code"
              description="Code editor (IDE)"
            />
          </Flex>
        </FlexContainer>
      </TabsContent>
      <TabsContent value="design">
        <FlexContainer>
          <Flex>
            <StyledLink
              href="https://www.figma.com/"
              src="/logo/figma-logo.png"
              title="Figma"
              description="Collaborative Interface Design Tool"
            />
            <StyledLink
              href="https://www.adobe.com/products/illustrator.html"
              src="/logo/adobe-illustrator-logo.png"
              title="Adobe Illustrator"
              description="Vector Based Graphical Design Tool"
            />
          </Flex>
          <Flex>
            <StyledLink
              href="https://www.adobe.com/products/photoshop.html"
              src="/logo/adobe-photoshop-logo.png"
              title="Adobe Photoshop"
              description="Pixel Based Graphical Design Tool"
            />
            <StyledLink
              href="https://spline.design/"
              src="/logo/spline3d-logo.png"
              title="Spline 3D"
              description="3D Design Tool for the Web"
            />
          </Flex>
        </FlexContainer>
      </TabsContent>
    </Tabs>
  );
}

export default SoftwareStackTabs;
