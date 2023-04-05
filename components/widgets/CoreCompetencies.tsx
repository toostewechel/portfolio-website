import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowRight, ArrowDown, ArrowUpRight, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSkillsBar } from "./AnimatedSkillsBar";
import { ProductRolesCarousel } from "../carousel/ProductRolesCarousel";
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
  gridArea: "cc",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-09",
  width: "100%",
  padding: "$spacing-05",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "16px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "$medium",
    [`${LinkToButtonIcon}`]: {
      transform: "translateX(6px) translateY(-6px) scale(1.15)",
      color: "$crimson11",
    },
  },
  "&:focus": {
    boxShadow: "$medium",
    [`${LinkToButtonIcon}`]: {
      transform: "translateX(6px) translateY(-6px) scale(1.15)",
      color: "$crimson11",
    },
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

const CardTitle = styled("h2", {
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

export const CoreCompetencies = ({}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push("/readme#competencies");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push("/readme#competencies");
    }
  };
  return (
    <WidgetContainer
      whileHover={{ scale: 1.03 }}
      whileFocus={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <LinkToButtonIcon role="presentation">
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
          <CardTitle>Hats I Can Wear</CardTitle>
        </TitleContainer>
        <ProductRolesCarousel />
      </ProductRolesLayout>
    </WidgetContainer>
  );
};
