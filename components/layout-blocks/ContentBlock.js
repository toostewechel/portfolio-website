import { styled } from "../../stitches.config.js";

const Heading = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const Description = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",

  "@bp1": {
    fontSize: "$lg",
  },
});

function ContentBlock(props) {
  return (
    <div>
      <Heading>{props.heading}</Heading>
      <Description>{props.description}</Description>
    </div>
  );
}

export default ContentBlock;
