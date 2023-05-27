import { styled } from "../../stitches.config.js";
import { motion } from "framer-motion";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "124px",
  width: "100%",
});

const BarAnchors = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "$spacing-02",
  justifyContent: "center",
  zIndex: 3,
  mb: "-6px",
});

const Circle = styled("div", {
  width: "10px",
  height: "10px",
  borderRadius: "5px",
  backgroundColor: "$olive3",
  border: "2px solid $mauve9",
  zIndex: 99,
});

const Bars = styled("div", {
  borderTop: "2px solid $olive6",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "$spacing-02",
  overflow: "hidden",
});

const Bar = styled(motion.div, {
  position: "relative",
  width: "10px",
  height: "124px",
  borderRadius: "5px",
  variants: {
    color: {
      blue: {
        background: "linear-gradient(-180deg, #369EFF 0%, #96C7F2 100%)",
      },
      green: {
        background: "linear-gradient(-180deg, #12A594 0%, #D7F2B0 100%)",
      },
      crimson: {
        background: "linear-gradient(-180deg, #E03177 0%, #EDADC8 52.22%)",
      },
    },
  },
});

export const AnimatedSkillsBar = ({}) => {
  return (
    <Container>
      <BarAnchors>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </BarAnchors>
      <Bars>
        <Bar
          color="blue"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-84, -74, -84] }}
        />
        <Bar
          color="green"
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [-24, -14, -24] }}
        />
        <Bar
          color="crimson"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-48, -38, -48] }}
        />
        <Bar
          color="blue"
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ y: [-84, -74, -84] }}
        />
        <Bar
          color="crimson"
          transition={{ repeat: Infinity, duration: 6 }}
          animate={{ y: [-48, -38, -48] }}
        />
        <Bar
          color="green"
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [-24, -14, -24] }}
        />
        <Bar
          color="blue"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-84, -74, -84] }}
        />
        <Bar
          color="blue"
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ y: [-84, -74, -84] }}
        />
        <Bar
          color="crimson"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-48, -38, -48] }}
        />
        <Bar
          color="green"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-34, -14, -34] }}
        />
        <Bar
          color="crimson"
          transition={{ repeat: Infinity, duration: 6 }}
          animate={{ y: [-48, -38, -48] }}
        />
        <Bar
          color="blue"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-84, -74, -84] }}
        />
        <Bar
          color="crimson"
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [-48, -38, -48] }}
        />
        <Bar
          color="green"
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [-14, -4, -14] }}
        />
        <Bar
          color="crimson"
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ y: [-48, -38, -48] }}
        />
        <Bar
          color="blue"
          transition={{ repeat: Infinity, duration: 4 }}
          animate={{ y: [-84, -74, -84] }}
        />
      </Bars>
    </Container>
  );
};
