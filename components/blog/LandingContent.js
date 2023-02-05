import { styled } from "../../stitches.config.js";
import Spacer from "../layouts/blocks/Spacer.js";
import Avatar from "../avatar/Avatar.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";
import { Calendar } from "lucide-react";

const LandingContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "768px",
  zIndex: "9",
  mb: "$spacing-12",
  mt: "$spacing-12",

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
  mr: "$spacing-01",

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
  pr: "$spacing-04",
  mt: "1px",

  "@bp1": {
    pr: "$spacing-05",
  },
});

export default function LandingContent({
  AvatarImage,
  AvatarLabel,
  AvatarDescription,
  HeadingTitle,
  Description,
  DatePosted,
}) {
  return (
    <LandingContentWrapper>
      <Avatar
        src={AvatarImage}
        name={AvatarLabel}
        description={AvatarDescription}
      />
      <Spacer level={8} />
      <FlexWrapper>
        <DecorativeIcon>
          <Calendar />
        </DecorativeIcon>
        <Label>Posted: {DatePosted}</Label>
      </FlexWrapper>
      <Heading as="h1" level={2} color="dark" title={HeadingTitle} />
      <Paragraph>{Description}</Paragraph>
      <Button>Start Reading</Button>
    </LandingContentWrapper>
  );
}
