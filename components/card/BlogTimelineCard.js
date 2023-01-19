import { styled } from "../../stitches.config.js";
import Tag from "../tag/Tag.js";

const Container = styled("a", {
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
  border: "1px solid $gray6",
  willChange: "transform",
  transition: "all, 300ms ease-in",
  background: "white",

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
  position: "absolute",
  borderRadius: "100%",
  boxShadow: "$inset",
  background: "rgba(0,0,0, 0.10)",
  top: 16,
  left: 16,
});

const IconSize = styled("p", {
  fontSize: "$2xl",
});

const TitleContainer = styled("div", {
  borderRadius: "8px",
  background: "rgba(2,0,16, 0.75)",
  padding: "$spacing-05 $spacing-04",
  letterSpacing: "$tracking-tight",
  boxShadow: "$smooth",
  position: "relative",
  mr: "$spacing-05",
  ml: "$spacing-05",
  mt: "-44px",
});

const CardTitle = styled("h3", {
  fontSize: "$xl",
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
  "-webkit-line-clamp": 4,
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
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  fontSize: "$sm",
  color: "$gray11",
});

function BlogTimelineCard(props) {
  return (
    <Container href={props.href}>
       <Icon>
        <IconSize>
          {props.dutch && <img src="/icons/dutch-flag.svg" />}
          {props.english && <img src="/icons/british-flag.svg" />}
        </IconSize>
      </Icon>
      <ResponsiveImage src={props.image} />
      <TitleContainer>
        <CardTitle>{props.title}</CardTitle>
      </TitleContainer>
      <DescriptionContainer>
        <CardDescription>{props.description}</CardDescription>
      </DescriptionContainer>
      <MetaInformationContainer>
        <MetaInformation>{props.meta}</MetaInformation>
        <Tag color={props.color} label={props.category} />
      </MetaInformationContainer>
    </Container>
  );
}

export default BlogTimelineCard;
