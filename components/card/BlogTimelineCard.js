import { styled } from "../../stitches.config.js";
import Tag from "../tag/Tag.js";

const Container = styled("a", {
  m: 0,
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  border: "2px solid $mauve6",
  willChange: "transform",
  transition: "all, 300ms ease-in",
  background: "white",
  width: "100%",
  height: "100%",
  outline: 0,

  "@bp2": {
    m: "$none $spacing-02 $spacing-02 $spacing-02",
  },
  
  "&:hover": {
    transform: "translateY(-2px)",
    transition: "border, 300ms ease-out",
    border: "2px solid $mauve8",
    boxShadow: "$small",
  },
  "&:active": { 
    transition: "border, 300ms ease-out", 
    boxShadow: "$xs",
  },
   "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "$mauve2", 
    border: "2px solid $blue11",
    color: "$mauve12",  
  },
});

const ResponsiveImage = styled("img", {
  maxWidth: "100%",
  height: "auto",
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

const IconSize = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$5",
});

const TitleContainer = styled("div", {
  borderRadius: "6px",
  background: "rgba(2,0,16, 0.70)",
  padding: "$spacing-05 $spacing-04",
  boxShadow: "$xs",
  position: "relative",
  mr: "$spacing-04",
  ml: "$spacing-04",
  mt: "-42px",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$lg",
  color: "$mauve1",
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
  color: "$mauve11",
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
          {props.dutch && <img style={{width: "24px", height: "24px"}} src="/icons/nl.svg" />}
          {props.english && <img style={{width: "24px", height: "24px"}} src="/icons/gb.svg" />}
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
