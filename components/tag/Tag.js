import { styled } from "../../stitches.config.js";

const TagContainer = styled("div", {
  display: "inline-flex",
  borderRadius: "6px",
  padding: "$spacing-02 $spacing-04",
  backgroundColor: "$gray3",
  color: "$gray11",
  flexShrink: 0,
  flexGrow: 0,

  variants: {
    color: {
      blue: {
        color: "$blue11",
        backgroundColor: "$blue3",
        border: "solid 2px $blue5",
      },
      plum: {
        color: "$plum11",
        backgroundColor: "$plum3",
        border: "solid 2px $plum5",
      },
      crimson: {
        color: "$crimson11",
        backgroundColor: "$crimson3",
        border: "solid 2px $crimson5",
      },
      gray: {
        color: "$gray11",
        backgroundColor: "$gray4",
        border: "solid 2px $gray5",
      },
      violet: {
        color: "$violet11",
        backgroundColor: "$violet3",
        border: "solid 2px $violet5",
      },
    },
  },
});

const TagLabel = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "$tracking-wider",
});

function Tag(props) {
  return (
    <TagContainer color={props.color}>
      <TagLabel>{props.label}</TagLabel>
    </TagContainer>
  );
}

export default Tag;
