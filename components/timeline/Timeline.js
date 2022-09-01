import { styled } from "../../stitches.config.js";
import React, { useRef, useEffect, useState } from "react";

const Container = styled("div", {
  maxWidth: "1234px",
  margin: "0 auto",
  padding: "$spacing-05",
  background: "$gray3",
});

const Cards = styled("ul", {
  display: "flex",
  padding: "$0",
  listStyle: "none",
  overflowX: "scroll",
  scrollSnapType: "x",
  scrollBehavior: "smooth",
});

const CardContainer = styled("li", {
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "400px",
  borderRadius: "16px",

  background: "$crimson5",
  boxShadow: "$smooth",
  scrollSnapAlign: "start",
  mr: "$spacing-04",

  "&:last-child": {
    mr: 0,
  },

  "@bp1": {},
  "@bp2": {
    flexBasis: "calc(50% - 6px)",
  },
  "@bp3": {
    flexBasis: "calc(calc(100% / 3) - 8px)",
  },
  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 8px)",

  },
});

const Card = styled("div", {
  padding: "$spacing-04",
})

const ControlsContainer = styled("div", {
  background: "$gray3",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%",
})

const Controls = styled("div", {
  background: "$crimson6",
  padding: "$spacing-04",
  display: "flex",
  flexDirection: "row",
})

const Button = styled("button", {
  padding: "16px",
  backgroundColor: "$violet3",
  mr: "8px",

  "&:last-child": {
    mr: 0,
  },

  "&:hover": {
    backgroundColor: "$violet4",
  },
});

function getCardWidth() {
  return (
    document.getElementById('card').clientWidth
  )
}

function Timeline(props) {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  }

  
  
  return (
    <Container>
      <Cards ref={ref}>
        <CardContainer>
          <Card id="card">
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            I have empathy for those around me and respect their point of view. I
            have empathy for those around me and respect their point of view
          </Card>
        </CardContainer>
      </Cards>
      <ControlsContainer>
        <Controls>
          <Button onClick={() => scroll(-getCardWidth())}>Start</Button>
          <Button onClick={() => scroll(getCardWidth())}>Right</Button>
        </Controls>
      </ControlsContainer>
    </Container>
  );
}

export default Timeline;