import React from "react";
import { styled } from "../../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Layers, ArrowUp, ArrowDown } from "lucide-react";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: "100%",
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsiblePanel = CollapsiblePrimitive.Content;

const HeaderPanel = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-04 $spacing-03",
});

const Flex = styled("div", {
  display: "flex",
  minWidth: "0",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "$spacing-02",
  color: "$blue11",

  "@bp1": {
    pr: "$spacing-03",
  },
});

const Title = styled("h3", {
  alignSelf: "center",
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  mt: "$spacing-01",

  "@bp1": {
    fontSize: "$xl;",
  },
});

const Button = styled("button", {
  borderRadius: "4px",
  padding: "$spacing-02 $spacing-03",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$mauve2",

  variants: {
    color: {
      bronze: {
        backgroundColor: "$bronze9",
        "&:hover": {
          backgroundColor: "$bronze3",
        },
      },
      plum: {
        backgroundColor: "$plum10",
        "&:hover": {
          backgroundColor: "$plum11",
        },
      },
      blue: {
        backgroundColor: "$blue10",
        "&:hover": {
          backgroundColor: "$blue11",
        },
      },
      crimson: {
        backgroundColor: "$crimson10",
        "&:hover": {
          backgroundColor: "$crimson11",
        },
      },
      violet: {
        backgroundColor: "$violet10",
        "&:hover": {
          backgroundColor: "$violet11",
        },
      },
      teal: {
        backgroundColor: "$teal10",
        "&:hover": {
          backgroundColor: "$teal11",
        },
      },
      cyan: {
        backgroundColor: "$cyan10",
        "&:hover": {
          backgroundColor: "$teal11",
        },
      },
    },
  },
});

const IconButton = styled("button", {
  borderRadius: "4px",
  outlineOffset: "2px",
  ml: "$spacing-03",
  padding: "$spacing-02",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$violet11",
  '&[data-state="closed"]': {
    backgroundColor: "white",
  },
  '&[data-state="open"]': {
    backgroundColor: "$violet3",
  },
  "&:hover": {
    backgroundColor: "$violet4",
  },
  "&:active": {
    backgroundColor: "$violet5",
  },
  "&:focus": {
    outlineColor: "$violet11",
  },
});

export default function CollapsibleContent({ children }) {
  const [open, setOpen] = React.useState(true);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <HeaderPanel>
        <Flex>
          <Title>Details</Title>
        </Flex>
        <CollapsibleTrigger asChild>
          <Button color="crimson">{open ? "Hide" : "Show"}</Button>
        </CollapsibleTrigger>
      </HeaderPanel>
      <CollapsiblePanel>{children}</CollapsiblePanel>
    </Collapsible>
  );
}
