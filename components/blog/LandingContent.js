import { styled } from "../../stitches.config.js";
import Avatar from "../avatar/Avatar.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";
import { Calendar } from "lucide-react";

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "768px",
  zIndex: "9",
  mb: "$spacing-12",
  mt: "$spacing-13",

  "@bp4": {
    m: 0,
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
    background: "linear-gradient(90deg, $violet11, $blue11)",
    color: "$mauveA12",
  },

  "@bp1": {
    fontSize: "$lg",
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
  p: "$spacing-06 $none",

  "@bp2": {
    p: "$spacing-08 $none",
  },
});

export default function LandingContent({
  avatarImage,
  avatarLabel,
  avatarDescription,
  blogTitle,
  blogDescription,
  datePosted,
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
      <Heading as="h1" level={2} color="dark" title={blogTitle} />
      <Paragraph>{blogDescription}</Paragraph>
      <Button>Start Reading</Button>
    </ContentContainer>
  );
}
