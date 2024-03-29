import { styled } from "../../../stitches.config.js";
import { ArrowRight } from "lucide-react";
import React, { HTMLProps } from "react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  variants: {
    alignment: {
      center: {
        alignItems: "start",
        textAlign: "left",

        "@bp1": {
          alignItems: "center",
          textAlign: "center",
        },
      },
      left: {
        alignItems: "start",
        textAlign: "left",
      },
    },
  },
});

const Heading = styled("h1", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  lineHeight: "$tight",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-03",
  },
});

const Description = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$olive12",
  maxWidth: "720px",

  "@bp1": {
    fontSize: "$lg",
  },
  "@bp2": {
    fontSize: "$bodyLarge",
  },
});

const Button = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  background: "white",
  color: "$violet10",
  padding: "$spacing-04 $spacing-05",
  fontFamily: "$default",
  fontSize: "$base",
  fontWeight: "$medium",
  borderRadius: "6px",
  mt: "$spacing-06",

  "&:hover": {
    transition: "transform 300ms ease-out, background 300ms ease-out",
    backgroundColor: "$gray2",
    color: "$violet11",
  },

  "&:active": {
    backgroundColor: "$gray3",
  },

  "@bp1": {
    fontSize: "$lg",
  },
});

interface ContentBlockProps {
  textAlignment: "left" | "center";
  title: string;
  description: string;
  hasButton?: boolean;
  buttonLabel?: string;
  as?: "h1" | "h2" | "h3";
}

function ContentBlock({
  textAlignment,
  title,
  description,
  hasButton,
  buttonLabel,
  as = "h1",
}: ContentBlockProps) {
  return (
    <Container alignment={textAlignment}>
      <Heading as={as}>{title}</Heading>
      <Description>{description}</Description>
      {hasButton ? (
        <Button>
          {buttonLabel}
          <span style={{ marginLeft: "8px" }}>
            <ArrowRight size={24} />
          </span>
        </Button>
      ) : null}
    </Container>
  );
}

export default ContentBlock;
