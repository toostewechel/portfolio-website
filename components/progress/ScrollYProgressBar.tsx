import { styled } from "../../stitches.config.js";
import { motion, useScroll } from "framer-motion";

const StyledProgressBar = styled(motion.div, {
  display: "flex",
  height: "18px",
  transformOrigin: "0%",
  width: "100%",
  borderRadius: "6px",

  variants: {
    gradient: {
      blue: {
        background: "linear-gradient(90deg, $blue9, $blue11)",
      },
      plum: {
        background: "linear-gradient(90deg, $plum9, $plum11)",
      },
      crimson: {
        background: "linear-gradient(90deg, $crimson9, $crimson11)",
      },
      teal: {
        background: "linear-gradient(90deg, $teal9, $teal11)",
      },
    },
  },
});

interface Props {
  gradient: string;
}

export const ScrollYProgressBar = ({ gradient }: Props) => {
  const { scrollYProgress } = useScroll();

  return (
    <StyledProgressBar
      gradient={gradient}
      style={{ scaleX: scrollYProgress }}
    />
  );
};
