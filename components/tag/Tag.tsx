import React, { FC } from 'react';
import { styled } from "../../stitches.config.js";

const TagContainer = styled("div", {
  display: "inline-flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: "$spacing-02",
  borderRadius: "4px",
  padding: "$spacing-02 $spacing-04",
  backgroundColor: "$gray3",
  color: "$gray11",
  flexShrink: 0,
  flexGrow: 0,

  variants: {
    accentColor: {
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
			}
		}
	}
});

const IconContainer = styled("div", {
	display: 'flex',
	alignItems: 'center',
	justifyContent: "center",
	width: "15px",
	height: "15px",
});

interface TagProps {
	accentColor: "blue" | "plum" | "crimson" | "gray" | "violet";
	label: string;
	fontStyle: undefined | "uppercase";
	hasIcon: boolean;
	Icon: any;
}


export const Tag = ({ accentColor, label, fontStyle, hasIcon, Icon  }: TagProps) => {
	return (
	  <TagContainer accentColor={accentColor}>
			{hasIcon && <IconContainer>{Icon}</IconContainer>}
			<TagLabel fontStyle={fontStyle}>{label}</TagLabel>
	  </TagContainer>
	);
}

