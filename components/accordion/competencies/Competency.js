import { styled } from "../../../stitches.config.js";
import ProgressBar from "../../progress/Progress";

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  pb: "$spacing-04",
});

const Label = styled("p", {
  mb: "$spacing-03",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$mauve12",
});

const HelpText = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$xs",
  lineHeight: "$none",
  color: "$mauve12",
  mt: "$spacing-01",
  mb: "$spacing-04",
});

const CompetencyDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$xs",
  color: "$mauve11",

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
