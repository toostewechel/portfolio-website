import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "1600px",
  height: "600px",
  backgroundImage: "url(/images/experience-education-placeholder.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  m: "0 auto",
  boxShadow: "$smooth",
  borderRadius: "16px",
})

const ContentContainer = styled("div", {
  maxWidth: "592px",
})

function Banner() {
  return (
    <Container>
      <ContentContainer>
        <ContentBlock
          alignment="center"
          heading="My Experience"
          description="I can effectively manage the product creation process throughout all the different product development stages, from initial concept to product launch."
        />
      </ContentContainer>
    </Container>
  )
}

export default Banner;