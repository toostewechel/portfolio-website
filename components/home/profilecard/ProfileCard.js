import React from "react";
import { styled } from "../../../stitches.config.js";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import AvatarStatusBadge from "../../avatar/AvatarStatusBadge.js";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  border: "1px solid linear-gradient(30deg, $violetA9, $crimsonA2)",
	background: "linear-gradient(158.79deg, #F8F1EE 6.55%, #EADDD7 35.22%, #B8A383 91.45%)",
  maxWidth: "592px",
	height: "100%",

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

const CardTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",

  "@bp1": {
    fontSize: "$xl",
    mt: "$spacing-02",
  },
});

const CardDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve12",
  mb: "$spacing-06",
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

const Menu = styled("div", {
  display: "flex",
  flexDirection: "column",
  pt: "$spacing-04",
  width: "100%",

  "@bp4": {
    pl: "$spacing-05",
  },
});

function ProfileCard(props) {
  return (
    <Container>
      <FlexContainer>
        <Card>
          <ImageContainer>
            <AvatarStatusBadge size={10} src="/avatar/avatar-tom-oostewechel.png" />
          </ImageContainer>
          <CardTitle>Tom Oostewechel</CardTitle>
          <CardDescription>Product Designer</CardDescription>
          {props.badge ? (
            <StatusBadge>
              <Badge />
              <BadgeLabel>Open to work</BadgeLabel>
            </StatusBadge>
          ) : null}
          <SocialIconBar>
            <Link href="https://twitter.com/home">
              <Icon>
                <TwitterFillIcon />
              </Icon>
            </Link>
            <Link href="https://twitter.com/home">
              <Icon>
                <LinkedinFillIcon />
              </Icon>
            </Link>
            <Link href="https://twitter.com/home">
              <Icon>
                <GithubFillIcon />
              </Icon>
            </Link>
          </SocialIconBar>
        </Card>
      </FlexContainer>
    </Container>
  );
}

export default ProfileCard;
