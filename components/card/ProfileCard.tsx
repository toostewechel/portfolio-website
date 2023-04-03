import React from "react";
import { styled } from "../../stitches.config.js";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import AvatarStatusBadge from "../avatar/AvatarStatusBadge.js";
import { Twitter, Github, Linkedin, Smartphone, Mail } from "lucide-react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  border: "1px solid linear-gradient(30deg, $violetA9, $crimsonA2)",
  background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",
  boxShadow: " 0px 6px 6px rgba(0, 0, 0, 0.15)",
  width: "100%",

  "@bp1": {
    width: "264px",
  },

  "@bp4": {
    flexDirection: "row",
  },
});

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  p: "$spacing-06",
  height: "auto",
  width: "100%",
});

const FlexContainer = styled("div", {
  display: "flex",
  width: "100%",
});

const ImageContainer = styled("div", {
  mb: "$spacing-05",
});

const CardTitle = styled("p", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-default",
  color: "$mauve1",

  "@bp1": {
    fontSize: "$xl",
  },
});

const CardDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve5",
  mb: "$spacing-08",
});

const StatusBadge = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  p: "$spacing-03",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.2)",
  border: "solid 1px $violetA7",
  mb: "$spacing-08",
});

const Badge = styled("div", {
  width: "12px",
  height: "12px",
  borderRadius: "999px",
  backgroundColor: "$green8",
  border: "solid 2px $violet4",
  mr: "$spacing-03",
});

const BadgeLabel = styled("p", {
  fontSize: "$sm",
  fontWeight: "$semi-bold",
  fontFamily: "$default",
  color: "$violet3",
  mt: "$spacing-01",
  mr: "$spacing-02",
});

const Link = styled("a", {
  outlineOffset: "2px",

  "&:focus": {
    outlineColor: "$violet11",
  },
});

const SocialIconBar = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
});

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$6",
  p: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  color: "$violet3",
  borderRadius: "999px",
  willChange: "transform",
  transition: "transform 300ms ease-in, scale 300ms ease-in",

  "&:hover": {
    scale: 1.03,
    transform: "translateY(-4px)",
    transition: "transform 300ms ease-out, scale 300ms ease-out",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});

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
  transition: "background 200ms ease-in",
  background: "transparent",
  border: "1px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "all 200ms ease-out",
    backgroundColor: "$olive3",
    border: "1px solid $olive6",
    color: "$olive12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve3",
    border: "1px solid $blue11",
    color: "$mauve12",
  },
});

interface ProfileCardProps {
  badge?: boolean;
}

function ProfileCard(props: ProfileCardProps) {
  return (
    <Container>
      <FlexContainer>
        <Card>
          <ImageContainer>
            <AvatarStatusBadge
              size={10}
              src="/avatar/avatar-tom-oostewechel.png"
            />
          </ImageContainer>
          <CardTitle>Tom Oostewechel</CardTitle>
          <CardDescription>Product Designer</CardDescription>
          {props.badge ? (
            <StatusBadge>
              <Badge />
              <BadgeLabel>Open to work</BadgeLabel>
            </StatusBadge>
          ) : null}
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
            <SocialButtonIcon
              href="https://github.com/toostewechel"
              target="_blank"
            >
              <Mail size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://github.com/toostewechel"
              target="_blank"
            >
              <Smartphone size={20} />
            </SocialButtonIcon>
          </SocialButtonContainer>
        </Card>
      </FlexContainer>
    </Container>
  );
}

export default ProfileCard;