import { styled } from "../../../stitches.config.js";
import { PageLayout } from "../Layout.js";
import {
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardPanel,
} from "../../card/HoverCard.js";
import { Twitter, Github, Linkedin, Smartphone, Mail } from "lucide-react";
import SiteLogo from "../SiteLogo.js";
import Image from "next/image";

const Container = styled("footer", {
  maxWidth: "1260px",
  margin: "0 auto",
});

const FooterHeaderContainer = styled("div", {
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  gap: "$spacing-07",

  "@bp3": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "end",
  },
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-03",
  width: "100%",
  alignItems: "start",

  "@bp3": {
    width: "auto",
    gap: "$spacing-04",
  },
});

const Description = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  color: "$mauve10",
  fontSize: "$sm",
  maxWidth: "380px",
  paddingLeft: "$spacing-01",

  "@bp2": {
    fontSize: "$base",
  },
});

const PoweredByContainer = styled("div", {
  m: 0,
  display: "flex",
  width: "100%",
  p: "0",
  alignItems: "center",
  background: "transparent",
  gap: "$spacing-02",
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$xs",
  color: "$mauve9",
  width: "148px",
  textTransform: "uppercase",
});

const PoweredByLogoContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "none",

  "@bp2": {
    gap: "$spacing-02",
  },
});

const PoweredByBadge = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve9",
  transition: "background 150ms ease-in",
  background: "transparent",
  padding: "$spacing-03",
  borderRadius: "6px",
  border: "1px solid transparent",
  transition: "background 150ms ease-in",

  "&:hover": {
    transition: "background 150ms ease-out",
    backgroundColor: "$olive2",
    border: "1px solid $olive6",
  },
});

const FooterMetaContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  mt: "$spacing-06",
  borderTop: "solid 1px $gray6",
  maxWidth: "100%",
});

const FlexBox = styled("div", {
  maxWidth: "1272px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-03",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "$spacing-04",
});

const Year = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve10",
});

const CurrentYear = new Date().getFullYear();

const SocialButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
});

const SocialButtonIcon = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  color: "$olive9",
  padding: "$spacing-03",
  transition: "background 150ms ease-in",
  background: "transparent",
  border: "1px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "all 150ms ease-out",
    backgroundColor: "$olive3",
    border: "1px solid $olive6",
    color: "$olive12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "$mauve3",
    border: "1px solid $blue11",
    color: "$mauve12",
  },
});

const BadgeImage = styled(Image, {
  heigth: "24px",
  width: "70px",

  "@bp2": {
    height: "29px",
    width: "auto",
  },
});

function Footer() {
  return (
    <>
      <PageLayout>
        <Container>
          <FooterHeaderContainer>
            <Box>
              <SiteLogo />
              <Description>
                Personal portfolio site of Tom Oostewechel with a curated
                overview of my professional and personal work
              </Description>
            </Box>
            <Box>
              <PoweredByContainer>
                <Label>Powered By</Label>
              </PoweredByContainer>
              <PoweredByLogoContainer>
                <HoverCardRoot>
                  <HoverCardTrigger asChild>
                    <PoweredByBadge
                      href="https://www.radix-ui.com/"
                      target="_blank"
                    >
                      <BadgeImage
                        width={97}
                        height={29}
                        src="/badges/radix-badge.png"
                        alt="Radix UI Logo"
                      />
                    </PoweredByBadge>
                  </HoverCardTrigger>
                  <HoverCardPanel
                    logo="/logo/radix-logo.png"
                    title="Radix UI"
                    socialHandle="@radix_ui"
                    description="React components, icons, and colors for building high-quality, accessible UI. Free and open-source."
                    followingCount="0"
                    followersCount="15,6K"
                  />
                </HoverCardRoot>
                <HoverCardRoot>
                  <HoverCardTrigger asChild>
                    <PoweredByBadge
                      href="https://akash.network/"
                      target="_blank"
                    >
                      <BadgeImage
                        width={97}
                        height={29}
                        src="/badges/akash-logo-badge.png"
                        alt="Akash Logo"
                      />
                    </PoweredByBadge>
                  </HoverCardTrigger>
                  <HoverCardPanel
                    logo="/logo/akash-logo.png"
                    title="Akash Network"
                    socialHandle="@akashnet_"
                    description="A decentralised, open and peer-to-peer marketplace for cloud resources"
                    followingCount="319"
                    followersCount="85,8K"
                  />
                </HoverCardRoot>
                <HoverCardRoot>
                  <HoverCardTrigger asChild>
                    <PoweredByBadge href="https://replit.com/" target="_blank">
                      <BadgeImage
                        width={97}
                        height={29}
                        src="/badges/replit-logo-badge.png"
                        alt="Replit Logo"
                      />
                    </PoweredByBadge>
                  </HoverCardTrigger>
                  <HoverCardPanel
                    logo="/logo/replit-logo.png"
                    title="Replit"
                    socialHandle="@replit"
                    description="Build software collaboratively from anywhere in the world, on any device, without spending a second on setup."
                    followingCount="1.091"
                    followersCount="73,4K"
                  />
                </HoverCardRoot>
              </PoweredByLogoContainer>
            </Box>
          </FooterHeaderContainer>
        </Container>
      </PageLayout>
      <FooterMetaContainer>
        <FlexBox>
          <Year>&copy; {CurrentYear}</Year>
          <SocialButtonContainer>
            <SocialButtonIcon
              href="https://twitter.com/boonikad93"
              target="_blank"
            >
              <Twitter size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
              target="_blank"
            >
              <Linkedin size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://github.com/toostewechel"
              target="_blank"
            >
              <Github size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon href="mailto:tomas93@skiff.com" target="_blank">
              <Mail size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon href="tel:0612647976" target="_blank">
              <Smartphone size={20} />
            </SocialButtonIcon>
          </SocialButtonContainer>
        </FlexBox>
      </FooterMetaContainer>
    </>
  );
}

export default Footer;
