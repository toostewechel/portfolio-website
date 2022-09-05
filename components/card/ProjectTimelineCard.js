import { styled } from "../../stitches.config.js";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const Container = styled("a", {
  m: "$none $spacing-03 $spacing-03 $spacing-03",
  borderRadius: "16px",
  position: "relative",
  border: "1px solid $gray6",
  willChange: "transform",
  transition: "all, 300ms ease-in",
  height: "380px",
  width: "100%",

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all, 300ms ease-out",
    border: "1px solid $violet4",
    boxShadow: "$toolbar",
  },
});

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  background: "rgba(2,0,16, 0.67)",
  position: "absolute",
  borderRadius: "100%",
  boxShadow: "$smooth",
  top: 16,
  left: 16,
});

const TitleContainer = styled("div", {
  position: "absolute",
  borderRadius: "8px",
  background: "rgba(2,0,16, 0.67)",
  padding: "$spacing-05 $spacing-04",
  boxShadow: "$smooth",
  mr: "$spacing-05",
  ml: "$spacing-05",
  bottom: 16,
  
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  color: "$mauve2",
  mb: "$spacing-02",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
});

const IconSize = styled("p", {
  fontSize: "$2xl",
});

const MetaInformationContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "$mauve2",
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  letterSpacing: "$tracking-tight",
  color: "$mauve3",
});

function ProjectTimelineCard(props) {
  return (
    <Container style={{background: `url(${props.background})`, backgroundSize: "cover" }} href="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web">
      <Icon><IconSize>🇳🇱</IconSize></Icon>
      <TitleContainer>
        <CardTitle>
          The Rise of the Unstoppable, Decentralized and Semantic Web
        </CardTitle>
        <MetaInformationContainer>
        <MetaInformation>Article • 20 min read </MetaInformation>
        <ArrowRightLineIcon />
      </MetaInformationContainer>
      </TitleContainer>
    </Container>
  );
}

export default ProjectTimelineCard;
