import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SoftwareCarousel } from "../carousel/SoftwareCarousel";
import { useRouter } from "next/router";

const LinkToButtonIcon = styled("div", {
  position: "absolute",
  top: 12,
  right: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "$olive9",
  padding: "$spacing-03",
  transition:
    "transform 100ms ease-in, color 100ms ease-in, scale 100ms ease-in",
});

const WidgetContainer = styled(motion.div, {
  position: "relative",
  gridArea: "exp",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "$spacing-05",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "16px",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "$medium",
    [`${LinkToButtonIcon}`]: {
      transform: "translateX(6px) translateY(-6px) scale(1.15)",
      color: "$crimson11",
    },
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  height: "292px",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve12",
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$sm",
  color: "$violet10",
  mb: "$spacing-02",
});

export const Experience = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push("/experience/#softwarestack");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push("/experience/#softwarestack");
    }
  };

  return (
    <WidgetContainer
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <LinkToButtonIcon role="presentation">
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <ContentContainer>
        <Label>Software I Use Most</Label>
        <CardTitle>Software Stack</CardTitle>
        <SoftwareCarousel />
      </ContentContainer>
    </WidgetContainer>
  );
};
