import { styled } from "../../../stitches.config.js";

const Container = styled("div", {
  maxWidth: "320px",
  height: "460px",
  backgroundColor: "$violet4",
})

function Card() {
  return(
    <Container></Container>
  )
}

export default Card;