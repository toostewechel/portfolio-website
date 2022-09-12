import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "../../stitches.config.js";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const StyledList = styled(TabsPrimitive.List, {
  display: "flex",
  borderBottom: "1px solid $gray6",
  mb: "$spacing-04",
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$base",
  padding: "$spacing-04",
  color: "$gray11",
  "&:hover": { color: "$violet11" },
  '&[data-state="active"]': {
    color: "$violet11",
    boxShadow: "inset 0 -2px 0 0 currentColor, 0 2px 0 0 currentColor",
  },
  "@bp1": {
    padding: "$spacing-05 $spacing-06",
    fontSize: "$lg",
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  backgroundColor: "white",
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
