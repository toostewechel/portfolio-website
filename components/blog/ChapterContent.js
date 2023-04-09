import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";

const ChapterContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "720px",
  zIndex: "9",
  pt: "$spacing-10",
  pr: "$none",

  "@bp2": {
    pt: "$spacing-13",
  },

  "@bp4": {
    m: 0,
    pr: "$spacing-04",
    pt: "$none",
  },
});

const Button = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  padding: "$spacing-04 $spacing-05",
  background: "$mauve12",
  color: "$mauveA12",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$medium",
  borderRadius: "6px",

  "&:hover": {
    background: "linear-gradient(0deg, $mauve12, $mauve11)",
    color: "$mauveA12",
  },

  "@bp1": {
    fontSize: "$base",
    padding: "$spacing-04 $spacing-05",
  },
});

const ChapterNumber = styled("p", {
  fontFamily: "$header",
  fontWeight: "$black",
  fontSize: "116px",
  letterSpacing: "$tracking-tighter",
  lineHeight: 0,
  mb: "$spacing-09",

  variants: {
    color: {
      crimson: {
        textShadow:
          "1px 1px 2px rgba(255, 236, 255, 0.3), -1px -1px 2px rgba(198, 160, 177, 0.5)",
        color: "$crimson6",
      },
      teal: {
        textShadow:
          "1px 1px 2px rgba(196, 255, 255, 0.3), -2px -2px 2px rgba(86, 126, 119, 0.5)",
        color: "$teal6",
      },
      gray: {
        textShadow: "1px 1px 2px $slat12, -2px -2px 2px rgba(86, 126, 119, 1)",
        color: "$slate8",
      },
    },
  },

  "@bp4": {
    fontSize: "132px",
    mb: "$spacing-10",
  },
});

const ChapterTitle = styled("h2", {
  fontSize: "$2xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$tight",
  color: "$mauve12",
  pt: "$spacing-06",
  pb: "$spacing-04",

  "@bp4": {
    fontSize: "$3xl",
  },
  "@bp6": {
    fontSize: "$4xl",
  },
});

export default function ChapterContent({
  accentColor,
  chapterNumber,
  chapterTitle,
  chapterDescription,
  href,
}) {
  return (
    <ChapterContentWrapper>
      <ChapterNumber color={accentColor}>{chapterNumber}</ChapterNumber>
      <ChapterTitle>{chapterTitle}</ChapterTitle>
      <Paragraph>{chapterDescription}</Paragraph>
      <Button href={href}>Read</Button>
    </ChapterContentWrapper>
  );
}
