import { styled } from "../../../stitches.config.js";
import { GitHub, Twitter, Linkedin } from "react-feather";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";

const Container = styled("div", {
  padding: "$spacing-04",
})

const FooterContainer = styled("div", {
  maxWidth: "100%",
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
  gap: "$spacing-03",
});

const SocialButtonIcon = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$6",
  p: "8px",
  backgroundColor: "$violet3",
  color: "$violet11",
  borderRadius: "999px",
  willChange: "transform",
  transition: "transform 300ms ease-in, scale 300ms ease-in",

  "&:hover": {
    scale: 1.02,
    transform: "translateY(-2px)",
    transition: "transform 300ms ease-out, scale 300ms ease-out",
    backgroundColor: "$violet4",
    color: "$violet12",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  "@bp2": {
    size: "$7",
  }
});

const FooterMetaContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  mt: "$spacing-06",
  pt: "$spacing-04",
  borderTop: "solid 1px $gray6",
  maxWidth: "100%",
})

const FlexBox = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-03",
  alignItems: "center",
})

const Circle = styled("div", {
  width: "16px",
  height: "16px",
  borderRadius: "100%",
  backgroundColor: "$violet11",
})

const EmailAddress = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$gray11",
})

const Year = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$gray11",
})

const CurrentYear = new Date().getFullYear()

function Footer() {
  return (
    <Container>
    <FooterContainer>
      <LogoContainer>
        <StyledLogo src="/logo/logo.png" />
      </LogoContainer>
      <SocialsContainer>
        <SocialButtonIcon href="https://twitter.com/boonikad93">
          <TwitterFillIcon />
        </SocialButtonIcon>
        <SocialButtonIcon href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/">
          <LinkedinFillIcon />
        </SocialButtonIcon>
        <SocialButtonIcon href="https://github.com/toostewechel">
          <GithubFillIcon />
        </SocialButtonIcon>
      </SocialsContainer>
    </FooterContainer>
    <FooterMetaContainer>
      <FlexBox>
        <Circle />
      <EmailAddress>info@snapshotslab.nl</EmailAddress>
        </FlexBox>
      <Year>&copy; {CurrentYear}</Year>
    </FooterMetaContainer>
    </Container>
  );
}

export default Footer;
