import { styled } from "../../../stitches.config.js";

const SkillTag = styled("div", {
  borderRadius: "4px",
  padding: "$spacing-03",
  margin: "$spacing-03 $none",
  variants: {
    color: {
      violet: {
        backgroundColor: "$violet3",
        borderLeft: "4px solid $violet11",
        color: "$violet11",
      },
      blue: {
        backgroundColor: "$blue3",
        borderLeft: "4px solid $blue11",
        color: "$blue11",
      },
    },
  },
});

const Label = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
});

function Skill(props) {
  return (
    <SkillTag color={props.backgroundColor}>
      <Label>{props.label}</Label>
    </SkillTag>
  );
}

export default Skill;
