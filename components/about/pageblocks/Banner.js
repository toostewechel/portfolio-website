import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "1600px",
  height: "600px",
  background: "linear-gradient(180deg, #FCEFFC 0%, #F9D8E7 100%)",
  // backgroundImage: "url(/images/experience-education-placeholder.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  m: "0 auto",
  boxShadow: "$smooth",
  borderRadius: "16px",
})

const ContentContainer = styled("div", {
  maxWidth: "592px",
  position: "absolute",
  padding: "32px",
})

const SplineWrapper = styled("div", {
  width: "100%",
  height: "100%",
})

function Banner() {
  return (
    <Container>
      <SplineWrapper>
        <Spline scene="https://prod.spline.design/P29m5qBMWD8SP4xK/scene.splinecode" />
      </SplineWrapper>
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