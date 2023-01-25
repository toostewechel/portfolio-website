import { styled } from "../../stitches.config.js";

const AvatarContainer = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  background: "$violet4",
  border: "2px solid $violet5",
  padding: "$spacing-01",
});

const StyledAvatar = styled("img", {
  size: "$7",

  variants: {
    size: {
      4: { size: "$4" },
      5: { size: "$5" },
      6: { size: "$6" },
      7: { width: "40px", height: "40px" },
      8: { size: "$8" },
      9: { size: "$9" },
      10: { size: "$10" },
    },
  },
});

const StatusBadge = styled("div", {
  position: "absolute",
  width: "16px",
  height: "16px",
  background: "$gray8",
  border: "2px solid white",
  borderRadius: "100%",
  left: -1,
  bottom: -4,

  variants: {
    status: {
      employed: {
        background: "$red8",
      },
      open: {
        background: "$green8",
      },
    },
  },
});

function AvatarStatusBadge(props) {
  return (
    <AvatarContainer>
      <StyledAvatar size={props.size} src={props.src} />
      {props.statusBadge && <StatusBadge status={props.status} />}
    </AvatarContainer>
  );
}

export default AvatarStatusBadge;
