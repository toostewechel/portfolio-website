import React from "react";
import { styled } from "../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

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
  padding: "$spacing-04 $none $none $none",
});

const Flex = styled("div", {
  display: "flex",
  minWidth: "0",
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

interface CollapsibleContentProps {
  title: string;
  children: React.ReactNode;
}

export default function CollapsibleContent({
  title,
  children,
}: CollapsibleContentProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <HeaderPanel>
        <Flex>
          <Title>{title}</Title>
        </Flex>
        <CollapsibleTrigger asChild>
          <Button color="teal">{open ? "Hide" : "Show"}</Button>
        </CollapsibleTrigger>
      </HeaderPanel>
      <CollapsiblePanel>{children}</CollapsiblePanel>
    </Collapsible>
  );
}
