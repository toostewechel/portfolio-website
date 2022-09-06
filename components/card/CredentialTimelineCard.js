import { styled } from "../../stitches.config.js";
import Tag from "../tag/Tag.js";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";
import DownloadCloud2LineIcon from "remixicon-react/DownloadCloud2LineIcon";
import {
  Provider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/Tooltip.js";

const Container = styled("a", {
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: "1px solid $gray6",
  willChange: "transform",
  transition: "all, 300ms ease-in",
  p: "$spacing-04",

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all, 300ms ease-out",
    border: "1px solid $violet4",
    boxShadow: "$smooth",
  },
});

const CardHeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const Logo = styled("img", {
  size: "$6",
  borderRadius: "8px",

  "@bp2": {
    size: "$8",
  },
});

const TitleContainer = styled("div", {
  padding: "$spacing-05 $none",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$mauve12",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 1,
  "-webkit-box-orient": "vertical",
});

const CardSubtitle = styled("p", {
  fontFamily: "$default",
  fontSize: "lg",
  color: "$gray11",
});

const DescriptionContainer = styled("div", {
  pb: "$spacing-08",
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
  "-webkit-line-clamp": 6,
  "-webkit-box-orient": "vertical",
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  p: "$spacing-04 $none",
  marginTop: "auto",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alginItems: "center",
});

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
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

const StyledLink = styled("a", {
  display: "inline-flex",
  color: "$violet10",
  fontWeight: "$semi-bold",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  padding: "$spacing-03",
  borderRadius: "8px",
  backgroundColor: "white",

  "&:hover": {
    color: "$violet11",
    backgroundColor: "$violet3",
  },
  "&:active": {
    color: "$violet11",
  },
  "&:visited": {
    color: "$violet11",
  },
});

function CredentialTimelineCard(props) {
  return (
    <Container>
      <CardHeaderContainer>
        <Logo src={props.logo} />
        <Tag color={props.tagColor} label={props.tagLabel} />
      </CardHeaderContainer>
      <TitleContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </TitleContainer>
      <DescriptionContainer>
        <CardDescription>{props.description}</CardDescription>
      </DescriptionContainer>
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
        {props.hasLink &&
          (<Provider>
            <Tooltip>
              <TooltipTrigger asChild>
                <StyledLink href={props.href}>
                  <DownloadCloud2LineIcon />
                </StyledLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                {props.tooltipLabel}
              </TooltipContent>
            </Tooltip>
          </Provider>)}
      </FooterContainer>
    </Container>
  );
}

export default CredentialTimelineCard;