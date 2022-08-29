import { styled } from "../../../../stitches.config.js";

const FlexWrapper = styled("div", {
  display: "flex",
});

const ImageContainer = styled("div", {
  display: "flex",
  size: "$7",
  pr: "$spacing-03",

  "@bp4": {
    pr: "$spacing-05",
    size: "$8",
  },
});

const FlexContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",

  "@bp4": {
    fontSize: "$xl",
  },
});

const Description = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$gray11",

  "@bp4": {
    fontSize: "$base",
  },
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacing-02",
  color: "$violet11",
  size: "$4",

  "@bp4": {
    width: "24px",
    height: "24px",
  },
});

function ListItem(props) {
  return (
    <FlexWrapper>
      <ImageContainer>
        <img src={props.src}></img>
      </ImageContainer>
      <FlexContainer>
        <div>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </div>
      </FlexContainer>
    </FlexWrapper>
  );
}

export default ListItem;
