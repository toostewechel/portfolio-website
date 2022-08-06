import { styled } from "../stitches.config.js";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";

const Panel = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "$spacing-04 $spacing-03",
  borderBottom: "1px solid $gray6",
});

const ImageContainer = styled("div", {
  display: "flex",
  size: "$7",
  pr: "$spacing-03",

  "@bp1": {
    pr: "$spacing-04",
    size: "$8",
  },
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  mt: "$spacing-01",

  "@bp1": {
    fontSize: "$xl",
  },
});

const Subtitle = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$gray11",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$base",
  },
});

const Description = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  lineHeight: "$base",
  color: "$gray12",
  maxWidth: "640px",

  "@bp1": {
    fontSize: "$base",
    lineHeight: "$base",
  },
});

const FlexWrapper = styled("div", {
  mt: "$spacing-03",
  mb: "$spacing-02",
  display: "flex",
  flexDirection: "row",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray10",
  width: "16px",
  height: "16px",
  mr: "$spacing-01",

  "@bp1": {
    width: "19px",
    height: "19px",
    mr: "$spacing-02",
  },
});

const Label = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$gray10",
  mr: "$spacing-04",

  "@bp1": {
    fontSize: "$sm",
    mr: "$spacing-05",
  },
});

function ListItem(props) {
  return (
    <Panel>
      <ImageContainer>
        <img src={props.src}></img>
      </ImageContainer>
      <div>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Description>{props.description}</Description>
        <FlexWrapper>
          <FlexWrapper>
            <DecorativeIcon>
              <TimeLineIcon />
            </DecorativeIcon>
            <Label>{props.duration}</Label>
          </FlexWrapper>
          <FlexWrapper>
            <DecorativeIcon>
              <MapPin2LineIcon />
            </DecorativeIcon>
            <Label>{props.location}</Label>
          </FlexWrapper>
        </FlexWrapper>
      </div>
    </Panel>
  );
}

export default ListItem;
