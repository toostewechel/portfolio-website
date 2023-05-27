import React from "react";
import { styled } from "../../stitches.config.js";
import ProgressBar from "../progress/Progress";

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  mb: "$spacing-02",
});

const LabelLeft = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const LabelRight = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const PercentageContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  mt: "$spacing-02",
  mb: "$spacing-04",
});

const PercentageLeft = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const PercentageRight = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const CharacterTraitDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$xs",
  color: "$mauve11",
});

interface CharacterTraitProps {
  labelLeft: string;
  labelRight: string;
  percentageLeft: string;
  percentageRight: string;
  charactertraitDescription: string;
  progressValue: number;
  gradient:
    | "blue"
    | "plum"
    | "crimson"
    | "teal"
    | "cyan"
    | "red"
    | "yellow"
    | "slate";
}

const CharacterTrait: React.FC<CharacterTraitProps> = ({
  labelLeft,
  labelRight,
  percentageLeft,
  percentageRight,
  charactertraitDescription,
  progressValue,
  gradient,
}) => {
  return (
    <Container>
      <LabelContainer>
        <LabelLeft>{labelLeft}</LabelLeft>
        <LabelRight>{labelRight}</LabelRight>
      </LabelContainer>
      <ProgressBar gradient={gradient} progressValue={progressValue} />
      <PercentageContainer>
        <PercentageLeft>{percentageLeft}</PercentageLeft>
        <PercentageRight>{percentageRight}</PercentageRight>
      </PercentageContainer>
      <CharacterTraitDescription>
        {charactertraitDescription}
      </CharacterTraitDescription>
    </Container>
  );
};

export default CharacterTrait;
