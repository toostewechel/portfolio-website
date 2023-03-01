import { styled } from "../../stitches.config.js";
import React from "react";
import Image from "next/image";
import { Tag } from "../tag/Tag";
import Avatar from "../avatar/Avatar.js";
import {
  ArrowUpRight,
  Twitter,
  Github,
  Linkedin,
  Smartphone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const WidgetContainer = styled(motion.div, {
  gridArea: "pfi",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-09",
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

const BackgroundPattern = styled("img", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  width: "264px",
  height: "264px",
  opacity: 0.9,
  zIndex: 1,
  bottom: -96,
  right: -96,

  "@bp2": {
    top: -96,
    right: -96,
  },
});

const ProfileDescriptionLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-05",
  width: "100%",
  zIndex: "2",

  "@bp2": {
    width: "50%",
    justifyContent: "space-between",
  },
});

const ProfileMetaDataLayout = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "space-between",
  alignItems: "start",
  width: "100%",
  height: "100%",
  zIndex: "2",

  "@bp2": {
    width: "50%",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "end",
  },
});

const AvatarSocialsLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  gap: "$spacing-05",
});

const LogoContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "64px",
});

const Text = styled("p", {
  fontFamily: "$default",
  color: "$mauve12",
  fontSize: "$base",
});

const HireMeLink = styled("a", {
  fontFamily: "$default",
  fontWeight: "$medium",
  color: "$red10",
  fontSize: "$sm",
});

const TagContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-04",
});

const SocialButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
});

const LinkToButtonIcon = styled("a", {
  alignSelf: "flex-end",
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

const SocialButtonIcon = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  color: "$olive9",
  padding: "$spacing-03",
  transition: "background 200ms ease-in",
  background: "transparent",
  border: "1px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "all 200ms ease-out",
    backgroundColor: "$olive3",
    border: "1px solid $olive6",
    color: "$olive12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve3",
    border: "1px solid $blue11",
    color: "$mauve12",
  },
});

interface Props {
  tagLabel: string;
  tagColor:
    | "blue"
    | "plum"
    | "crimson"
    | "gray"
    | "violet"
    | "red"
    | "olive"
    | "teal";
  hasJob: boolean;
  Icon: any;
}

export const ProfileInformation = ({
  tagLabel,
  tagColor,
  hasJob,
  hasIcon,
  Icon,
}: Props) => {
  return (
    <WidgetContainer whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <BackgroundPattern src="/patterns/circular-background-pattern.svg" />
      <ProfileDescriptionLayout>
        <LogoContainer>
          <Image
            src="/widgets/snapshot-logo.png"
            alt="Snapshot Labs Logo"
            width={214}
            height={64}
          />
        </LogoContainer>
        <Text>
          This site is meant as a fun, personal showcase and provides peeks into
          my life, my interests and some of my work, both professional and side
          projects!
        </Text>
        <TagContainer>
          <Tag
            label={tagLabel}
            color={tagColor}
            hasIcon={hasIcon}
            Icon={Icon}
          />
          {hasJob ? null : <HireMeLink>Hire me!</HireMeLink>}
        </TagContainer>
      </ProfileDescriptionLayout>
      <ProfileMetaDataLayout>
        <LinkToButtonIcon>
          <ArrowUpRight size={20} />
        </LinkToButtonIcon>
        <AvatarSocialsLayout>
          <Avatar
            src="/avatar/avatar-tom-oostewechel.png"
            name="Tom Oostewechel"
            description="Product Engineer"
          />
          <SocialButtonContainer>
            <SocialButtonIcon
              href="https://twitter.com/boonikad93"
              target="_blank"
            >
              <Twitter size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
              target="_blank"
            >
              <Linkedin size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://github.com/toostewechel"
              target="_blank"
            >
              <Github size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://github.com/toostewechel"
              target="_blank"
            >
              <Mail size={20} />
            </SocialButtonIcon>
            <SocialButtonIcon
              href="https://github.com/toostewechel"
              target="_blank"
            >
              <Smartphone size={20} />
            </SocialButtonIcon>
          </SocialButtonContainer>
        </AvatarSocialsLayout>
      </ProfileMetaDataLayout>
    </WidgetContainer>
  );
};
