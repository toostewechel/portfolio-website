import React from 'react';
import { styled, keyframes } from "../../stitches.config.js";
import * as Collapsible from "@radix-ui/react-collapsible";
import CheckboxLineIcon from "remixicon-react/CheckboxLineIcon";
import ArrowDownLineIcon from "remixicon-react/ArrowDownLineIcon";
import ArrowUpLineIcon from "remixicon-react/ArrowUpLineIcon";

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});

const CollapsibleContent = styled(Collapsible.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-in` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});

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
})

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pr: "$spacing-03",
  width: "24px",
  height: "24px",
  color: "$blue11",

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
});

const IconButton = styled("button", {
  borderRadius: "4px",
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
  }
  // Focus & Active state?
})

const Skill = styled('div', {
  backgroundColor: '$blue3',
  borderRadius: "4px",
  borderLeft: "4px solid $blue11",
  padding: "$spacing-03",
  margin: "$spacing-03"
});

const Label = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  letterSpacing: "$tracking-normal",
  color: "$blue11",
})

export default () => {
  const [open, setOpen] = React.useState(false);
  <Collapsible.Root open={open} onOpenChange={setOpen}>
    <HeaderPanel>
      <Flex>
        <DecorativeIcon>
          <CheckboxLineIcon></CheckboxLineIcon>
        </DecorativeIcon>
        <Title>5 core skills</Title>
      </Flex>
      <Collapsible.Trigger asChild>
        <IconButton>{open ? <ArrowUpLineIcon /> : <ArrowDownLineIcon />}</IconButton>
      </Collapsible.Trigger>
    </HeaderPanel>
    <Skill>
      <Label>Discovery process</Label>
    </Skill>
    <CollapsibleContent>
      <Skill>
        <Label>Problem solving</Label>
      </Skill>
      <Skill>
        <Label>Analytical</Label>
      </Skill>
      <Skill>
        <Label>Agile development (scrum)</Label>
      </Skill>
      <Skill>
        <Label>Software delivery</Label>
      </Skill>
    </CollapsibleContent>
  </Collapsible.Root>
}