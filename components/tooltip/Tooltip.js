import React from "react";
import { styled, keyframes } from "../../stitches.config.js";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

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

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: "4px",
  padding: "$spacing-02 $spacing-03 ",
  backgroundColor: "$mauve12",
  boxShadow: "$xs",
  userSelect: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "150ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const TooltipLabel = styled("p", {
  fontSize: "$xs",
  fontFamily: "$default",
  fontWeight: "$medium",
  color: "$mauveA12",
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$mauve12",
});

const StyledTooltip = styled(TooltipPrimitive.Root, {
  zIndex: "99",
});

function Content({ children, ...props }) {
  return (
    <TooltipPrimitive.Portal>
      <StyledContent {...props}>
        <TooltipLabel>{children}</TooltipLabel>
        <StyledArrow />
      </StyledContent>
    </TooltipPrimitive.Portal>
  );
}

// Exports
export const Provider = TooltipPrimitive.Provider;
export const Tooltip = StyledTooltip;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = Content;
