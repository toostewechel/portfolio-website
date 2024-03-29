import { styled } from "../../stitches.config.js";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WidgetContainer = styled(motion.div, {
  display: "flex",
  m: 0,
  width: "100%",
  height: "100%",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.3), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "16px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",

  "@bp2": {
    m: "$none $spacing-02 $spacing-02 $spacing-02",
  },
  "&:focus": {
    border: "1px solid $blue11",
  },

  variants: {
    backgroundColor: {
      blue: {
        backgroundImage: "linear-gradient(315deg, #B7D9F8 0%, #E7F9FB 100%)",
      },
    },
  },

  "&:hover": {
    boxShadow: "$medium",
  },
});

const BackgroundImage = styled(Image, {
  width: "100%",
  height: "100%",
});

const ContentContainer = styled("div", {
  padding: "$spacing-05",
  display: "relative",
});

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  position: "absolute",
  borderRadius: "6px",
  boxShadow: "$small",
  background: "$mauveA9",
  top: 16,
  left: 16,
});

const TitleContainer = styled("div", {
  position: "absolute",
  borderRadius: "8px",
  background: "rgba(2,0,16, 0.70)",
  padding: "$spacing-04",
  boxShadow: "$small",
  bottom: 16,
  right: 16,
  left: 16,
  backdropFilter: "blur(3px)",
  webkitBackdropFilter: "blur(3px)",
});

const ProjectType = styled("h2", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve3",
  mb: "$spacing-02",
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
  color: "$mauve5",
});

const ComingSoonBadge = styled("div", {
  position: "absolute",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$xs",
  color: "$crimson2",
  backgroundColor: "$red11",
  padding: "$spacing-02 $spacing-03",
  borderRadius: "4px",
  boxShadow: "$small",
  top: 22,
  right: 16,
});

interface ProjectTimelineCard {
  type: "Case Study" | "Project";
  title: string;
  backgroundImage: string;
  backgroundColor: "blue";
  language: "nl" | "en";
}

const languageIcons = {
  nl: "/icons/nl.svg",
  en: "/icons/gb.svg",
};

export const ProjectTimelineCard = ({
  backgroundImage,
  backgroundColor,
  language,
  type,
  title,
}: ProjectTimelineCard) => {
  const BackgroundImageContainer = styled("div", {
    position: "absolute",
    backgroundImage: `url("${backgroundImage}")`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  });

  return (
    <WidgetContainer
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      backgroundColor={backgroundColor}
    >
      <BackgroundImageContainer />
      <BackgroundImage width={592} height={592} src="" alt={title} />
      <ContentContainer>
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        <Icon>
          <Image
            width={24}
            height={24}
            src={languageIcons[language]}
            alt={`language: ${language}`}
          />
        </Icon>
        <TitleContainer>
          <ProjectType>{type}</ProjectType>
          <MetaInformation>{title}</MetaInformation>
        </TitleContainer>
      </ContentContainer>
    </WidgetContainer>
  );
};
