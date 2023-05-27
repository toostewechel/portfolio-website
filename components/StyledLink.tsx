import React from "react";
import { styled } from "../stitches.config.js";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const LinkContainer = styled(motion.a, {
  outline: 0,

  "&:focus": {
    boxShadow: "$small",
  },
  "&:active": {
    transform: "translateY(-1px)",
    transition: "transform 200ms ease-out, background 200ms ease-out",
    backgroundColor: "$gray4",
    boxShadow: "$xs",
  },
});

const Panel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "$spacing-03 $spacing-02",
  borderRadius: "6px",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",

  "@bp1": {
    padding: "$spacing-03",
  },
});

const FlexWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Logo = styled(Image, {
  width: "40px",
  height: "40px",
  borderRadius: "6px",
  mr: "$spacing-04",

  "@bp2": {
    size: "$8",
    mr: "$spacing-04",
  },
});

const FlexContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  lineHeight: "$none",

  "@bp4": {
    fontSize: "$xl",
  },
});

const Description = styled("p", {
  fontSize: "$xs",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve9",
  lineHeight: "$none",

  "@bp3": {
    fontSize: "$sm",
  },
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: "$spacing-03",
  color: "$mauve11",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-02",
});

interface StyledLinkProps {
  href: string;
  src: string;
  title: string;
  description: string;
}

function StyledLink({ href, src, title, description }: StyledLinkProps) {
  return (
    <LinkContainer
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
    >
      <Panel>
        <FlexWrapper>
          <Logo width={64} height={64} alt={title} src={src} />
          <FlexContainer>
            <Box>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Box>
          </FlexContainer>
        </FlexWrapper>
        <FlexContainer>
          <DecorativeIcon>
            <ExternalLink size={20} />
          </DecorativeIcon>
        </FlexContainer>
      </Panel>
    </LinkContainer>
  );
}

export default StyledLink;
