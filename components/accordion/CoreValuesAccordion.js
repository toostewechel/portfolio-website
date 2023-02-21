import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
	backgroundColor: "white",
	overflow: "hidden",
	mb: "$spacing-03",
	borderRadius: "6px",
	boxShadow: "-5px 5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(221, 221, 221, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(221, 221, 221, 0.5)",
	
	"@bp1":{
		mb: "$spacing-04",
	}
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
  gap: "$spacing-03",
  pb: "$spacing-02",
});

const LabelIcon = styled("div", {
  width: "13px",
  height: "13px",
  borderRadius: "2px",

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
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: 0,
	
	"@bp1": {
		fontSize: "$xl",
	}
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
    backgroundColor: "white",
  },

  "&:active": {
    transition: "border, 300ms ease-out",
  },
  "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "$white",
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
	padding: "$none $spacing-04 $spacing-05 $spacing-05",
	backgroundColor: "$bronze1",
	
});

const StyledChevron = styled(ChevronRight, {
  color: "$mauve9",
  transition: "transform 200ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { 
		transform: "rotate(90deg)",
		color: "$mauve12",
	},
});

const ValueDescriptionBox = styled("div", {
	
});

const ValueDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
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
          label="Actions and Words Align"
          title="Reliable"
        />
        <AccordionContent color="plum">
          I always try to pull my weight, do my homework, keep my word and follow through, even on the little things, so clients and team members can trust me.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          color="blue"
          label="Circle of Influence"
          title="Pro-active"
        />
        <AccordionContent color="blue">
          I take responsibility and focus my efforts on new initiatives, innovative ideas and complex problems inside my circle of influence; I don't focus on things I can't control.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          color="crimson"
          label="Dive Into the Unknown"
          title="Curiosity"
        />
        <AccordionContent color="crimson">
          I have a deep desire to read, explore, investigate, learn new things, and ask questions to understand the people and world around me better.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          color="violet"
          label="Seek to Understand"
          title="Empathetic"
        />
        <AccordionContent color="violet">
          I have empathy for those around me and always try to actively listen and understand their needs and perspectives first and foremost
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger
          color="teal"
          label="A Rising Tide Lifts All Boats"
          title="Altruistic"
        />
        <AccordionContent color="teal">
           I always try to look for solutions that benefit the majority involved and contribute to whatever needs to be done for the success of the whole and those around me.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger
          color="cyan"
          label="Put First Things First"
          title="Principled"
        />
        <AccordionContent color="cyan">
          I am self-motivated and try to live by being driven by the principles I value most instead of by (hidden) agendas and forces surrounding me.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
