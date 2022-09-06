import { styled } from "../../../stitches.config.js";

const Gradient = {
  blue: "linear-gradient(0deg, rgba(0, 145, 255, 0.85), rgba(225, 240, 255, 0.25)) border-box",
  violet:
    "linear-gradient(0deg, rgba(189, 109, 255, 0.8), rgba(202, 138, 255, 0.25)) border-box",
  crimson:
    "linear-gradient(0deg, rgba(224, 49, 119, 0.85), rgba(224, 49, 119, 0.15)) border-box",
  teal: "linear-gradient(0deg, rgba(5, 162, 194, 0.85), rgba(5, 162, 194, 0.15)) border-box",
  green:
    "linear-gradient(0deg, rgba(18, 165, 148, 0.85), rgba(18, 165, 148, 0.15)) border-box",
  orange:
    "linear-gradient(0deg, rgba(236, 94, 65, 0.85), rgba(236, 94, 65, 0.15)) border-box",
};

const CoreValuesWrapper = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "$spacing-05 $none",
});

const CoreValuesBackground = styled("div", {
  display: "none",
  position: "absolute",
  background: "url(/patterns/core-values-background-pattern.svg)",
  width: "100%",
  height: "164px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  zIndex: -1,
  borderRadius: "16px",
  boxShadow: "$toolbar",
  alignSelf: "center",

  "@bp3": {
    display: "flex",
  },
});

const CoreValueItems = styled("ul", {
  maxWidth: "1234px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "$none",
  listStyle: "none",
  gap: "16px",
});

const CoreValueItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "auto",
  borderRadius: "16px",
  mb: 0,

  "@bp2": {
    flexBasis: "calc(50% - 12px)",
  },

  "@bp4": {
    flexBasis: "calc(calc(100% / 3) - 16px)",
  },
});

const CoreValueCard = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "$spacing-06",
  backgroundColor: "white",
  borderRadius: "16px",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "16px",
    border: "8px solid transparent",
    background: "linear-gradient(45deg, purple, orange) border-box",
    "-webkit-mask":
      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    "-webkit-mask-composite": "destination-out",
    maskComposite: "exclude",
  },

  variants: {
    borderColor: {
      blue: {
        "&::before": {
          background: `${Gradient.blue}`,
        },
      },
      violet: {
        "&::before": {
          background: `${Gradient.violet}`,
        },
      },
      crimson: {
        "&::before": {
          background: `${Gradient.crimson}`,
        },
      },
      teal: {
        "&::before": {
          background: `${Gradient.teal}`,
        },
      },
      green: {
        "&::before": {
          background: `${Gradient.green}`,
        },
      },
      orange: {
        "&::before": {
          background: `${Gradient.orange}`,
        },
      },
    },
  },
});

const ValueTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$black",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-02",

  "@bp1": {
    fontSize: "$xl",
    mb: "$spacing-03",
  },
});

const ValueDescription = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",

  "@bp1": {
    fontSize: "$base",
  },
});

function CoreValues() {
  return (
    <CoreValuesWrapper>
      <CoreValuesBackground />
      <CoreValueItems>
        <CoreValueItem>
          <CoreValueCard borderColor="blue">
            <ValueTitle>Reliable</ValueTitle>
            <ValueDescription>
              If someone ask me to do something I intend to keep my word
            </ValueDescription>
          </CoreValueCard>
        </CoreValueItem>
        <CoreValueItem>
          <CoreValueCard borderColor="violet">
            <ValueTitle>Curious</ValueTitle>
            <ValueDescription>
              I have a desire to explore, investigate and learn new things
            </ValueDescription>
          </CoreValueCard>
        </CoreValueItem>
        <CoreValueItem>
          <CoreValueCard borderColor="crimson">
            <ValueTitle>Seek to understand</ValueTitle>
            <ValueDescription>
              I have empathy for those around me and respect their point of view
            </ValueDescription>
          </CoreValueCard>
        </CoreValueItem>
        <CoreValueItem>
          <CoreValueCard borderColor="teal">
            <ValueTitle>Pro-active</ValueTitle>
            <ValueDescription>
              I don’t wait around but come up with new initiatives and
              innovative ideas
            </ValueDescription>
          </CoreValueCard>
        </CoreValueItem>
        <CoreValueItem>
          <CoreValueCard borderColor="green">
            <ValueTitle>Think win-win</ValueTitle>
            <ValueDescription>
              I always look for solutions that will benefit the majority
              involved
            </ValueDescription>
          </CoreValueCard>
        </CoreValueItem>
        <CoreValueItem>
          <CoreValueCard borderColor="orange">
            <ValueTitle>Autonomous</ValueTitle>
            <ValueDescription>
              I intuitively prioritise work and hold myself accountable
            </ValueDescription>
          </CoreValueCard>
        </CoreValueItem>
      </CoreValueItems>
    </CoreValuesWrapper>
  );
}

export default CoreValues;
