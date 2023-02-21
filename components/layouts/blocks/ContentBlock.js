import { styled } from "../../../stitches.config.js";
import { ArrowRight } from "lucide-react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  ml: "$spacing-03",

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

const Heading = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "0",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
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

function ContentBlock({ textAlignment, title, description, hasButton, buttonLabel }) {
  return (
    <Container textAlignment={textAlignment}>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
      { hasButton ? (
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
