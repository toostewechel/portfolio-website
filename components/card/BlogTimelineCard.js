import { styled } from "../../stitches.config.js";
import Tag from "../tag/Tag.js";

const Container = styled("a", {
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
  border: "1px solid $gray6",
  willChange: "transform",
  transition: "all, 300ms ease-in",

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all, 300ms ease-out",
    border: "1px solid $violet4",
    boxShadow: "$smooth",
  },
});

const ResponsiveImage = styled("img", {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
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
  borderRadius: "8px",
  background: "rgba(2,0,16, 0.67)",
  padding: "$spacing-05 $spacing-04",
  boxShadow: "$smooth",
  position: "relative",
  mr: "$spacing-05",
  ml: "$spacing-05",
  mt: "-44px",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  color: "$mauve2",
  textAlign: "center",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
});

const DescriptionContainer = styled("div", {
  padding: "$spacing-05",
});

const CardDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$base",
  lineHeight: "$base",
  color: "$gray12",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 3,
  "-webkit-box-orient": "vertical",
});

const MetaInformationContainer = styled("div", {
  padding: "$spacing-02 $spacing-05 $spacing-05 $spacing-05",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$semi-bold",
  letterSpacing: "$tracking-tight",
  color: "$gray11",
});

function BlogTimelineCard(props) {
  return (
    <Container href="/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web">
      <Icon />
      <ResponsiveImage src={props.imgage} />
      <TitleContainer>
        <CardTitle>
          The Rise of the Unstoppable, Decentralized and Semantic Web
        </CardTitle>
      </TitleContainer>
      <DescriptionContainer>
        <CardDescription>
          I have empathy for those around me and respect their point of view. I
          have empathy for those around me and respect their point of view
        </CardDescription>
      </DescriptionContainer>
      <MetaInformationContainer>
        <MetaInformation>Article • 20 min read </MetaInformation>
        <Tag color="blue" label="Tech" />
      </MetaInformationContainer>
    </Container>
  );
}

export default BlogTimelineCard;
