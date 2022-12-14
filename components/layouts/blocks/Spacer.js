import { styled } from "../../../stitches.config.js";

const StyledSpacer = styled("div", {
  p: "$spacing-07 $none",

  variants: {
    level: {
      1: {
        p: "$spacing-01 $none",
      },
      2: {
        p: "$spacing-02 $none",
      },
      3: {
        p: "$spacing-03 $none",
      },
      4: {
        p: "$spacing-04 $none",
      },
      5: {
        p: "$spacing-05 $none",
      },
      6: {
        p: "$spacing-06 $none",
      },
      7: {
        p: "$spacing-07 $none",
      },
      8: {
        p: "$spacing-08 $none",
      },
      9: {
        p: "$spacing-09 $none",
      },
      10: {
        p: "$spacing-10 $none",
      },
      11: {
        p: "$spacing-11 $none",
      },
      12: {
        p: "$spacing-12 $none",
      },
      13: {
        p: "$spacing-13 $none",
      },
      14: {
        p: "$spacing-14 $none",
      }
    },
  },
});

function Spacer(props) {
  return <StyledSpacer level={props.level}>{props.children}</StyledSpacer>;
}

export default Spacer;
