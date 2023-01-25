import { styled } from "../../stitches.config.js";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const Container = styled("a", {
  m: 0,
  borderRadius: "12px",
  position: "relative",
  border: "1px solid $mauve6",
  willChange: "transform",
  transition: "all, 300ms ease-in",
  height: "380px",
  width: "100%",

  "@bp2": {
    m: "$none $spacing-03 $spacing-03 $spacing-03",
  },

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all, 300ms ease-out",
    border: "1px solid $mauve11",
    boxShadow: "$small",
  },
});

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  position: "absolute",
  borderRadius: "6px",
  boxShadow: "$small",
  background: "$mauveA9",
  top: 16,
  left: 16,
});

const IconSize = styled("p", {
  fontSize: "$2xl",
});

const TitleContainer = styled("div", {
  position: "absolute",
  borderRadius: "6px",
  background: "rgba(2,0,16, 0.70)",
  padding: "$spacing-05 $spacing-04",
  boxShadow: "$xs",
  mr: "$spacing-05",
  ml: "$spacing-05",
  bottom: 16,
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve1",
  mb: "$spacing-02",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
});

const MetaInformationContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "$mauveA11",
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  letterSpacing: "$tracking-tight",
  color: "$mauveA11",
  
});

function ProjectTimelineCard(props) {
  return (
    <Container
      style={{
        background: `url(${props.background})`,
        backgroundSize: "contain",
        backgroundRepeat: "none",
        backgroundPosition: "center",
      }}
      href="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web"
    >
      <Icon>
        <IconSize>
          {props.dutch && <img src="/icons/dutch-flag.svg" />}
          {props.english && <img src="/icons/british-flag.svg" />}
        </IconSize>
      </Icon>
      <TitleContainer>
        <CardTitle>{props.title}</CardTitle>
        <MetaInformationContainer>
          <MetaInformation>{props.meta}</MetaInformation>
          <ArrowRightLineIcon />
        </MetaInformationContainer>
      </TitleContainer>
    </Container>
  );
}

export default ProjectTimelineCard;
