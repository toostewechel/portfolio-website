import { styled } from "../../../stitches.config.js";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";
import ExternalLinkLineIcon from "remixicon-react/ExternalLinkLineIcon";

const Container = styled("div", {
  m: "$spacing-04",
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  border: "1px solid $gray5",
  borderRadius: "4px",
  willChange: "transform",
  transition: "all, 300ms ease-in",

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all, 300ms ease-out",
    boxShadow: "$smooth",
  },
})

const HeaderPanel = styled("div", {
  display: "flex",
  flexDirection: "column",
  p: "$spacing-05",

  "@bp4": {
    flexDirection: "row",
    alignItems: "center",
  }
})

const ContentContainer = styled("div", {
  p: "0 $spacing-05",
})

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  borderTop: "1px solid $gray5",
  backgroundColor: "$gray1",
  p: "$spacing-04",
})

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alginItems: "center",
})

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const StyledImage = styled("img", {
  display: "block",
  size: "$7",
  pb: "$spacing-04",

  "@bp4": {
    pr: "$spacing-05",
    pb: 0,
    size: "$8",
  },
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",

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
  color: "$mauve12",
  maxWidth: "640px",
  pb: "$spacing-06",

  "@bp1": {
    fontSize: "$lg",
    lineHeight: "$base",
  },
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

function Card(props) {
  return (
    <a href={props.href}>
      <Container>
        <HeaderPanel>
          <StyledImage src="/logo/university-twente-logo.png" />
          <Box>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
          </Box>
        </HeaderPanel>
        <ContentContainer>
          <Description>{props.description}</Description>
        </ContentContainer>
        <FooterContainer>
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
          <DecorativeIcon>
            <ExternalLinkLineIcon />
          </DecorativeIcon>
        </FooterContainer>
      </Container>
    </a>
  )
}

export default Card;