import { styled } from "../stitches.config.js";

import ExternalLinkLineIcon from "remixicon-react/ExternalLinkLineIcon";

const Link = styled("a", {
  outlineOffset: "2px",

  "&:focus": {
    outlineColor: "$violet11",
  },
});

const Panel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "$spacing-03 $spacing-02",
  borderRadius: "4px",
  border: "1px solid transparent",

  "&:hover": {
    backgroundColor: "$violet3",
    border: "1px solid $violet4",
  },
  "&:active": {
    backgroundColor: "$violet4",
  },
  "@bp1": {
    padding: "$spacing-03",
  },
});

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

function StyledLink(props) {
  return (
    <Link href={props.href} target="_blank">
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
    </Link>
  );
}

export default StyledLink;
