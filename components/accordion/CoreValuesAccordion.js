import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: "1px solid $gray6",
  backgroundColor: "$violet2",
  "&:focus-within": {
    backgroundColor: "$violet3",
  },
});

const HeaderPanel = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",
  pb: "$spacing-02",
});

const LabelIcon = styled("div", {
  width: "13px",
  height: "13px",
  borderRadius: "4px",

  variants: {
    color: {
      plum: {
        backgroundColor: "$plum11",
      },
      blue: {
        backgroundColor: "$blue11",
      },
      crimson: {
        backgroundColor: "$crimson11",
      },
      violet: {
        backgroundColor: "$violet11",
      },
      teal: {
        backgroundColor: "$teal11",
      },
      cyan: {
        backgroundColor: "$cyan11",
      },
    },
  },
});

const Label = styled("p", {
  display: "flex",
  fontSize: "$xs",
  fontWeight: "$medium",
  fontFamily: "$default",

  variants: {
    color: {
      plum: {
        color: "$plum11",
      },
      blue: {
        color: "$blue11",
      },
      crimson: {
        color: "$crimson11",
      },
      violet: {
        color: "$violet11",
      },
      teal: {
        color: "$teal11",
      },
      cyan: {
        color: "$cyan11",
      },
    },
  },
});

const ValueTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$black",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: 0,
});

const StyledHeaderTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$spacing-04 $spacing-05 ",

  '&[data-state="closed"]': {
    backgroundColor: "white",
  },
  '&[data-state="open"]': {
    backgroundColor: "$gray2",
  },

  "&:active": {
    transition: "border, 300ms ease-out",
  },
  "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "$gray2",
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "$gray2",
});

const StyledChevron = styled(ArrowRightSLineIcon, {
  color: "$violet11",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(90deg)" },
});

const ValueDescriptionBox = styled("div", {
  pt: "$spacing-03",
  pb: "$spacing-03",
  marginLeft: "20px",
  mb: "$spacing-05",

  variants: {
    color: {
      plum: {
        borderLeft: "2px solid $plum11",
      },
      blue: {
        borderLeft: "2px solid $blue11",
      },
      crimson: {
        borderLeft: "2px solid $crimson11",
      },
      violet: {
        borderLeft: "2px solid $violet11",
      },
      teal: {
        borderLeft: "2px solid $teal11",
      },
      cyan: {
        borderLeft: "2px solid $cyan11",
      },
    },
  },
});

const ValueDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
  pl: "$spacing-04",
  pr: "$spacing-04",
});

export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <HeaderPanel>
      <StyledHeaderTrigger {...props} ref={forwardedRef}>
        <TitleContainer>
          <LabelContainer>
            <LabelIcon color={props.color} />
            <Label color={props.color}>{props.label}</Label>
          </LabelContainer>
          <ValueTitle>{props.title}</ValueTitle>
        </TitleContainer>
        <StyledChevron aria-hidden />
      </StyledHeaderTrigger>
    </HeaderPanel>
  )
);
export const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent>
      <ValueDescriptionBox color={props.color}>
        <ValueDescription>{children}</ValueDescription>
      </ValueDescriptionBox>
    </StyledContent>
  )
);

export default function CoreValuesAccordion() {
  return (
    <Accordion type="single" collapsible style={{ paddingBottom: "32px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger
          color="plum"
          label="Actions and words align"
          title="Reliable"
        />
        <AccordionContent color="plum">
          I move with intent, keep my word and follow through, even on the
          little things, so clients and team members can put their trust in me
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          color="blue"
          label="Circle of influence"
          title="Pro-active"
        />
        <AccordionContent color="blue">
          I take responsibility and focus my efforts on new initiatives,
          innovative ideas and complex problems inside my circle of influence
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          color="crimson"
          label="Dive into the unknown"
          title="Curious"
        />
        <AccordionContent color="crimson">
          I have a deep desire to explore, investigate and learn new things to
          understand the people and world around me
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          color="violet"
          label="Seek to understand"
          title="Empathetic"
        />
        <AccordionContent color="violet">
          I have empathy for those around me and always try to understand their
          needs and perspectives first and foremost
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger
          color="teal"
          label="Grow the pie together"
          title="Win-Win"
        />
        <AccordionContent color="teal">
          I always try to look for solutions that benefit the majority involved
          in order to collaborate more effectively with others
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger
          color="cyan"
          label="Put first things first"
          title="Autonomous"
        />
        <AccordionContent color="cyan">
          I try to live by being driven by principles I value most instead of by
          (hidden) agendas and forces surrounding me
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
