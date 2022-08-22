import React, { useRef } from "react";
import { styled } from "../../../stitches.config.js";
import Card from "./Card.js";

const Wrapper = styled("div", {
  
})

const ScrollContainer = styled("div", {
  display: "flex",
  justifyContent: "left",
  flexWrap: "nowrap",
  overflowX: "hidden",
  scrollBehavior: "smooth",
  gap: "16px",
  p: "$spacing-10 $spacing-02",

  "@bp5": {
    justifyContent: "center",
    gap: "24px",
    p: "$spacing-13 $spacing-04",
  }
})

const CardContainer = styled("div", {
  display: "flex",
  minWidth: "280px",
  maxWidth: "300px",
  height: "420px",
  backgroundColor: "$violet4",
  borderRadius: "16px",
  flex: "1 1 auto",
  alignItems: "flex-end",
  padding: "16px",
  backgroundImage: "url(/images/placeholder-value.png)",
  backgroundPosition: "cover",

  "@bp4": {
    "&:hover": {
      scale: 1.02,
      transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      boxShadow: "$smooth",
    },
  }

})

const CardInfo = styled("div", {
  display: "flex",
  color: "white",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: "$mauve12",
  padding: "16px",
  width: "100%",
  boxShadow: "$smooth",

})

const Title = styled("p", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  color: "$white",
  fontSize: "$xl",
  mb: "$spacing-04",
  display: "-webkit-box",
  overflow: "hidden",
  "-webkit-line-clamp": "3",
  "-webkit-box-orient": "vertical",

})

const Paragraph = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",

  "@bp1": {
    fontSize: "base",
  }
})

const Button = styled ("button", {
  padding: "16px",
  backgroundColor: "$violet3",
  mr: "8px",

  "&:hover": {
    backgroundColor: "$violet4",
  }
})

function ScrollContainerX() {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <Wrapper>
      <ScrollContainer ref={ref} >
        <CardContainer>
          <CardInfo>
            <Title>Reliable</Title>
            <Paragraph>I intend to keep my word if someone asks me something</Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Pro-active</Title>
            <Paragraph>I combine resourcefulness and creativity to make things happen</Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Think win-win</Title>
            <Paragraph>I always look for solutions that will benefit the majority involved</Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Seek to understand</Title>
            <Paragraph>I have empathy for those around me and respect their point of view</Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Curious</Title>
            <Paragraph>I have a desire to explore, investigate and learn new things</Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Autonomous</Title>
            <Paragraph>I Intuitively prioritise work and hold myself accountable</Paragraph>
          </CardInfo>
        </CardContainer>
      </ScrollContainer>
      <div>
        <Button onClick={() => scroll(-330)}>Left</Button>
        <Button onClick={() => scroll(330)}>Right</Button>
      </div>
    </Wrapper>
  );
}

export default ScrollContainerX;