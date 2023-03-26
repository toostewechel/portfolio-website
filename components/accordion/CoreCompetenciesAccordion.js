import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import ProgressBar from "../progress/Progress";
import ProductExecutionAccordion from "./competencies/ProductExecutionAccordion.js";
import QuoteBlock from "../typography/QuoteBlock.js";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  backgroundColor: "white",
  overflow: "hidden",
  mb: "$spacing-03",
  borderRadius: "6px",
  boxShadow:
    "-5px 5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(221, 221, 221, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(221, 221, 221, 0.5)",

  "@bp1": {
    mb: "$spacing-04",
  },
});

const HeaderPanel = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

const ContentContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "$spacing-03",
});

const Avatar = styled("img", {
  width: "64px",
  height: "64px",

  "@bp2": {
    width: "80px",
    height: "80px",
  },
});

const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "$none",
  width: "200px",
});

const Subtitle = styled("p", {
  fontSize: "$xs",
  fontWeight: "$regular",
  fontStyle: "italic",
  fontFamily: "$default",
  color: "$mauve12",

  "@bp2": {
    fontSize: "$sm",
  },
});

const RoleTitle = styled("h4", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: 0,

  "@bp2": {
    fontSize: "$xl",
  },
});

const StyledHeaderTrigger = styled(AccordionPrimitive.Trigger, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "start",
  gap: "$spacing-05",
  padding: "$spacing-03 $spacing-04 ",

  "@bp2": {
    padding: "$spacing-04 $spacing-05 ",
  },

  "@bp3": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

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

const StyledChevron = styled(ChevronRight, {
  position: "absolute",
  right: 16,
  top: 24,
  color: "$mauve9",
  transition: "transform 200ms cubic-bezier(0.87, 0, 0.13, 1)",

  "@bp2": {
    right: 24,
    top: 40,
  },

  "[data-state=open] &": {
    transform: "rotate(90deg)",
    color: "$mauve12",
  },
});

const ValueDescriptionBox = styled("div", {});

const ValueDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
});

const ProgressBarContainer = styled("div", {
  width: "100%",

  "@bp3": {
    width: "320px",
  },
});

const PlaceholderChevron = styled("div", {
  display: "none",

  "@bp3": {
    width: "64px",
    display: "flex",
  },
  "@bp4": {
    width: "200px",
  },
});

const ContentLayout = styled(AccordionPrimitive.Content, {
  display: "flex",
  flexDirection: "row",
});

const CompetenciesLayout = styled("div", {
  display: "flex",
  width: "50%",
});

const QuoteLayout = styled("div", {
  display: "flex",
  width: "50%",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-10",
});

export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = ({
  children,
  avatarSrc,
  roleTitle,
  roleSubtitle,
  gradient,
  progressValue,
  helpText,
}) => (
  <HeaderPanel>
    <StyledHeaderTrigger>
      <ContentContainer>
        <Avatar src={avatarSrc} />
        <TitleContainer>
          <RoleTitle>{roleTitle}</RoleTitle>
          <Subtitle>{roleSubtitle}</Subtitle>
        </TitleContainer>
      </ContentContainer>
      <ProgressBarContainer>
        <ProgressBar
          gradient={gradient}
          progressValue={progressValue}
          helpText={helpText}
        />
      </ProgressBarContainer>
      <PlaceholderChevron></PlaceholderChevron>
      <StyledChevron aria-hidden />
    </StyledHeaderTrigger>
  </HeaderPanel>
);

export const AccordionContent = ({ children }) => (
  <ContentLayout>{children}</ContentLayout>
);

export default function CoreCompetenciesAccordion() {
  return (
    <Accordion type="single" collapsible style={{ paddingBottom: "32px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger
          avatarSrc="/avatar/product-builder.png"
          roleTitle="Product Builder"
          roleSubtitle="Product Execution"
          gradient="teal"
          progressValue={80}
          helpText="Specialist"
        />
        <AccordionContent>
          <CompetenciesLayout>
            <ProductExecutionAccordion />
          </CompetenciesLayout>
          <QuoteLayout>
            <QuoteBlock
              quote="Wear the hat of a builder: define, build, and launch well-designed, stable products."
              cite="-- Execute flawlessly"
            />
          </QuoteLayout>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          avatarSrc="/avatar/product-architect.png"
          roleTitle="Product Architect"
          roleSubtitle="Customer Insight"
          gradient="crimson"
          progressValue={60}
          helpText="Competent"
        />
        <AccordionContent color="plum">
          I always try to pull my weight, do my homework, keep my word and
          follow through, even on the little things, so clients and team members
          can trust me.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          avatarSrc="/avatar/visionary.png"
          roleTitle="Visionary"
          roleSubtitle="Product Strategy"
          gradient="crimson"
          progressValue={50}
          helpText="Competent"
        />
        <AccordionContent color="plum">
          I always try to pull my weight, do my homework, keep my word and
          follow through, even on the little things, so clients and team members
          can trust me.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          avatarSrc="/avatar/team-leader.png"
          roleTitle="Team Leader"
          roleSubtitle="Influencing People"
          gradient="blue"
          progressValue={30}
          helpText="Knowledgeable"
        />
        <AccordionContent color="plum">
          I always try to pull my weight, do my homework, keep my word and
          follow through, even on the little things, so clients and team members
          can trust me.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
