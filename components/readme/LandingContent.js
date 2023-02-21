import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";
import { Calendar } from "lucide-react";
import ProfileCard from "../home/profilecard/ProfileCard.js";
import MenuItem from "../home/profilecard/MenuItem.js";

const StyledHeading = styled("h1", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  color: "$mauve12",
  m: 0,
  fontSize: "$3xl",
  fontWeight: "$black",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$tight",
  mb: "$spacing-04",

  "@bp4": {
    fontSize: "$4xl",
  },
  "@bp6": {
    fontSize: "$5xl",
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "640px",
  zIndex: "9",
  mb: "$spacing-12",
  mt: "$spacing-13",

  "@bp4": {
    m: 0,
    pr: "$spacing-05",
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
    p: "$spacing-06 $none",
  },
});

const ProfileCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  mt: "$spacing-04",
  mb: "$spacing-08",
  padding: "$spacing-04",
  background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",
  borderRadius: "6px",
  boxShadow: "$small",
  width: "100%",

  "@bp1": {
    width: "auto",
    flexDirection: "row",
  },
});

const ProfileCardIndex = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$spacing-04",
  gap: "$spacing-02",

  "@bp1": {
    display: "flex",
  },
});

const IndexTitle = styled("p", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve6",
});

export default function LandingContent({
  pageTitle,
  pageDescription,
  dateUpdated,
}) {
  return (
    <ContentContainer>
      <StyledHeading>{pageTitle}</StyledHeading>
      <Paragraph>{pageDescription}</Paragraph>
      <ProfileCardContainer>
        <ProfileCard />
        <ProfileCardIndex>
          <IndexTitle>Index</IndexTitle>
          <MenuItem label="Values & Strengths" />
          <MenuItem label="Personality" />
          <MenuItem label="Competencies" />
          <MenuItem label="Collaboration" />
          <MenuItem label="Communication" />
        </ProfileCardIndex>
      </ProfileCardContainer>
      <FlexWrapper>
        <DecorativeIcon>
          <Calendar />
        </DecorativeIcon>
        <DateLabel>Last updated {dateUpdated}</DateLabel>
      </FlexWrapper>
    </ContentContainer>
  );
}
