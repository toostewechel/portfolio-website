import { styled } from "../../stitches.config.js";
import React from "react";
import { Tag } from "../tag/Tag";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SoftwareCarousel } from "../carousel/SoftwareCarousel";

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

  "&:hover": {
    boxShadow: "$medium",
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
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

export const Experience = () => {
  return (
    <WidgetContainer whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <LinkToButtonIcon>
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
