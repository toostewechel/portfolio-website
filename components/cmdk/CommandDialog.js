import React from 'react';
import { styled, keyframes } from "../../stitches.config.js";
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import CMDK from "./CMDK.tsx";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 } ,
});

const StyledDialog = styled(DialogPrimitive.Root, {});

const StyledDialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$blackA9",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "150ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': { animationName: fadeIn },
    '&[data-state="closed"]': { animationName: fadeOut },
  },
})

const StyledDialogContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: "6px",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "640px",
  maxHeight: "85vh",
  padding: "12px",
})

const StyledDialogTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: "$extra-bold",
  fontFamily: "$heading",
  fontSize: "$base",
  color: "$mauve12",
})

const StyledDialogDescription = styled(DialogPrimitive.Description, {
  margin: "10px 0 20px",
  color: "$mauve11",
  fontFamily: "$default",
  lineHeight: "$base",
})

const IconButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$violet11",
  size: "$7",
  margin: "$spacing-02",
  borderRadius: "8px",
  willChange: "transform",
  transition: "transform 300ms ease-in, background 300ms ease-in",
  background: "transparent",

  "&:hover": {
    transition: "transform 300ms ease-out, background 300ms ease-out",
    background: "$violet3",
  },

  "&:active": { backgroundColor: "$violet4" },
});

const Icon = styled("div", {
  $size: "$7",
});

// Exports
export const Dialog = StyledDialog;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogOverlay = StyledDialogOverlay;
export const DialogContent = StyledDialogContent;
export const DialogTitle = StyledDialogTitle;
export const DialogDescription = StyledDialogDescription;
export const DialogClose = DialogPrimitive.Close;

const CommandDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <IconButton>
        <SearchLineIcon size={19} />
      </IconButton>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay/>
      <DialogContent>
        <p>Render Command Menu</p>
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export default CommandDialog;