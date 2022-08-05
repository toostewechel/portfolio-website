import { styled } from "../stitches.config.js";

import ExternalLinkLineIcon from "remixicon-react/ExternalLinkLineIcon";

const Panel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "$spacing-03",

  "&:hover": {
    backgroundColor: "$violet3",
  },
  "&:active": {
    backgroundColor: "$violet4",
  },
});

const FlexWrapper = styled("div", {
  display: "flex",
});

const ImageContainer = styled("div", {
  display: "flex",
  size: "$7",
  paddingRight: "$spacing-03",

  "@bp1": {
    paddingRight: "$spacing-04",
    size: "$8",
  },
});

const FlexContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Title = styled("h5", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",

  "@bp1": {
    fontSize: "$xl",
  },
});

const Description = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$gray11",

  "@bp1": {
    fontSize: "$base",
  },
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacing-03",
  color: "$violet11",
  width: "18px",
  height: "18px",

  "@bp1": {
    width: "24px",
    height: "24px",
  },
});

function StyledLink(props) {
  return (
    <a href={props.href} target="_blank">
      <Panel>
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
        <FlexContainer>
          <DecorativeIcon>
            <ExternalLinkLineIcon />
          </DecorativeIcon>
        </FlexContainer>
      </Panel>
    </a>
  );
}

export default StyledLink;
