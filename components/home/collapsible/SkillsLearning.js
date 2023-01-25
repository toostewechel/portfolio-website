import React from "react";
import { styled } from "../../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Hourglass, ArrowUp, ArrowDown } from "lucide-react";
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
  minWidth: "0px",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "$spacing-02",
  color: "$violet11",

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

function SkillsLearning(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <HeaderPanel>
        <Flex>
          <DecorativeIcon>
            <Hourglass size={20}/>
          </DecorativeIcon>
          <Title>Learning</Title>
        </Flex>
        <CollapsibleTrigger asChild>
          <IconButton>
            {open ? <ArrowUp /> : <ArrowDown />}
          </IconButton>
        </CollapsibleTrigger>
      </HeaderPanel>
      <Skill backgroundColor="violet" label="Front-End Web Development" />
      <CollapsibleContent>
        <Skill backgroundColor="violet" label="Product Management" />
        <Skill backgroundColor="violet" label="3D Modelling" />
        <Skill backgroundColor="violet" label="Knowledge Management" />
      </CollapsibleContent>
    </Collapsible>
  );
}

export default SkillsLearning;
