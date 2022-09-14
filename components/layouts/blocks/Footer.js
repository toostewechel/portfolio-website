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
  gap: "$spacing-04",
});

const SocialButtonIcon = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$violet3",
  padding: "$spacing-02",
  borderRadius: "100%",
  color: "$violet11",
  willChange: "transform",
  transition: "all, 300ms ease-in",

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all, 300ms ease-out",
    backgroundColor: "$violet3",
    boxShadow: "$smooth",
  },

  "@bp2": {
    padding: "$spacing-04",
  },
});

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <StyledLogo src="/logo/logo.png" />
      </LogoContainer>
      <SocialsContainer>
        <SocialButtonIcon>
          <GitHub size={19} />
        </SocialButtonIcon>
        <SocialButtonIcon>
          <Twitter size={19} />
        </SocialButtonIcon>
        <SocialButtonIcon>
          <Linkedin size={19} />
        </SocialButtonIcon>
      </SocialsContainer>
    </FooterContainer>
  );
}

export default Footer;
