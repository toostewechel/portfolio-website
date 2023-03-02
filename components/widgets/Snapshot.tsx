import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WidgetContainer = styled("div", {
  gridArea: "cs",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-09",
  width: "100%",
  boxShadow: "$small",
  borderRadius: "16px",
  position: "relative",
  overflow: "hidden",
  aspectRatio: "1/1",

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

const BackgroundImage = styled("div", {
  position: "absolute",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "592px",
  width: "592px",
  zIndex: "0",

  "@bp2": {
    height: "292px",
    width: "292px",
  },
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

const IconSize = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$5",
});

const TitleContainer = styled("div", {
  position: "absolute",
  borderRadius: "12px",
  background: "rgba(2,0,16, 0.70)",
  padding: "$spacing-04",
  boxShadow: "$small",
  bottom: 16,
  right: 16,
  left: 16,
});

const ProjectType = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve2",
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
  color: "$mauve7",
});

function LanguageIcon({ language }) {
  switch (language) {
    case "nl":
      return (
        <Icon>
          <IconSize>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/icons/nl.svg"
            />
          </IconSize>
        </Icon>
      );
    case "en":
      return (
        <Icon>
          <IconSize>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/icons/gb.svg"
            />
          </IconSize>
        </Icon>
      );
    default:
      return null;
  }
}

interface Props {
  type: string;
  title: string;
  backgroundImage: string;
  backgroundColor: "blue";
  language: "nl" | "en";
}

export const Snapshot = ({
  backgroundImage,
  backgroundColor,
  language,
  type,
  title,
}: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <WidgetContainer backgroundColor={backgroundColor}>
        <BackgroundImage
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <ContentContainer>
          <LanguageIcon language={language} />
          <TitleContainer>
            <ProjectType>{type}</ProjectType>
            <MetaInformation>{title}</MetaInformation>
          </TitleContainer>
        </ContentContainer>
      </WidgetContainer>
    </motion.div>
  );
};