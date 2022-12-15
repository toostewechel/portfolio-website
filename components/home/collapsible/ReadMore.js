import React from "react";
import { styled } from "../../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import ArrowDownLineIcon from "remixicon-react/ArrowDownLineIcon";
import ArrowUpLineIcon from "remixicon-react/ArrowUpLineIcon";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {});

const StyledCollapsibleContent = styled(CollapsiblePrimitive.Content, {
  display: "block",
  width: "100%",
});

export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledCollapsibleContent;

const TriggerLink = styled("span", {
  display: "flex",
  gap: "2px",
  alignItems: "center",
  padding: "$none",
});

const Label = styled("p", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",

  "@bp2": {
    fontSize: "$bodyLarge",
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

function ReadMore(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <TriggerLink>
        <Label>Read more</Label>
        <CollapsibleTrigger asChild>
          <IconButton>
            {open ? <ArrowUpLineIcon /> : <ArrowDownLineIcon />}
          </IconButton>
        </CollapsibleTrigger>
      </TriggerLink>
      <CollapsibleContent>
        <p>Text that is closed</p>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default ReadMore;
