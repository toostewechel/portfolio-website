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

const Link = styled("a", {
  gridArea: "bp",
});

const WidgetContainer = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-07",
  width: "100%",
  padding: "$spacing-05",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
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
      crimson: {
        background:
          "linear-gradient(166.69deg, rgba(249, 229, 249, 0.75) 3.84%, #FCE5F0 90.43%)",
        border: "1px solid $crimson6",
      },
    },
  },

  "& > img": {
    transform: "translateY(4px)",
  },
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
    labelColor: {
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
  color: "$olive11",
  padding: "$spacing-03",
  transition: "background 200ms ease-in",
  background: "linear-gradient(135deg, #F3F5F3 0%, #DBDDDB 100%)",
  boxShadow:
    "-1px 1px 2px rgba(173, 175, 173, 0.2), 1px -1px 2px rgba(173, 175, 173, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(173, 175, 173, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(173, 175, 173, 0.5)",
});

const DateLabel = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontFamily: "$mono",
  fontWeight: "$medium",
});

interface Props {
  labelColor: "blue" | "red" | "teal" | "gray";
  color: string;
  imageSrc: string;
  title: string;
  description: string;
  datePosted: string;
  href: string;
}

export const Blogpost = ({
  color,
  imageSrc,
  title,
  description,
  datePosted,
  href,
}: Props) => {
  return (
    <Link href={href}>
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
          <LabelContainer labelColor={color}>
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
    </Link>
  );
};
