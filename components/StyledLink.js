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
    scale: 1.02,
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    backgroundColor: "$violet3",
    border: "1px solid $violet4",
    boxShadow: "0px 51px 116px rgba(57, 19, 184, 0.08), 0px 21.3066px 48.462px rgba(57, 19, 184, 0.0601401), 0px 11.3915px 25.9101px rgba(57, 19, 184, 0.0533835), 0px 6.38599px 14.525px rgba(57, 19, 184, 0.0481177), 0px 3.39155px 7.71412px rgba(57, 19, 184, 0.0416442), 0px 1.4113px 3.21002px rgba(57, 19, 184, 0.0307161)"
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
