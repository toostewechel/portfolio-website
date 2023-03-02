import { styled } from "../../stitches.config.js";
import React from "react";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Inbox,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const WidgetContainer = styled(motion.div, {
  gridArea: "bp",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-07",
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

const ImageLayout = styled("div", {
  display: "flex",
  width: "100%",

  "@bp2": {
    width: "40%",
    justifyContent: "space-between",
  },
});

const BlogDetailsLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  width: "100%",

  "@bp2": {
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    gap: "$spacing-04",
  },
});

const ImageContainer = styled("div", {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  boxShadow: "$xs",
  overflow: "hidden",

  variants: {
    color: {
      teal: {
        background: "linear-gradient(149.31deg, #EEFADC 0%, #C7EBE5 100%)",
        border: "1px solid $teal6",
      },
    },
  },

  "& > img": {
    transform: "translateY(4px)",
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

const Text = styled("p", {
  fontFamily: "$default",
  color: "$mauve12",
  fontSize: "$base",
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
      gray: {
        color: "$gray9",
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

const DateLabel = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontFamily: "$mono",
  fontWeight: "$medium",
});

interface Props {
  color: string;
  imageSrc: string;
  title: string;
  description: string;
  datePosted: string;
}

export const Blogpost = ({
  color,
  imageSrc,
  title,
  description,
  datePosted,
}: Props) => {
  return (
    <WidgetContainer whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <LinkToButtonIcon>
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <ImageLayout>
        <ImageContainer color={color}>
          <Image
            src={imageSrc}
            layout="responsive"
            height="296"
            width="296"
            alt="Blogpost Cover Image"
          />
        </ImageContainer>
      </ImageLayout>
      <BlogDetailsLayout>
        <LabelContainer color={color}>
          <Label>Latest Blog Post</Label>
          <Inbox size={17} />
        </LabelContainer>
        <CardTitle>{title}</CardTitle>
        <Text>{description}</Text>
        <LabelContainer color="gray">
          <Calendar size={17} />
          <DateLabel>{datePosted}</DateLabel>
        </LabelContainer>
      </BlogDetailsLayout>
    </WidgetContainer>
  );
};
