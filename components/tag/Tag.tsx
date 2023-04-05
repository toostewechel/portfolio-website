import React, { FC } from "react";
import { styled } from "../../stitches.config.js";

const TagContainer = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  padding: "$spacing-02 $spacing-03",
  gap: "$spacing-03",
  backgroundColor: "$gray3",
  color: "$gray11",
  fontSize: "$xs",
  flexShrink: 0,
  flexGrow: 0,

  variants: {
    color: {
      blue: {
        color: "$blue11",
        backgroundColor: "$blue3",
        border: "solid 2px $blue5",
      },
      plum: {
        color: "$plum11",
        backgroundColor: "$plum3",
        border: "solid 2px $plum5",
      },
      crimson: {
        color: "$crimson11",
        backgroundColor: "$crimson3",
        border: "solid 2px $crimson5",
      },
      gray: {
        color: "$gray11",
        backgroundColor: "$gray3",
        border: "solid 2px $gray5",
      },
      violet: {
        color: "$violet11",
        backgroundColor: "$violet3",
        border: "solid 2px $violet5",
      },
      red: {
        color: "$red1",
        backgroundColor: "$red11",
        border: "solid 2px $red10",
        padding: "$spacing-01 $spacing-02",
      },
      olive: {
        color: "$olive11",
        backgroundColor: "$olive3",
        border: "solid 2px $olive5",
      },
      teal: {
        color: "$teal11",
        backgroundColor: "$teal3",
        border: "solid 2px $teal5",
      },
      orange: {
        color: "$orange11",
        backgroundColor: "$orange3",
        border: "solid 2px $orange5",
      },
    },
    size: {
      sm: {
        padding: "$spacing-02 $spacing-02",
        gap: "$spacing-02",
        fontSize: "$xxs",
      },
    },
  },
});

const TagLabel = styled("p", {
  fontFamily: "$mono",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  lineHeight: "$none",

  variants: {
    fontStyle: {
      uppercase: {
        textTransform: "uppercase",
        lineHeight: "$none",
        mt: "$spacing-01",
      },
    },
  },
});

const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface TagProps {
  color:
    | "blue"
    | "plum"
    | "crimson"
    | "gray"
    | "violet"
    | "red"
    | "olive"
    | "teal"
    | "orange";
  label: string;
  size?: undefined | "sm";
  fontStyle?: undefined | "uppercase";
  hasIcon?: boolean;
  Icon?: any;
}

export const Tag = ({
  size,
  color,
  label,
  fontStyle,
  hasIcon,
  Icon,
}: TagProps) => {
  return (
    <TagContainer size={size} color={color}>
      {hasIcon && <IconContainer>{Icon}</IconContainer>}
      <TagLabel fontStyle={fontStyle}>{label}</TagLabel>
    </TagContainer>
  );
};
