import { styled } from "../../stitches.config.js";
import Tag from "../tag/Tag.js";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import { MapPin, CalendarDays, Download } from "lucide-react";
import {
  Provider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/Tooltip.js";

const Container = styled("a", {
  m: 0,
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  border: "2px solid $mauve6",
  willChange: "transform",
  transition: "all, 300ms ease-in",
  p: "$spacing-05",

  "@bp2": {
    m: "$none $spacing-03 $spacing-03 $spacing-03",
  },

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "border, 300ms ease-out",
    border: "2px solid $mauve11",
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

const BackgroundPattern = styled("img", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  width: "232px",
  height: "232px",
  opacity: 0.9,
  zIndex: -1,
  variants: {
    position: {
      topRight: {
        position: "absolute",
        top: -116,
        right: -116,
      },
      bottomRight: {
        position: "absolute",
        bottom: -116,
        right: -116,
      },
    }
  }
})

const AccentHighlight = styled("div", {
  position: "absolute",
  width: "48px",
  height: "14px",
  borderRadius: "6px",
  left: 16,
  top: -7,

  variants: {
    color: {
      blue: {
        background: "$blue9",
      },
      plum: {
        background: "$plum9",
      },
      crimson: {
        background: "$crimson9",
      },
    },
  },

  "@bp2": {
    width: "64px",
  },
})

const CardHeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  mb: "$spacing-07",
});

const Logo = styled("img", {
  size: "$7",
  borderRadius: "8px",
  boxShadow: "$xs",

  "@bp2": {
    size: "$8",
  },
});

const TitleContainer = styled("div", {
  mb: "$spacing-05",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  fontSize: "$xl",
  color: "$gray12",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 1,
  "-webkit-box-orient": "vertical",

  "@bp1": {
    fontSize: "$2xl",
  },
});

const CardSubtitle = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$mauve9",
  mt: "-2px",
});

const DescriptionContainer = styled("div", {
  pb: "$spacing-08",
});

const CardDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  lineHeight: "$base",
  color: "$gray12",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 6,
  "-webkit-box-orient": "vertical",

  "@bp1": {
    fontSize: "$base",
  },
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  p: "$spacing-04 $none",
  marginTop: "auto",
  alignItems: "baseline",
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
  color: "$mauve8",
  width: "17px",
  height: "17px",
  mr: "$spacing-01",

  "@bp1": {
    width: "20px",
    height: "20px",
    mr: "$spacing-02",
  },
});

const Label = styled("p", {
  alignSelf: "center",
  fontSize: "$xs",
  fontFamily: "$default",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  color: "$mauve9",
  pr: "$spacing-04",
  mt: "1px",

  "@bp1": {
    pr: "$spacing-05",
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
  backgroundColor: "transparent",

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

const IconLink = styled("a", {
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  color: "$mauve11",
  alignItems: "center",
  padding: "$spacing-03",
  background: "transparent",
  transition: "background 300ms ease-in",
  border: "2px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve2",
    border: "2px solid transparent",
    color: "$mauve12",
  },
  "&:active": { 
    backgroundColor: "$mauve3" 
  },
  "&:focus": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve2", 
    border: "2px solid $blue11",
    color: "$mauve12",  
  },
});

function CredentialTimelineCard(props) {
  return (
    <Container gradient={props.gradient} href={props.href}>
      <BackgroundPattern src="/patterns/circular-background-pattern.svg" position="bottomRight" />
      <AccentHighlight color={props.accentColor} />
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
              <CalendarDays />
            </DecorativeIcon>
            <Label>{props.duration}</Label>
          </FlexWrapper>
          <FlexWrapper>
            <DecorativeIcon>
              <MapPin />
            </DecorativeIcon>
            <Label>{props.location}</Label>
          </FlexWrapper>
        </FlexWrapper>
        {props.hasLink && (
          <Provider>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconLink href={props.publication}>
                  <Download />
                </IconLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                {props.tooltipLabel}
              </TooltipContent>
            </Tooltip>
          </Provider>
        )}
      </FooterContainer>
    </Container>
  );
}

export default CredentialTimelineCard;
