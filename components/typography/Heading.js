import { styled } from "../../stitches.config.js";

const StyledHeading = styled("h1", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  color: "$mauve12",
  m: 0,

  variants: {
    level: {
      1: {
        fontSize: "$5xl",
        fontWeight: "$extra-bold",
        letterSpacing: "$tracking-tighter",
      },
      2: {
        fontSize: "$4xl",
        fontWeight: "$extra-bold",
        letterSpacing: "$tracking-tighter",
      },
      3: {
        fontSize: "$3xl",
        fontWeight: "$extra-bold",
        letterSpacing: "$tracking-tight",
      },
      4: {
        fontSize: "$2xl",
        fontWeight: "$semi-bold",
        letterSpacing: "$tracking-tight",
      },
      5: {
        fontSize: "$xl",
        fontWeight: "$semi-bold",
        letterSpacing: "$tracking-normal",
      },
    },
  },
});

function Heading(props) {
  return (
    <StyledHeading as={props.as} level={props.level}>
      {props.title}
    </StyledHeading>
  );
}

export default Heading;
