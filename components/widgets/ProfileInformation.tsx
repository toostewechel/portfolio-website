import React from "react";
import { styled } from "../../stitches.config.js";
import Image from "next/image";
import { Tag } from "../tag/Tag";
import Avatar from "../avatar/Avatar";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const LinkToButtonIcon = styled("div", {
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "$olive9",
  padding: "$spacing-03",
  transition:
    "transform 100ms ease-in, color 100ms ease-in, scale 100ms ease-in",
});

const WidgetContainer = styled(motion.div, {
  gridArea: "pfi",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-08",
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
  "&:focus": {
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
    top: -98,
    right: -98,
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
    height: "auto",
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
  flexDirection: "row",
  gap: "$spacing-04",
  alignItems: "center",
});

const CardTitle = styled("h2", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve12",
});

const Text = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  color: "$mauve11",
  fontSize: "$base",
});

const HireMeBadge = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  color: "$mauve11",
  fontSize: "$sm",
  lineHeight: "$none",

  "&:hover": {
    color: "$mauve12",
  },
});

const TagContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-04",
});

type RequiredProps = {
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
  href: string;
} & Partial<{
  hasJob: boolean;
  hasIcon: boolean;
  Icon: React.ReactNode;
}>;

export const ProfileInformation = ({
  tagLabel,
  tagColor,
  hasJob = true,
  hasIcon = false,
  Icon,
  href,
}: RequiredProps) => {
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
    <WidgetContainer
      whileHover={{ scale: 1.03 }}
      whileFocus={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <BackgroundPattern
        src="/patterns/circular-background-pattern.svg"
        alt="Decorative Background Pattern"
      />
      <ProfileDescriptionLayout>
        <LogoContainer>
          <Image
            src="/logo/snapshots-logo-square.png"
            alt="Snapshot Labs Logo"
            width={64}
            height={64}
          />
          <CardTitle>Read.Me</CardTitle>
        </LogoContainer>
        <Text>
          This site offers a fun and personal showcase. It gives a sneak peek
          into my life, interests, and offers a curated selection of my
          professional and side projects.
        </Text>
        <TagContainer>
          <Tag
            label={tagLabel}
            color={tagColor}
            hasIcon={hasIcon}
            Icon={Icon}
          />
          {!hasJob && <HireMeBadge>Hire me!</HireMeBadge>}
        </TagContainer>
      </ProfileDescriptionLayout>
      <ProfileMetaDataLayout>
        <LinkToButtonIcon role="presentation">
          <ArrowUpRight size={20} />
        </LinkToButtonIcon>
        <AvatarSocialsLayout>
          <Avatar
            src="/avatar/avatar-tom-oostewechel.png"
            name="Tom Oostewechel"
            description="Product Designer"
          />
        </AvatarSocialsLayout>
      </ProfileMetaDataLayout>
    </WidgetContainer>
  );
};
