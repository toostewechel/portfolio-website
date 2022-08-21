import { Tabs, TabsList, TabsContent, TabsTrigger } from "./Tabs.js";
import { styled } from "../../stitches.config.js";
import StyledLink from "../../components/StyledLink.js";

const FlexContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  columnGap: "$spacing-05",

  "@bp3": {
    flexDirection: "row",
    rowGap: "$spacing-04",
  },
});

const Flex = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-04",
});

function SoftwareStackTabs() {
  return (
    <Tabs defaultValue="design">
      <TabsList>
        <TabsTrigger value="design">Design</TabsTrigger>
        <TabsTrigger value="development">Development</TabsTrigger>
        <TabsTrigger value="workflow">Workflow</TabsTrigger>
      </TabsList>
      <TabsContent value="design">
        <FlexContainer>
          <Flex>
            <StyledLink
              href="https://www.figma.com/"
              src="/logo/figma-logo.png"
              title="Figma"
              description="The collaborative interface design tool"
            />
            <StyledLink
              href="https://www.adobe.com/products/illustrator.html"
              src="/logo/adobe-illustrator-logo.png"
              title="Adobe Illustrator"
              description="Vector based graphical design tool"
            />
          </Flex>
          <Flex>
            <StyledLink
              href="https://www.adobe.com/products/photoshop.html"
              src="/logo/adobe-photoshop-logo.png"
              title="Adobe Photoshop"
              description="Pixel based graphical design tool"
            />
            <StyledLink
              href="https://spline.design/"
              src="/logo/spline3d-logo.png"
              title="Spline 3D"
              description="Design tool for 3D web experiences"
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
              description="The collaborative browser based IDE"
            />
            <StyledLink
              href="https://code.visualstudio.com/"
              src="/logo/visual-studio-code-logo.png"
              title="Visual Studio Code"
              description="Code editor (IDE)"
            />
            <StyledLink
              href="https://reactjs.org/"
              src="/logo/react-logo.png"
              title="React"
              description="JavaScript library for building UI's"
            />
            <StyledLink
              href="https://www.radix-ui.com/"
              src="/logo/radix-logo.png"
              title="Radix UI"
              description="Unstyled component library for React"
            />
          </Flex>
          <Flex>
            <StyledLink
              href="https://www.github.com"
              src="/logo/github-logo.png"
              title="GitHub"
              description="The complete developer platform"
            />
            <StyledLink
              href="https://hyper.is/"
              src="/logo/hyper-logo.png"
              title="Hyper"
              description="Extensible command-line interface"
            />
            <StyledLink
              href="https://nextjs.org/"
              src="/logo/nextjs-logo.png"
              title="Next.JS"
              description="The React Framework for Production"
            />
          </Flex>
        </FlexContainer>
      </TabsContent>
      <TabsContent value="workflow">
        <FlexContainer>
          <Flex>
            <StyledLink
              href="https://linear.app/"
              src="/logo/linear-logo.png"
              title="Linear"
              description="Issue tracking tool"
            />
            <StyledLink
              href="https://www.adobe.com/products/illustrator.html"
              src="/logo/iconjar-logo.png"
              title="IconJar"
              description="Icon organizer for macOS"
            />
            <StyledLink
              href="https://www.notion.so/"
              src="/logo/notion-logo.png"
              title="Notion"
              description="Workspace for notes, docs and tasks"
            />
            <StyledLink
              href="https://codespace.app/"
              src="/logo/codespace-logo.png"
              title="Codespace"
              description="Code snippets manager"
            />
            <StyledLink
              href="https://roamresearch.com/"
              src="/logo/roam-research-logo.png"
              title="Roam Research"
              description="Tool for networked thoughts"
            />
          </Flex>
          <Flex>
            <StyledLink
              href="https://1password.com/"
              src="/logo/1password-logo.png"
              title="1Password"
              description="Password manager"
            />
            <StyledLink
              href="https://wormhole.app/"
              src="/logo/wormhole-logo.png"
              title="Wormhole"
              description="E2E encrypted file sharing"
            />
            <StyledLink
              href="https://signal.org/"
              src="/logo/signal-logo.png"
              title="Signal"
              description="E2E encrypted messaging"
            />
            <StyledLink
              href="https://skiff.com/"
              src="/logo/skiff-logo.png"
              title="Skiff"
              description="E2E encrypted mail, pages and drive"
            />
            <StyledLink
              href="https://raycast.com/"
              src="/logo/raycast-logo.png"
              title="Raycast"
              description="Supercharge productivity"
            />
          </Flex>
        </FlexContainer>
      </TabsContent>
    </Tabs>
  )
}

export default SoftwareStackTabs;


