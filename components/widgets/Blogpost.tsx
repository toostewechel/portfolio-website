import { styled } from "../../stitches.config.js";
import React from "react";
import { ArrowUpRight, Inbox, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const LinkToButtonIcon = styled("div", {
  position: "absolute",
  top: 24,
  right: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "$olive9",
  padding: "$spacing-03",
  transition:
    "transform 100ms ease-in, color 100ms ease-in, scale 100ms ease-in",

  "@bp2": {
    top: 16,
    right: 16,
  },
});

const WidgetContainer = styled(motion.div, {
  gridArea: "bp",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-06",
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
  gap: "$spacing-04",

  "&:last-child": {
    marginBottom: "$spacing-05",
  },

  "@bp2": {
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    gap: "$spacing-04",

    "&:last-child": {
      marginBottom: "$none",
    },
  },
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
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

const CoverImage = styled(Image, {
  width: "264px",
  height: "100%",

  "@bp1": {
    width: "440px",
    height: "516px",
  },

  "@bp2": {
    width: "220px",
    height: "258px",
  },
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$none",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve12",
});

const Text = styled("p", {
  fontFamily: "$default",
  color: "$mauve11",
  fontSize: "$sm",
  lineHeight: "$default",
  marginBottom: "$spacing-03",

  "@bp1": {
    fontSize: "$base",
  },
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
      crimson: {
        color: "$crimson10",
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

const DateLabel = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontFamily: "$mono",
  fontWeight: "$medium",
  lineHeight: "$none",
});

interface Props {
  labelColor: "blue" | "red" | "teal" | "gray";
  color: "teal" | "crimson";
  imageSrc: string;
  title: string;
  description: string;
  datePosted: string;
  href: string;
}

export const Blogpost = ({
  labelColor,
  color,
  imageSrc,
  title,
  description,
  datePosted,
  href,
}: Props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <WidgetContainer
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
    >
      <LinkToButtonIcon role="presentation">
        <ArrowUpRight size={22} />
      </LinkToButtonIcon>
      <ImageLayout>
        <ImageContainer color={color}>
          <CoverImage
            src={imageSrc}
            height="440"
            width="516"
            alt="Blogpost Cover Image"
          />
        </ImageContainer>
      </ImageLayout>
      <BlogDetailsLayout>
        <LabelContainer color={labelColor}>
          <Inbox size={17} />
          <Label>Latest Blog Post</Label>
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
