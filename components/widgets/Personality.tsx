import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const WidgetContainer = styled("div", {
  gridArea: "pers",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "$spacing-05",
  boxShadow: "$small",
  borderRadius: "16px",
  position: "relative",
  overflow: "hidden",
  aspectRatio: "1/1",
  background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",
  willChange: "all",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    boxShadow: "$medium",
    scale: "1.02",
  },
});

const LinkToButtonIcon = styled("a", {
  position: "absolute",
  top: 16,
  right: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "$bronze11",
  padding: "$spacing-03",
  transition: "background 200ms ease-in",
  background: "linear-gradient(135deg, #FBF4EA 0%, #E3DCD4 100%)",
  border: "1px solid transparent",
  outline: 0,
  boxShadow:
    "-1px 1px 2px rgba(210, 204, 196, 0.2), 1px -1px 2px rgba(210, 204, 196, 0.2), -1px -1px 2px rgba(255, 255, 250, 0.9), 1px 1px 3px rgba(210, 204, 196, 0.9), inset 1px 1px 2px rgba(255, 255, 250, 0.3), inset -1px -1px 2px rgba(210, 204, 196, 0.5)",
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "192px",
});

const TitleContainer = styled("div", {
  textAlign: "center",
});

const ProjectType = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve2",
  mb: "$spacing-01",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  color: "$mauve7",
});

export const Personality = () => {
  return (
    <WidgetContainer>
      <LinkToButtonIcon>
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <ImageContainer>
        <Image
          src="/widgets/advocate.png"
          height="192"
          width="192"
          alt="logo-advocate"
        />
      </ImageContainer>
      <TitleContainer>
        <ProjectType>My Personality</ProjectType>
        <MetaInformation>Assertive Advocate</MetaInformation>
      </TitleContainer>
    </WidgetContainer>
  );
};
