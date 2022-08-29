import React, { useRef } from "react";
import { styled } from "../../../../stitches.config.js";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
});

const ScrollContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  overflowX: "scroll",
  maxWidth: "1234px",
  gap: "24px",
  p: "$none $spacing-02",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const CardContainer = styled("div", {
  display: "flex",
  minWidth: "280px",
  maxWidth: "300px",
  height: "420px",
  backgroundColor: "$violet4",
  borderRadius: "16px",
  flex: "1 1 33%",
  alignItems: "flex-end",
  padding: "16px",
  backgroundImage: "url(/images/placeholder-value.png)",
  backgroundPosition: "cover",

  "@bp4": {
    "&:hover": {
      scale: 1.02,
      transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      boxShadow: "$smooth",
    },
  },
});

const CardInfo = styled("div", {
  display: "flex",
  color: "white",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: "$mauve12",
  padding: "16px",
  width: "100%",
  boxShadow: "$smooth",
});

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
});

const Paragraph = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",

  "@bp1": {
    fontSize: "base",
  },
});

const Button = styled("button", {
  padding: "16px",
  backgroundColor: "$violet3",
  mr: "8px",

  "&:hover": {
    backgroundColor: "$violet4",
  },
});

function ScrollContainerX() {
  return (
    <Wrapper>
      <ScrollContainer>
        <CardContainer>
          <CardInfo>
            <Title>Design Tokens</Title>
            <Paragraph>
              Abstracte, niet-functionele interface elementen
            </Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Bouwsteen</Title>
            <Paragraph>
              Kleinst herbruikbare functionele elementen, zoals tekst en input
            </Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Hulpmiddel</Title>
            <Paragraph>
              Kleine herhalende opdrachten die een gebruiker vaker dan 1x invult
            </Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Pagina</Title>
            <Paragraph>
              Meerdere bouwstenen die in een bepaalde hiërarchie geplaatst zijn
            </Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Hoofdstuk</Title>
            <Paragraph>
              Meerdere pagina's die een samen een leerdoel vertegenwoordigen
            </Paragraph>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardInfo>
            <Title>Module</Title>
            <Paragraph>
              Een of meerdere hoofdstukken die een gebruiker doorloopt
            </Paragraph>
          </CardInfo>
        </CardContainer>
      </ScrollContainer>
    </Wrapper>
  );
}

export default ScrollContainerX;
