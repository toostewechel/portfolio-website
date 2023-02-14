import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";

const ChapterContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "768px",
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
  color: "$crimson6",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$compact",
  textShadow:
    "2px 2px 2px rgba(255, 236, 255, 0.3), -2px -2px 3px rgba(198, 160, 177, 0.75)",
});

export default function ChapterContent({
  ChapterTitle,
  ChapterDescription,
  href,
}) {
  return (
    <ChapterContentWrapper>
      <ChapterNumber>02</ChapterNumber>
      <Heading as="h2" level={2} color="dark" title={ChapterTitle} />
      <Paragraph>{ChapterDescription}</Paragraph>
      <Button href={href}>Read</Button>
    </ChapterContentWrapper>
  );
}
