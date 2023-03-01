import { styled } from "../../stitches.config.js";
import { motion } from "framer-motion";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "116px",
  width: "100%",
	pr: "$spacing-09",
});

const BarAnchors = styled("div", {
	display: "flex",
	flexDirection: "row",
	width: "100%",
	gap: "$spacing-02",
	jusitfyContent: "center",
	zIndex: 3,
	mb: "-6px",
});

const Circle = styled("div", {
	width: "10px",
	height: "10px",
	borderRadius: "5px",
	backgroundColor: "white",
	border: "1px solid #000",
	zIndex: 99,
})

const Bars = styled("div", {
	borderTop: "1px solid $olive6",
  display: "flex",
  jusitfyContent: "center",
  width: "100%",
  gap: "$spacing-02",
  overflow: "hidden",
	backgroundColor: "white",
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
			}
		}
	}
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
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-84, -74, -84] }}
        />
				<Bar
					color="green"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [-24, -14, -24] }}
        />
				<Bar
					color="crimson"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-48, -38, -48] }}
        />
				<Bar
					color="blue"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-84, -74, -84] }}
        />
				<Bar
					color="crimson"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-48, -38, -48] }}
        />
				<Bar
					color="green"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [-24, -14, -24] }}
        />
				<Bar
					color="blue"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-84, -74, -84] }}
        />
				<Bar
					color="blue"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-84, -74, -84] }}
        />
				<Bar
					color="crimson"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-48, -38, -48] }}
        />
				<Bar
					color="green"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-24, -14, -24] }}
        />
				<Bar
					color="crimson"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-48, -38, -48] }}
        />
				<Bar
					color="blue"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-84, -74, -84] }}
        />
				<Bar
					color="crimson"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-48, -38, -48] }}
        />
				<Bar
					color="green"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-24, -14, -24] }}
        />
				<Bar
					color="crimson"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-48, -38, -48] }}
        />
				<Bar
					color="blue"
					initial={{ y: [-124]}}
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ y: [-84, -74, -84] }}
        />
      </Bars>
    </Container>
  );
};
