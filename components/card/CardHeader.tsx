import React from "react";
import { styled } from "../../stitches.config.js";

const Container = styled("div", {
  m: 0,
  display: "flex",
  width: "100%",
  height: "40px",
  p: "$spacing-05 0",
  alignItems: "center",
  background: "transparent",
  gap: "12px",

  "@bp2": {
    m: "$none $spacing-03",
  },

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
  height: "4px",
  background: "$olive5",
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
        backgroundColor: "$blue5",
      },
      plum: {
        backgroundColor: "$plum5",
      },
      crimson: {
        backgroundColor: "$crimson5",
      },
      gray: {
        backgroundColor: "$gray5",
      },
      bronze: {
        backgroundColor: "$bronze5",
      },
      teal: {
        backgroundColor: "$teal5",
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
      gray: {
        background: "$gray11",
      },
      bronze: {
        background: "$bronze11",
      },
      teal: {
        background: "$teal11",
      },
    },
  },
});

interface CardHeaderProps {
  alignment: "left" | "right";
  hasYear: boolean;
  year: number;
  color: "blue" | "plum" | "crimson" | "gray" | "bronze" | "teal";
}

const CardHeader: React.FC<CardHeaderProps> = ({
  alignment,
  hasYear,
  year,
  color,
}) => {
  return (
    <>
      <Container alignment={alignment}>
        {hasYear && <YearLabel>{year}</YearLabel>}
        <Line />
      </Container>
      <PositionBox>
        <Attachment color={color}>
          <ColorCircle color={color} />
        </Attachment>
      </PositionBox>
    </>
  );
};

export default CardHeader;
