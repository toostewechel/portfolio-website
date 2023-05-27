import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const LinkToButtonIcon = styled("div", {
  position: "absolute",
  top: 12,
  right: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "$olive4",
  padding: "$spacing-03",
  transition:
    "transform 100ms ease-in, color 100ms ease-in, scale 100ms ease-in",
});

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
  cursor: "pointer",

  "&:hover": {
    boxShadow: "$large",
    [`${LinkToButtonIcon}`]: {
      transform: "translateX(6px) translateY(-6px) scale(1.15)",
      color: "$crimson10",
    },
  },
  "&:focus": {
    boxShadow: "$medium",
    [`${LinkToButtonIcon}`]: {
      transform: "translateX(6px) translateY(-6px) scale(1.15)",
      color: "$crimson10",
    },
  },
});

const WidgetImage = styled(Image, {
  height: "264px",
  width: "264px",

  "@bp1": {
    height: "396px",
    width: "396px",
  },
  "@bp2": {
    height: "200px",
    width: "200px",
  },
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
});

const TitleContainer = styled("div", {
  textAlign: "center",
});

const ProjectType = styled("h2", {
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
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push("/readme#personality");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push("/readme#personality");
    }
  };

  return (
    <WidgetContainer
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <LinkToButtonIcon role="presentation">
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <ImageContainer>
        <WidgetImage
          src="/widgets/advocate-tile.png"
          height="264"
          width="264"
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
