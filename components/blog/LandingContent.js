import { styled } from "../../stitches.config.js";
import Avatar from "../avatar/Avatar";
import Paragraph from "../typography/Paragraph.js";
import { Calendar } from "lucide-react";

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "680px",
  zIndex: "9",
  mb: "$spacing-12",
  mt: "$spacing-10",

  "@bp4": {
    m: 0,
    pr: "$spacing-10",
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

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
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
  ml: "$spacing-01",

  "@bp1": {
    width: "20px",
    height: "20px",
    mr: "$spacing-03",
    ml: "$spacing-01",
  },
});

const DateLabel = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontFamily: "$mono",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  color: "$mauve9",
  mt: "1px",

  "@bp1": {
    fontSize: "$sm",
    mt: "3px",
  },
});

const Spacer = styled("div", {
  p: "$spacing-05 $none",

  "@bp2": {
    p: "$spacing-08 $none",
  },
});

const BlogTitle = styled("h1", {
  fontSize: "$2xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$tight",
  color: "$mauve12",
  pt: "$spacing-06",
  pb: "$spacing-04",

  "@bp5": {
    fontSize: "$3xl",
  },
});

export default function LandingContent({
  avatarImage,
  avatarLabel,
  avatarDescription,
  blogTitle,
  blogDescription,
  datePosted,
  href,
}) {
  return (
    <ContentContainer>
      <Avatar
        src={avatarImage}
        name={avatarLabel}
        description={avatarDescription}
      />
      <Spacer />
      <FlexWrapper>
        <DecorativeIcon>
          <Calendar />
        </DecorativeIcon>
        <DateLabel>Posted at {datePosted}</DateLabel>
      </FlexWrapper>
      <BlogTitle>{blogTitle}</BlogTitle>
      <Paragraph>{blogDescription}</Paragraph>
      <Button href={href}>Start Reading</Button>
    </ContentContainer>
  );
}
