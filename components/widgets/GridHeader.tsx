import { styled } from "../../stitches.config.js";
import { ArrowUpRight } from "lucide-react";

const HeaderContainer = styled("div", {
  gridArea: "gh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "end",
  width: "100%",
  mb: "-$spacing-03",
});

const PageHeader = styled("h1", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$none",
  color: "$mauve12",
  mb: "0",

  "@bp1": {
    fontSize: "$4xl",
    lineHeight: "$none",
  },
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",
  pb: "$spacing-03",

  variants: {
    color: {
      blue: {
        color: "$blue10",
      },
      red: {
        color: "$red10",
      },
      teal: {
        color: "$teal10",
      },
    },
  },
});

const Label = styled("a", {
  fontFamily: "$mono",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$base",
  textDecoration: "underline",
});

export const GridHeader = () => {
  return (
    <HeaderContainer>
      <PageHeader>Take a Peek</PageHeader>
      <LabelContainer>
        <ArrowUpRight size={24} />
        <Label
          href="https://hub.docker.com/repository/docker/boonikad93/portfolio-website/general"
          target="_blank"
          rel="noopener noreferrer"
        >
          Version 0.1.2
        </Label>
      </LabelContainer>
    </HeaderContainer>
  );
};
