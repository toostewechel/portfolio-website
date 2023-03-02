import { styled } from "../../stitches.config.js";
import React from "react";
import Avatar from "../avatar/Avatar.js";
import { ArrowRight, ArrowDown, ArrowUpRight, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSkillsBar } from "./AnimatedSkillsBar.tsx";
import { CarouselExample } from "../carousel/Carousel.tsx";

const WidgetContainer = styled(motion.div, {
  gridArea: "cc",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-09",
  width: "100%",
  padding: "$spacing-05",
  backgroundColor: "white",
  boxShadow: "$small",
  borderRadius: "16px",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    boxShadow: "$medium",
  },

  "@bp2": {
    flexDirection: "row",
    gap: "$spacing-07",
  },
});

const SkillsLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  zIndex: "2",
  height: "264px",

  "@bp2": {
    width: "50%",
    justifyContent: "space-between",
    height: "100%",
  },
});

const ProductRolesLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  width: "100%",
  height: "264px",
  zIndex: "2",

  "@bp2": {
    width: "50%",
    flexDirection: "column",
    height: "100%",
  },
});

const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-02",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$none",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve12",
  mt: "$spacing-01",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",

  variants: {
    color: {
      blue: {
        color: "$blue10",
      },
      red: {
        color: "$red10",
      },
      teal: {
        color: "$teal10",
      },
    },
  },
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$sm",
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

export const CoreCompetencies = ({}) => {
  return (
    <WidgetContainer whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <LinkToButtonIcon>
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <SkillsLayout>
        <TitleContainer>
          <LabelContainer color="teal">
            <Label>Specialist</Label>
            <ArrowDown size={17} />
          </LabelContainer>
          <CardTitle>Deep Skills</CardTitle>
        </TitleContainer>
        <AnimatedSkillsBar />
        <TitleContainer>
          <CardTitle>Broad Knowledge</CardTitle>
          <LabelContainer color="blue">
            <Label>Generalist</Label>
            <ArrowRight size={17} />
          </LabelContainer>
        </TitleContainer>
      </SkillsLayout>
      <ProductRolesLayout>
        <TitleContainer>
          <LabelContainer color="red">
            <Label>Product Roles</Label>
            <ArrowDown size={17} />
          </LabelContainer>
          <CardTitle>Hats I Wear</CardTitle>
        </TitleContainer>
        <CarouselExample />
      </ProductRolesLayout>
    </WidgetContainer>
  );
};