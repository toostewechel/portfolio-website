import React from "react";
import { styled } from "../../stitches.config.js";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "$spacing-06",
  borderRadius: "6px",
  backgroundColor: "white",
  boxShadow:
    "-5px 5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(221, 221, 221, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(221, 221, 221, 0.5)",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
  pb: "$spacing-03",
});

const LabelIcon = styled("div", {
  width: "12px",
  height: "12px",
  borderRadius: "2px",

  variants: {
    color: {
      plum: {
        backgroundColor: "$plum11",
      },
      blue: {
        backgroundColor: "$blue11",
      },
      crimson: {
        backgroundColor: "$crimson11",
      },
      violet: {
        backgroundColor: "$violet11",
      },
      teal: {
        backgroundColor: "$teal11",
      },
      cyan: {
        backgroundColor: "$cyan11",
      },
    },
  },
});

const Label = styled("p", {
  display: "flex",
  fontSize: "$xs",
  fontWeight: "$medium",
  fontFamily: "$default",

  variants: {
    color: {
      plum: {
        color: "$plum11",
      },
      blue: {
        color: "$blue11",
      },
      crimson: {
        color: "$crimson11",
      },
      violet: {
        color: "$violet11",
      },
      teal: {
        color: "$teal11",
      },
      cyan: {
        color: "$cyan11",
      },
    },
  },
});

const ValueTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: 0,

  "@bp3": {
    fontSize: "$2xl",
    mb: "$spacing-04",
  },
  "@bp4": {
    fontSize: "$2xl",
    mb: "$spacing-03",
  },
});

const ValueDescriptionBox = styled("div", {
  mt: "$spacing-03",
});

const ValueDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",

  "@bp2": {
    fontSize: "$sm",
  },
  "@bp3": {
    fontSize: "$sm",
  },
});

type ColorVariants = "plum" | "blue" | "crimson" | "violet" | "teal" | "cyan";

interface CoreValueCardProps {
  children: React.ReactNode;
  color: ColorVariants;
  label: string;
  title: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({
  children,
  color,
  label,
  title,
}) => {
  return (
    <Container>
      <LabelContainer>
        <LabelIcon color={color} />
        <Label color={color}>{label}</Label>
      </LabelContainer>
      <ValueTitle>{title}</ValueTitle>
      <ValueDescriptionBox>
        <ValueDescription>{children}</ValueDescription>
      </ValueDescriptionBox>
    </Container>
  );
};

export default CoreValueCard;
