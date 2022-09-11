import { styled } from "../../../stitches.config.js";
import { GitHub, Twitter, Linkedin } from "react-feather";

const FooterContainer = styled("div", {
  maxWidth: "1234px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "196px",

  "@bp1": {
    width: "232px",
  },
});

const StyledLogo = styled("img", {
  width: "100%",
  height: "auto",
});

const SocialsContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-05",
});

const SocialIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$violet3",
  width: "48px",
  height: "48px",
  borderRadius: "100%",
  color: "$violet11",
});

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <StyledLogo src="/logo/logo.png" />
      </LogoContainer>
      <SocialsContainer>
        <SocialIcon>
          <GitHub />
        </SocialIcon>
        <SocialIcon>
          <Twitter />
        </SocialIcon>
        <SocialIcon>
          <Linkedin />
        </SocialIcon>
      </SocialsContainer>
    </FooterContainer>
  );
}

export default Footer;
