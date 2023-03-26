import { styled } from "../../../stitches.config.js";
import ProgressBar from "../../progress/Progress";

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Label = styled("p", {
  mb: "$spacing-02",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const HelpText = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontStyle: "italic",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
  mt: "$spacing-02",
  mb: "$spacing-04",
});

const CompetencyDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$xs",
  fontStyle: "italic",
  color: "mauve12",

  "@bp1": {
    fontSize: "$sm",
  },
});

export default function Competency({
  helpText,
  competencyDescription,
  progressValue,
  gradient,
}) {
  return (
    <Container>
      <Label>Level</Label>
      <ProgressBar gradient={gradient} progressValue={progressValue} />
      <HelpText>{helpText}</HelpText>
      <CompetencyDescription>{competencyDescription}</CompetencyDescription>
    </Container>
  );
}
