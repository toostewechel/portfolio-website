import { styled } from "../../stitches.config.js";

const TagContainer = styled("div", {
  display: "inline-flex",
  borderRadius: "8px",
  padding: "$spacing-02 $spacing-05",
  backgroundColor: "$gray3",
  color: "$gray11",
  flexShrink: 0,
  flexGrow: 0,

  variants: {
    color: {
      blue: {
        color: "$blue11",
        backgroundColor: "$blue3",
      },
      plum: {
        color: "$plum11",
        backgroundColor: "$plum3",
      },
      crimson: {
        color: "$crimson11",
        backgroundColor: "$crimson3",
      },
    },
  },
});

const TagLabel = styled("p", {
  fontFamily: "$default",
  fontWeight: "$semi-bold",
  letterSpacing: "$tracking-tight",
});

function Tag(props) {
  return (
    <TagContainer color={props.color}>
      <TagLabel>{props.label}</TagLabel>
    </TagContainer>
  );
}

export default Tag;
