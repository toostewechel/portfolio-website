import React, { FC } from "react";
import { styled } from "../../stitches.config.js";

const TagContainer = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacing-03",
  borderRadius: "4px",
  padding: "$spacing-02 $spacing-03",
  backgroundColor: "$gray3",
  color: "$gray11",
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
        backgroundColor: "$gray4",
        border: "solid 2px $gray5",
      },
      violet: {
        color: "$violet11",
        backgroundColor: "$violet3",
        border: "solid 2px $violet5",
      },
      red: {
        color: "$red11",
        backgroundColor: "$red3",
        border: "solid 2px $red5",
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
    },
  },
});

const TagLabel = styled("p", {
  fontFamily: "$mono",
  fontWeight: "$medium",
  fontSize: "$xs",
  letterSpacing: "$tracking-wide",

  variants: {
    fontStyle: {
      uppercase: {
        textTransform: "uppercase",
      },
    },
  },
});

const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "15px",
  height: "15px",
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
    | "teal";
  label: string;
  fontStyle: undefined | "uppercase";
  hasIcon: boolean;
  Icon: any;
}

export const Tag = ({ color, label, fontStyle, hasIcon, Icon }: TagProps) => {
  return (
    <TagContainer color={color}>
      {hasIcon && <IconContainer>{Icon}</IconContainer>}
      <TagLabel fontStyle={fontStyle}>{label}</TagLabel>
    </TagContainer>
  );
};
