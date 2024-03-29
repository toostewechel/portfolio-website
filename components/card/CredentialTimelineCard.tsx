import React from "react";
import { styled } from "../../stitches.config.js";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Tag } from "../tag/Tag";
import { MapPin, CalendarDays, Download } from "lucide-react";
import {
  Provider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/Tooltip.js";
import Image from "next/image";

const Container = styled(motion.div, {
  margin: 0,
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  willChange: "all",
  padding: "$spacing-05",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  cursor: "pointer",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",

  "@bp2": {
    m: "$none $spacing-03 $spacing-03 $spacing-03",
  },
  "&:focus": {},
});

const BackgroundPattern = styled("img", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  width: "264px",
  height: "264px",
  opacity: 0.9,
  zIndex: -1,
  variants: {
    position: {
      topRight: {
        position: "absolute",
        top: -132,
        right: -132,
      },
      bottomRight: {
        position: "absolute",
        bottom: -132,
        right: -132,
      },
    },
  },
});

const AccentHighlight = styled("div", {
  position: "absolute",
  width: "48px",
  height: "14px",
  borderRadius: "6px",
  left: 16,
  top: -7,

  variants: {
    color: {
      blue: {
        background: "$blue9",
      },
      plum: {
        background: "$plum9",
      },
      crimson: {
        background: "$crimson9",
      },
      gray: {
        background: "$gray9",
      },
    },
  },

  "@bp2": {
    width: "64px",
  },
});

const CardHeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  mb: "$spacing-07",
});

const Logo = styled(Image, {
  size: "$7",
  borderRadius: "8px",
  boxShadow: "$xs",

  "@bp2": {
    size: "$8",
  },
});

const TitleContainer = styled("div", {
  mb: "$spacing-05",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$gray12",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 1,
  "-webkit-box-orient": "vertical",
});

const CardSubtitle = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$xs",
  color: "$mauve9",
  lineHeight: "$none",
});

const DescriptionContainer = styled("div", {
  pb: "$spacing-08",
});

const CardDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  lineHeight: "$base",
  color: "$mauve11",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 6,
  "-webkit-box-orient": "vertical",

  "@bp1": {
    fontSize: "$base",
  },
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "$spacing-04",
  p: "$spacing-04 $none",
  marginTop: "auto",
  alignItems: "baseline",
});

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-06",
  alignItems: "center",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve8",
  width: "17px",
  height: "17px",
  mr: "$spacing-02",

  "@bp1": {
    width: "20px",
    height: "20px",
    mr: "$spacing-02",
  },
});

const Label = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontFamily: "$default",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  color: "$mauve9",
  mt: "1px",
});

const IconLink = styled("a", {
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  color: "$mauve11",
  alignItems: "center",
  padding: "$spacing-03",
  background: "transparent",
  transition: "background 300ms ease-in",
  border: "2px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve2",
    border: "2px solid transparent",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve2",
    border: "2px solid $blue11",
    color: "$mauve12",
  },
});

type TagColors = "blue" | "plum" | "crimson" | "gray";

interface CredentialTimelineCardProps {
  gradient: string;
  href: string;
  accentColor: "blue" | "plum" | "crimson";
  logo: string;
  tagColor: TagColors;
  tagLabel: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  location: string;
  hasLink: boolean;
  publication: string;
  tooltipLabel: string;
}

function CredentialTimelineCard({
  href,
  accentColor,
  logo,
  tagColor,
  tagLabel,
  title,
  subtitle,
  description,
  duration,
  location,
  hasLink,
  publication,
  tooltipLabel,
}: CredentialTimelineCardProps) {
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

  return (
    <Container
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <BackgroundPattern
        src="/patterns/circular-background-pattern.svg"
        position="bottomRight"
      />
      <AccentHighlight color={accentColor} />
      <CardHeaderContainer>
        <Logo width={128} height={128} alt={title} src={logo} />
        <Tag size="sm" color={tagColor} label={tagLabel} />
      </CardHeaderContainer>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </TitleContainer>
      <DescriptionContainer>
        <CardDescription>{description}</CardDescription>
      </DescriptionContainer>
      <FooterContainer>
        <LabelContainer>
          <FlexWrapper>
            <DecorativeIcon>
              <CalendarDays />
            </DecorativeIcon>
            <Label>{duration}</Label>
          </FlexWrapper>
          <FlexWrapper>
            <DecorativeIcon>
              <MapPin />
            </DecorativeIcon>
            <Label>{location}</Label>
          </FlexWrapper>
        </LabelContainer>
        {hasLink && (
          <Provider>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconLink href={publication} target="_blank">
                  <Download />
                </IconLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{tooltipLabel}</TooltipContent>
            </Tooltip>
          </Provider>
        )}
      </FooterContainer>
    </Container>
  );
}

export default CredentialTimelineCard;
