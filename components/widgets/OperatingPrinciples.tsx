import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Tag } from "../tag/Tag";
import { useRouter } from "next/router";

const WidgetContainer = styled(motion.div, {
  gridArea: "col",
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
    boxShadow: "$medium",
  },
});

const BackgroundPattern = styled("img", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  width: "264px",
  height: "264px",
  opacity: 0.15,
  zIndex: 1,
  bottom: -96,
  right: -96,
});

const LinkToButtonIcon = styled("a", {
  position: "absolute",
  bottom: 16,
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

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-03",
  width: "100%",
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$sm",
  color: "$teal3",
});

const Text = styled("p", {
  fontFamily: "$default",
  color: "$mauve2",
  fontSize: "$base",
});

const CardTitle = styled("h3", {
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

const TagGroup = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-03",
  alignItems: "center",
  mt: "$spacing-05",
});

export const OperatingPrinciples = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push("/readme/#collaboration");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push("/readme/#collaboration");
    }
  };
  return (
    <WidgetContainer
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <BackgroundPattern src="/patterns/circular-background-pattern.svg" />
      <LinkToButtonIcon>
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <ContentContainer>
        <Label>Collaboration</Label>
        <CardTitle>Operating Principles</CardTitle>
        <Text>
          If we work together, there are a few ways you can utilise my strengths
          and consider my preferences and peculiarities
        </Text>
        <TagGroup>
          <Tag label="Tips" color="teal" hasIcon={false} size="sm" />
          <Tag label="Pitfalls" color="crimson" hasIcon={false} size="sm" />
          <Tag label="Preferences" color="violet" hasIcon={false} size="sm" />
        </TagGroup>
      </ContentContainer>
    </WidgetContainer>
  );
};
