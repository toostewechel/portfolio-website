import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "../../stitches.config.js";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
});

const StyledList = styled(TabsPrimitive.List, {
  display: "inline-flex",
  width: "fit-content",
  mb: "$spacing-04",
  padding: "$spacing-02",
  gap: "$spacing-03",
  backgroundColor: "$olive6",
  borderRadius: "6px",
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  padding: "$spacing-03 $spacing-02",
  color: "$gray11",
  "&:hover": { color: "$mauve12" },
  '&[data-state="active"]': {
    color: "$violet12",
    background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
    borderRadius: "4px",
    boxShadow: "$xs",
  },
  "@bp1": {
    padding: "$spacing-03 $spacing-03",
    fontSize: "$base",
  },
});

const StyledContent = styled(TabsPrimitive.Content, {});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
