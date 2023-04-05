import { useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";
import CharacterTraitsAccordion from "../accordion/CharacterTraitsAccordion.js";
import CollapsibleContent from "../home/collapsible/Collapsible.js";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ArrowUpRight } from "lucide-react";

const LinkToButtonIcon = styled("div", {
  position: "absolute",
  top: 12,
  right: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "$olive9",
  padding: "$spacing-03",
  transition:
    "transform 100ms ease-in, color 100ms ease-in, scale 100ms ease-in",
});

const LinkLabel = styled("p", {
  position: "absolute",
  top: 14,
  right: 40,
  opacity: 0,
  fontSize: "$xs",
  fontFamily: "$default",
  fontWeight: "$medium",
  color: "$olive9",
  transition: "opacity 100ms ease-in, color 100ms ease-in",
});

// Layouts Component
const CardLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$spacing-04",
  width: "100%",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "$medium",

  "@bp2": {
    flexDirection: "row",
    padding: "$spacing-06",
  },
});
const CoverLayout = styled("div", {
  width: "100%",

  "@bp2": {
    width: "45%",
  },
});
const ContentLayout = styled("div", {
  width: "100%",

  "@bp2": {
    width: "55%",
  },
});

const CoverCardContainer = styled(motion.div, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-06",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "linear-gradient(149.31deg, #EEFADC 0%, #C7EBE5 100%)",
  borderRadius: "6px",
  width: "100%",
  height: "100%",
  padding: "$spacing-08 $spacing-04",
  boxShadow: "$medium",

  "&:hover": {
    boxShadow: "$medium",
    [`${LinkToButtonIcon}`]: {
      transform: "translateX(6px) translateY(-6px) scale(1.15)",
      color: "$teal10",
    },
    [`${LinkLabel}`]: {
      opacity: 1,
      color: "$teal10",
    },
  },

  "@bp2": {
    padding: "$spacing-10 $spacing-04",
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-07",
  justifyContent: "center",
  alignItems: "start",
  padding: "$spacing-06 $spacing-03",

  "@bp2": {
    padding: "$spacing-08",
    gap: "$spacing-08",
  },
});

const DescriptionBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "$spacing-02",
  width: "100%",
});

const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$xs",
  lineHeight: "$none",
  color: "$teal10",

  variants: {
    color: {
      dark: {
        color: "$mauve12",
      },
      light: {
        color: "$bronze3",
      },
    },
  },
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  letterSpacing: "$tracking-tight",
  lineHeight: "$none",
  mt: "$spacing-03",
  mb: "$spacing-04",
  fontSize: "$3xl",
  color: "$teal11",

  "@bp2": {
    fontSize: "$4xl",
  },
});

const ColoredLine = styled("div", {
  display: "flex",
  width: "132px",
  height: "6px",
  borderRadius: "6px",
  background: "$teal9",
});

const ImageContainer = styled(Image, {
  width: "240px",
  height: "240px",
  zIndex: "3",

  "@bp3": {
    width: "300px",
    height: "300px",
  },
  "@bp4": {
    width: "400px",
    height: "400px",
  },
});

const Title = styled("h4", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  letterSpacing: "$tracking-tighter",
  fontSize: "$xl",
  color: "$mauve12",

  variants: {
    color: {
      dark: {
        color: "$mauve12",
      },
      light: {
        color: "$mauve1",
      },
    },
  },
});

const SummaryContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-02",
});

const CardDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  color: "$mauve11",
  maxWidth: "380px",

  "@bp2": {
    fontSize: "$base",
  },
});

const Paragraph = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$xs",
  color: "$mauve12",
  maxWidth: "480px",

  "@bp2": {
    fontSize: "$sm",
  },
});

export const PersonalityCardCover = () => {
  const router = useRouter();
  const personalityTest =
    "https://www.16personalities.com/free-personality-test";

  return (
    <CoverCardContainer
      role="link"
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => router.push(personalityTest)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(personalityTest);
        }
      }}
    >
      <LinkLabel>Personality Test</LinkLabel>
      <LinkToButtonIcon role="presentation">
        <ArrowUpRight size={20} />
      </LinkToButtonIcon>
      <TitleContainer>
        <Label color="dark">My Personality</Label>
        <CardTitle>Advocate</CardTitle>
        <ColoredLine />
      </TitleContainer>
      <ImageContainer width={400} height={400} src="/readme/advocate.png" />
      <SummaryContainer>
        <Title color="dark">Summary</Title>
        <CardDescription>
          Advocates are Introverted, Intuitive, Feeling, Judging and Assertive.
          They approach life with thoughtfulness and imagination, guided by
          their principled version of humanism.
        </CardDescription>
      </SummaryContainer>
    </CoverCardContainer>
  );
};
export const PersonalityCardContent = () => (
  <ContentContainer>
    <DescriptionBox>
      <Label>My Strategy</Label>
      <Title>Confident Individualist</Title>
      <Paragraph>
        Prefers doing things alone, choosing to rely on their own skills and
        instincts instead of seeking contact with other people. They know what
        they are good at.
      </Paragraph>
    </DescriptionBox>
    <DescriptionBox>
      <Label>My Role</Label>
      <Title>Diplomat</Title>
      <Paragraph>
        Prefers working collaboratively rather than competing with their peers.
        Understands others and themselves. Imaginative and empathic, often a
        harmoniser in group settings.
      </Paragraph>
    </DescriptionBox>
    <DescriptionBox>
      <Label>My Character</Label>
      <Title>Traits</Title>
      <CharacterTraitsAccordion />
    </DescriptionBox>
  </ContentContainer>
);

export default function PersonalityCard() {
  const [bp2, setBp2] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    setBp2(mediaQuery.matches);

    const listener = () => {
      setBp2(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <CardLayout>
      <CoverLayout>
        <PersonalityCardCover />
      </CoverLayout>
      <ContentLayout>
        {bp2 ? (
          <PersonalityCardContent />
        ) : (
          <CollapsibleContent>
            <PersonalityCardContent />
          </CollapsibleContent>
        )}
      </ContentLayout>
    </CardLayout>
  );
}
