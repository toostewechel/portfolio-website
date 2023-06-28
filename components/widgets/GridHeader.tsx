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
  fontSize: "$2xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$none",
  color: "$mauve12",
  mb: "0",

  "@bp3": {
    fontSize: "$3xl",
    lineHeight: "$none",
  },
  "@bp4": {
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
  fontSize: "$xs",
  textDecoration: "underline",

  "@bp3": {
    fontSize: "$base",
  },
});

export const GridHeader = () => {
  return (
    <HeaderContainer>
      <PageHeader>Widgets</PageHeader>
      <LabelContainer>
        <ArrowUpRight size={24} />
        <Label
          href="https://hub.docker.com/repository/docker/boonikad93/portfolio-website/general"
          target="_blank"
          rel="noopener noreferrer"
        >
          Version 1.0.1
        </Label>
      </LabelContainer>
    </HeaderContainer>
  );
};
