import { styled } from "../../stitches.config.js";

const Container = styled("div", {
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
})

const ResponsiveImage = styled("img", {
  maxWidth: "100%",
  height: "auto",
})

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  backgroundColor: "$mauve12",
  position: "absolute",
  borderRadius: "100%",
  boxShadow: "$smooth",
  top: 16,
  left: 16,
})

function TimelineCard(props) {
  return (
    <Container>
      <Icon />
      <ResponsiveImage src={props.imgage} />
    </Container>
  )
}

export default TimelineCard;