import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: "1px solid $gray6",
  backgroundColor: "$violet2",
  "&:focus-within": {
    backgroundColor: "$violet3",
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$spacing-05",
  fontFamily: "$header",
  fontSize: "$xl",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  '&[data-state="closed"]': {
    backgroundColor: "white",
  },
  '&[data-state="open"]': {
    backgroundColor: "$violet3",
  },
  "&:hover": {
    backgroundColor: "$violet4",
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  color: "$gray-12",
  backgroundColor: "white",
  borderTop: "1px solid $gray6",
});

const StyledContentText = styled("div", {
  padding: "$spacing-06 $spacing-05 $none $spacing-05",
  fontSize: "$lg",
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray12",
});

const StyledChevron = styled(ArrowRightSLineIcon, {
  color: "$violet11",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(90deg)" },
});

const DecorativeIcon = styled("img", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pr: "$spacing-02",
  width: "24px",
  height: "24px",
  color: "$violet11",

  "@bp1": {
    pr: "$spacing-03",
    width: "32px",
    height: "32px",
  },
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

//exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        <Box>
          {props.icon ? <DecorativeIcon src={props.src} /> : null}
          <div style={{ marginTop: "3px" }}>{props.title}</div>
        </Box>
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
);
export const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);
