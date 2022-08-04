import { styled } from "../stitches.config.js";

import ExternalLinkLineIcon from 'remixicon-react/ExternalLinkLineIcon';

const Panel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "$spacing-03",

  '&:hover': {
    backgroundColor: '$violet3',
  },
  '&:active': {
    backgroundColor: '$violet4',
  },

});

const FlexWrapper = styled("div", {
  display: "flex",
})

const ImageContainer = styled("div", {
  display: 'flex',
  width: "64px",
  height: "64px",
  paddingRight: "$spacing-03",

  '@bp1': {
    paddingRight: "$spacing-05",
  }
})

const FlexContainer = styled("div", {
  display: 'flex',
  alignItems: "center",
})

const Title = styled("h5", {
  fontSize: "$header-5",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  marginTop: "$none",
  marginBottom: "$spacing-01",
})

const Description = styled("p", {
  fontSize: "$body",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$gray11",
})

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacing-03",
  // backgroundColor: "$violet5",
})


function StyledLink(props) {
  return (
    <a href={props.href} target="_blank">
      <Panel>
        <FlexWrapper>
          <ImageContainer><img src={props.src}></img></ImageContainer>
          <FlexContainer>
            <div>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
            </div>
          </FlexContainer>
        </FlexWrapper>
        <FlexContainer>
          <Icon><ExternalLinkLineIcon /></Icon>
        </FlexContainer>
      </Panel>
    </a >
  )
}

export default StyledLink;