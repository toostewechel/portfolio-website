import { styled } from "../../stitches.config.js";
import ProfileCard from "../card/ProfileCard";
import MenuItem from "../home/profilecard/MenuItem";
import { ArrowUpRight } from "lucide-react";

const StyledHeading = styled("h1", {
  fontFamily: "$header",
  color: "$mauve12",
  margin: 0,
  fontSize: "$3xl",
  fontWeight: "$black",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$none",

  "@bp4": {
    fontSize: "$4xl",
  },
  "@bp6": {
    fontSize: "$5xl",
  },
});

const Description = styled("p", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
  maxWidth: "720px",

  "@bp1": {
    fontSize: "$bodyLarge",
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  gap: "$spacing-09",
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

const ContentBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-03",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",
  pb: "$spacing-03",
});

const Label = styled("a", {
  fontFamily: "$mono",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$base",
  textDecoration: "underline",
});

const ProfileCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "$spacing-04",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",
  borderRadius: "16px",
  width: "100%",

  "@bp1": {
    width: "100%",
    flexDirection: "row",
  },
});

const ProfileCardIndex = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$spacing-03 $none $spacing-03 $spacing-04",
  gap: "$spacing-02",

  "@bp1": {
    display: "flex",
  },
});

const IndexTitle = styled("p", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  lineHeight: "$compact",
  color: "$mauve12",
});

interface LandingContentProps {
  pageTitle: string;
  pageDescription: string;
  dateUpdated: string;
}

export default function LandingContent({
  pageTitle,
  pageDescription,
  dateUpdated,
}: LandingContentProps) {
  return (
    <ContentContainer>
      <ContentBlock>
        <StyledHeading>{pageTitle}</StyledHeading>
        <Description>{pageDescription}</Description>
      </ContentBlock>
      <ProfileCardContainer>
        <ProfileCard />
        <ProfileCardIndex>
          <IndexTitle>Index</IndexTitle>
          <MenuItem label="Values & Strengths" href="#core-values" />
          <MenuItem label="Personality" href="#personality" />
          <MenuItem label="Competencies" href="" />
          <MenuItem label="Collaboration" href="" />
          <MenuItem label="Communication" href="" />
        </ProfileCardIndex>
      </ProfileCardContainer>
      <LabelContainer>
        <ArrowUpRight size={24} />
        <Label>Last updated {dateUpdated}</Label>
      </LabelContainer>
    </ContentContainer>
  );
}
