import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import BookOpenLineIcon from "remixicon-react/BookOpenLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import React, { useState } from 'react';

const BackgroundImage = styled("div", {
  margin: 0,
  backgroundColor: "#FFE0B4",
  height: "100vh",

  "@bp2": {
    backgroundImage: "url(/images/wallpaper.png)",
    opacity: 1,
    backgroundSize: "contain",
    backgroundPosition: "-132px center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    mt: "-88px",
  },
});

const ContainerOuter = styled("div", {
  position: "absolute",
  bottom: 0,
  width: "100%",
  display: "flex",

  "@bp2": {
    bottom: 32,
    justifyContent: "center",
  },
});

const ContainerInner = styled("div", {
  margin: 0,
  display: "flex",
  justifyContent: "left",
  width: "100%",
  maxWidth: "1234px",
  backgroundColor: "$mauve12",

  "@bp2": {
    margin: "$spacing-05",
    padding: "$spacing-03",
    borderRadius: "24px",
    boxShadow: "$smooth",
    justifyContent: "center",
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-04",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "$spacing-04",
  maxWidth: "780px",

  "@bp2": {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray7",
  width: "19px",
  height: "19px",
  mr: "$spacing-02",

  "@bp1": {
    width: "19px",
    height: "19px",
  },
});

const Label = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$gray6",
  mr: "$spacing-04",

  "@bp1": {
    fontSize: "$sm",
    mr: "$spacing-05",
  },
});

function ContentLanding(props) {
  
  
  return (
    <BackgroundImage>
      <ContainerOuter>
        <ContainerInner>
          <ContentContainer>
            <Heading
              as="h1"
              level={3}
              color="light"
              title="The Rise of the Unstoppable, Decentralized and Semantic Web"
            />
            <FlexWrapper>
              <FlexWrapper>
                <DecorativeIcon>
                  <CalendarLineIcon />
                </DecorativeIcon>
                <Label>22 jun 2022</Label>
              </FlexWrapper>
              <FlexWrapper>
                <DecorativeIcon>
                  <BookOpenLineIcon />
                </DecorativeIcon>
                <Label>25 min</Label>
              </FlexWrapper>
              <FlexWrapper>
                <DecorativeIcon>
                  {props.dutch && <img src="/icons/dutch-flag.svg" />}
                  {props.english && <img src="/icons/british-flag.svg" />}
                </DecorativeIcon>
                <Label style={{ paddingLeft: "4px" }}>Dutch</Label>
              </FlexWrapper>
            </FlexWrapper>
          </ContentContainer>
        </ContainerInner>
      </ContainerOuter>
    </BackgroundImage>
  );
}

export default ContentLanding;
