import React from "react";
import { styled } from "../../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import StackLineIcon from "remixicon-react/StackLineIcon";
import ArrowDownLineIcon from "remixicon-react/ArrowDownLineIcon";
import ArrowUpLineIcon from "remixicon-react/ArrowUpLineIcon";
import Skill from "./Skill.js";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: "100%",
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;

const HeaderPanel = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-02 $none",
  borderBottom: "solid 1px $gray6",
});

const Flex = styled("div", {
  display: "flex",
  minWidth: "0",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pr: "$spacing-02",
  width: "24px",
  height: "24px",
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

  "@bp1": {
    fontSize: "$xl;",
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

function SkillsCore(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <HeaderPanel>
        <Flex>
          <DecorativeIcon>
            <StackLineIcon></StackLineIcon>
          </DecorativeIcon>
          <Title>Core</Title>
        </Flex>
        <CollapsibleTrigger asChild>
          <IconButton>
            {open ? <ArrowUpLineIcon /> : <ArrowDownLineIcon />}
          </IconButton>
        </CollapsibleTrigger>
      </HeaderPanel>
      <Skill backgroundColor="blue" label="Problem Solving" />
      <CollapsibleContent>
        <Skill backgroundColor="blue" label="Design Discovery Process" />
        <Skill backgroundColor="blue" label="Analytical" />
        <Skill backgroundColor="blue" label="Agile Development (scrum)" />
        <Skill backgroundColor="blue" label="Software Delivery" />
      </CollapsibleContent>
    </Collapsible>
  );
}

export default SkillsCore;
