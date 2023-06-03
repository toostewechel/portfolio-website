import { styled } from "../../stitches.config.js";
import { Tag } from "../tag/Tag";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";

const Container = styled(motion.div, {
  m: 0,
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  width: "100%",
  height: "100%",
  outline: 0,
  cursor: "pointer",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",

  "@bp2": {
    m: "$none $spacing-02 $spacing-02 $spacing-02",
  },
  "&:focus": {
    border: "1px solid $blue11",
  },
});

const ResponsiveImage = styled(Image, {
  maxWidth: "100%",
  height: "auto",
});

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  position: "absolute",
  borderRadius: "6px",
  boxShadow: "$small",
  background: "$mauveA9",
  top: 16,
  left: 16,
});

const IconSize = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$5",
});

const TitleContainer = styled("div", {
  borderRadius: "8px",
  background: "rgba(2,0,16, 0.70)",
  padding: "$spacing-05 $spacing-04",
  boxShadow: "$small",
  position: "relative",
  mr: "$spacing-04",
  ml: "$spacing-04",
  mt: "-42px",
  backdropFilter: "blur(4px)",
  webkitBackdropFilter: "blur(4px)",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$lg",
  mt: "$spacing-02",
  color: "$mauve2",
  textAlign: "center",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
});

const DescriptionContainer = styled("div", {
  padding: "$spacing-05",
});

const CardDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  color: "$mauve11",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 4,
  "-webkit-box-orient": "vertical",
});

const MetaInformationContainer = styled("div", {
  padding: "$spacing-02 $spacing-05 $spacing-05 $spacing-05",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  fontSize: "$xs",
  color: "$mauve10",
});

const FlexBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

type TagColors = "blue" | "plum" | "crimson";

interface BlogTimelineCardProps {
  href: string;
  language?: string[];
  image: string;
  title: string;
  description: string;
  meta: string;
  color: TagColors;
  category: string;
}

const BlogTimelineCard: FC<BlogTimelineCardProps> = ({
  href,
  language,
  image,
  title,
  description,
  meta,
  color,
  category,
}: BlogTimelineCardProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(href);
    }
  };

  const languageIconSrc =
    language && language[1] === "dutch" ? "/icons/gb.svg" : "/icons/nl.svg";

  const languageIconAlt = language && language[0];

  return (
    <Container
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon>
        <IconSize>
          {language && (
            <img
              style={{ width: "24px", height: "24px" }}
              src={languageIconSrc}
              alt={languageIconAlt}
            />
          )}
        </IconSize>
      </Icon>
      <ResponsiveImage width={760} height={600} alt={title} src={image} />
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <FlexBox>
        <DescriptionContainer>
          <CardDescription>{description}</CardDescription>
        </DescriptionContainer>
        <MetaInformationContainer>
          <MetaInformation>{meta}</MetaInformation>
          <Tag color={color} label={category} />
        </MetaInformationContainer>
      </FlexBox>
    </Container>
  );
};

BlogTimelineCard.defaultProps = {
  language: ["english", "dutch"],
};

export default BlogTimelineCard;
