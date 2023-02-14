import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";

const ChapterContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "720px",
  zIndex: "9",
  mb: "$spacing-12",
  mt: "$spacing-12",

  "@bp4": {
    m: 0,
    pr: "$spacing-04",
  },
});

const Button = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  padding: "$spacing-04 $spacing-05",
  background: "$mauve12",
  color: "$mauveA12",
  fontFamily: "$default",
  fontSize: "$base",
  fontWeight: "$medium",
  borderRadius: "6px",

  "&:hover": {
    background: "linear-gradient(90deg, $violet11, $blue11)",
    color: "$mauveA12",
  },

  "@bp1": {
    fontSize: "$lg",
  },
});

const ChapterNumber = styled("p", {
  fontFamily: "$header",
  fontWeight: "$black",
  fontSize: "132px",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$compact",

  variants: {
    color: {
      crimson: {
        textShadow:
          "1px 1px 2px rgba(196, 255, 255, 0.3), -2px -2px 2px rgba(86, 126, 119, 0.5)",
        color: "$crimson6",
      },
      teal: {
        textShadow:
          "1px 1px 2px rgba(196, 255, 255, 0.3), -2px -2px 2px rgba(86, 126, 119, 0.5)",
        color: "$teal6",
      },
    },
  },
});

export default function ChapterContent({
  accentColor,
  chapterTitle,
  chapterDescription,
  href,
}) {
  return (
    <ChapterContentWrapper>
      <ChapterNumber color={accentColor}>02</ChapterNumber>
      <Heading as="h2" level={2} color="dark" title={chapterTitle} />
      <Paragraph>{chapterDescription}</Paragraph>
      <Button href={href}>Read</Button>
    </ChapterContentWrapper>
  );
}
