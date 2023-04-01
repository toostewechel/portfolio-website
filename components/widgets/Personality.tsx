import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const WidgetContainer = styled(motion.div, {
  gridArea: "pers",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "$spacing-05",
  boxShadow: "$medium",
  borderRadius: "16px",
  position: "relative",
  overflow: "hidden",
  aspectRatio: "1/1",
  background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",

  "&:hover": {
    boxShadow: "$medium",
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
  color: "$olive11",
  padding: "$spacing-03",
  transition: "background 200ms ease-in",
  background: "linear-gradient(135deg, #F3F5F3 0%, #DBDDDB 100%)",
  boxShadow:
    "-1px 1px 2px rgba(173, 175, 173, 0.2), 1px -1px 2px rgba(173, 175, 173, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(173, 175, 173, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(173, 175, 173, 0.5)",
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "264px",
  height: "264px",

  "@bp2": {
    height: "192px",
    width: "192px",
  },
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
    <WidgetContainer whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <LinkToButtonIcon>
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <ImageContainer>
        <Image
          src="/widgets/advocate-tile.png"
          layout="responsive"
          height="296"
          width="296"
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
