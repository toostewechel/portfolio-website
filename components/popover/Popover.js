import React from "react";
import { styled, keyframes } from "../../stitches.config.js";
import * as PopoverPrimitive from "@radix-ui/react-popover";

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

const StyledContent = styled(PopoverPrimitive.Content, {
  backgroundColor: "$mauve12",
  boxShadow: "$medium",
  borderRadius: "6px",
  padding: "$spacing-04",
  maxWidth: "320px",
  boxShadow: "$medium",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: "$mauve12",
  stroke: "$mauve12",
  strokeWidth: "1px",
});

function StyledTooltip({ children, ...props }) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </PopoverPrimitive.Portal>
  );
}

const StyledClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  borderRadius: "4px",
  height: "32px",
  width: "32px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve2",
  position: "absolute",
  top: 8,
  right: 8,
  willChange: "transform",
  transition: "all 150ms ease-in",
  background: "transparent",
  color: "$mauveA11",

  "&:hover": {
    transition: "all 150ms ease-out",
    background: "$mauveA6",
    color: "$mauveA12",
  },
  "&:active": {
    backgroundColor: "$mauveA7",
  },
});

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledTooltip;
export const PopoverClose = StyledClose;
