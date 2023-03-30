import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import { ChevronRight } from "lucide-react";
import { Tag } from "../tag/Tag";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: "1px solid $gray6",
  backgroundColor: "white",
  overflow: "hidden",

  variants: {
    type: {
      tile: {
        mb: "$spacing-03",
        boxShadow:
          "-5px 5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(221, 221, 221, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(221, 221, 221, 0.5)",
        borderRadius: "6px",
        borderBottom: "none",
      },
    },
  },

  "&:last-child": {
    borderBottom: "none",
  },

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
  padding: "$spacing-04",
  fontFamily: "$header",
  fontSize: "$xl",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  '&[data-state="closed"]': {
    backgroundColor: "white",
  },
  '&[data-state="open"]': {
    backgroundColor: "white",
  },
  "&:hover": {
    backgroundColor: "$gray2",
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  color: "$gray-12",
  backgroundColor: "white",
});

const StyledContentText = styled("div", {
  padding: "$spacing-05",
  fontSize: "$lg",
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray12",
});

const StyledChevron = styled(ChevronRight, {
  color: "$mauve11",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": {
    transform: "rotate(90deg)",
    color: "$mauve12",
  },
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "20px",
  height: "20px",
  color: "$mauve11",
});

const Title = styled("p", {
  fontFamily: "$header",
  fontWeight: "$bold",
  fontSize: "$lg",
  lineHeight: "$none",
  color: "$mauve12",
  mt: "1px",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
});

//exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
  (
    { children, hasIcon, Icon, hasTag, label, color, title, ...props },
    forwardedRef
  ) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        <Box>
          {hasIcon ? <DecorativeIcon>{Icon}</DecorativeIcon> : null}
          <Title>{title}</Title>
        </Box>
        <Box>
          {hasTag ? <Tag label={label} color={color} /> : null}
          <StyledChevron aria-hidden />
        </Box>
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
