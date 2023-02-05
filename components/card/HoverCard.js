import React from "react";
import { styled, keyframes } from "../../stitches.config.js";
import * as HoverCard from "@radix-ui/react-hover-card";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(HoverCard.Content, {
  width: "300px",
  padding: "$spacing-05",
  borderRadius: "6px",
  backgroundColor: "white",
  border: "1px solid gray6",
  boxShadow: "$xs",
  willChange: "transform, opacity",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const StyledHoverCardArrow = styled(HoverCard.Arrow, {
  fill: "white",
  stroke: "$gray6",
  strokeWidth: "1px",
});

const ContentContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-04",
});

const Logo = styled("img", {
  width: "40px",
  height: "40px",
  borderRadius: "6px",

  "@bp2": {
    size: "$8",
  },
});

const TitleContainer = styled("div", {});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  lineHeight: "$compact",

  "@bp4": {
    fontSize: "$xl",
  },
});

const Handle = styled("p", {
  fontFamily: "$default",
  fontSize: "$base",
  color: "$mauve9",
  mt: "-2px",
});

const Description = styled("p", {
  fontSize: "$xs",
  fontWeight: "$regular",
  letterSpacing: "$tracking-tight",
  fontFamily: "$default",
  color: "$mauve11",

  "@bp3": {
    mt: "0",
    fontSize: "$base",
  },
});

const SocialNumbers = styled("div", {
  pt: "$spacing-04",
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-05",
});

const Following = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
});

const Followers = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
});

const Number = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$mauve12",
});

const Label = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$mauve9",
});

//Exports
export const HoverCardRoot = HoverCard.Root;
export const HoverCardPortal = HoverCard.Portal;
export const HoverCardTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <HoverCard.Trigger {...props} ref={forwardedRef}>
      {children}
    </HoverCard.Trigger>
  )
);
export const HoverCardPanel = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <HoverCardPortal>
      <StyledContent {...props} ref={forwardedRef} sideOffset={4}>
        <ContentContainer>
          <Logo src={props.logo} />
          <TitleContainer>
            <Title>{props.title}</Title>
            <Handle>{props.socialHandle}</Handle>
          </TitleContainer>
          <Description>{props.description}</Description>
          <SocialNumbers>
            <Following>
              <Number>{props.followingCount}</Number>
              <Label>Following</Label>
            </Following>
            <Followers>
              <Number>{props.followersCount}</Number>
              <Label>Followers</Label>
            </Followers>
          </SocialNumbers>
        </ContentContainer>
        <StyledHoverCardArrow />
      </StyledContent>
    </HoverCardPortal>
  )
);
