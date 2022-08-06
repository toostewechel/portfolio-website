import React from 'react';
import { styled } from "../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import StackOverflowLineIcon from "remixicon-react/StackOverflowLineIcon";
import ArrowDownLineIcon from "remixicon-react/ArrowDownLineIcon";
import ArrowUpLineIcon from "remixicon-react/ArrowUpLineIcon";

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
  padding: "$spacing-02",
  borderBottom: "solid 1px $gray6",

  '@bp1': {
    padding: "$spacing-03",
  }
})

const Flex = styled("div", {
  display: "flex",
  minWidth: "0px",
})

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pr: "$spacing-03",
  width: "24px",
  height: "24px",
  color: "$violet11",

  '@bp1': {
    pr: "$spacing-02",
  }
})

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
    backgroundColor: "white"
  },
  '&[data-state="open"]': {
    backgroundColor: "$violet3"
  },
  '&:hover': {
    backgroundColor: "$violet4"
  },
  '&:active': {
    backgroundColor: "$violet5"
  },
  '&:focus': {
    outlineColor: "$violet11",
  }
})

const Skill = styled('div', {
  backgroundColor: '$violet3',
  borderRadius: "4px",
  borderLeft: "4px solid $violet11",
  padding: "$spacing-03",
  margin: "$spacing-03"
});

const Label = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$violet11",
})


function SkillsLearning(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <HeaderPanel>
        <Flex>
          <DecorativeIcon>
            <StackOverflowLineIcon></StackOverflowLineIcon>
          </DecorativeIcon>
          <Title>3 Skills Learning</Title>
        </Flex>
        <CollapsibleTrigger asChild>
          <IconButton>{open ? <ArrowUpLineIcon /> : <ArrowDownLineIcon />}</IconButton>
        </CollapsibleTrigger>
      </HeaderPanel>
      <Skill>
        <Label>Front-End Web Development </Label>
      </Skill>
      <CollapsibleContent>
        <Skill>
          <Label>Product Management</Label>
        </Skill>
        <Skill>
          <Label>3D Modelling</Label>
        </Skill>
      </CollapsibleContent>
    </Collapsible>
  )
};


export default SkillsLearning;