import { styled } from "../../stitches.config.js";

const Container = styled("div", {
  display: "flex",
  width: "100%",
  height: "40px",
  p: "$spacing-05 0",
  alignItems: "center",
  background: "white",
  gap: "12px",

  variants: {
    alignment: {
      left: {
        flexDirection: "row",
      },
      right: {
        flexDirection: "row-reverse",
      },
    },
  },
});

const YearLabel = styled("p", {
  fontFamily: "$default",
  fontWeight: "$semi-bold",
  color: "$mauve12",
});

const Line = styled("div", {
  height: "1px",
  background: "$gray6",
  width: "100%",
});

const PositionBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  marginTop: "-29px",
});

const Attachment = styled("div", {
  padding: "2px",
  height: "40px",
  backgroundColor: "$crimson5",
  display: "flex",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  justifyContent: "center",

  variants: {
    color: {
      blue: {
        backgroundColor: "$blue3",
      },
      plum: {
        backgroundColor: "$plum3",
      },
      crimson: {
        backgroundColor: "$crimson3",
      },
    },
  },
});

const ColorCircle = styled("div", {
  width: "12px",
  height: "12px",
  borderRadius: "100%",

  variants: {
    color: {
      blue: {
        background: "$blue11",
      },
      plum: {
        background: "$plum11",
      },
      crimson: {
        background: "$crimson11",
      },
    },
  },
});

function CardHeader(props) {
  return (
    <>
      <Container alignment={props.alignment}>
        {props.hasYear && <YearLabel>{props.year}</YearLabel>}
        <Line />
      </Container>
      <PositionBox>
        <Attachment color={props.color}>
          <ColorCircle color={props.color} />
        </Attachment>
      </PositionBox>
    </>
  );
}

export default CardHeader;
