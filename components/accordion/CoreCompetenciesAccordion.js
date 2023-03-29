import React from "react";
import { styled } from "../../stitches.config.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import ProgressBar from "../progress/Progress";
import QuoteBlock from "../typography/QuoteBlock.js";
import {
  Box,
  RefreshCw,
  ShieldCheck,
  PenTool,
  Megaphone,
  PieChart,
  Map,
  Briefcase,
  LineChart,
  Users,
  Sprout,
  Layers,
} from "lucide-react";
import Competency from "./competencies/Competency.js";

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
  borderBottom: "1px solid $gray6",

  "&:last-child": {
    borderBottom: "none",
  },

  variants: {
    type: {
      nested: {
        boxShadow: "none",
        mb: "$none",
      },
    },
  },

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

const NestedStyledHeaderTrigger = styled(AccordionPrimitive.Trigger, {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
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
  "&:hover": {
    backgroundColor: "$gray2",
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

  "@bp3": {
    position: "unset",
  },

  [`${StyledHeaderTrigger}[data-state="open"] &`]: {
    transform: "rotate(90deg)",
    color: "$mauve12",
  },
});

const NestedStyledChevron = styled(ChevronRight, {
  color: "$mauve9",
  transition: "transform 200ms cubic-bezier(0.87, 0, 0.13, 1)",

  [`${NestedStyledHeaderTrigger}[data-state="open"] &`]: {
    transform: "rotate(90deg)",
    color: "$mauve12",
  },
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

const Content = styled(AccordionPrimitive.Content, {});

const ContentLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$spacing-03",

  "@bp3": {
    flexDirection: "row",
  },
});

const NestedContentLayout = styled(AccordionPrimitive.Content, {
  display: "flex",
  flexDirection: "row",
  padding: "$spacing-03 $spacing-05",
});

const CompetenciesLayout = styled("div", {
  display: "flex",
  width: "100%",

  "@bp3": {
    width: "50%",
  },
});

const QuoteLayout = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "start",
  padding: "$spacing-03 $spacing-10",

  "@bp3": {
    width: "50%",
  },
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: "$spacing-03",
  width: "20px",
  height: "20px",
  color: "$mauve11",
});

const Title = styled("p", {
  fontFamily: "$header",
  fontWeight: "$bold",
  fontSize: "$lg",
  lineHeight: "$none",
  color: "$mauve12",
  mt: "1px",
});

const FlexBox = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = ({
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

export const NestedAccordionTrigger = ({ hasIcon, Icon, title }) => (
  <HeaderPanel>
    <NestedStyledHeaderTrigger>
      <FlexBox>
        {hasIcon ? <DecorativeIcon>{Icon}</DecorativeIcon> : null}
        <Title>{title}</Title>
      </FlexBox>
      <NestedStyledChevron aria-hidden />
    </NestedStyledHeaderTrigger>
  </HeaderPanel>
);

export const AccordionContent = ({ children }) => (
  <Content>
    <ContentLayout>{children}</ContentLayout>
  </Content>
);

export const NestedAccordionContent = ({ children }) => (
  <Content>
    <NestedContentLayout>{children}</NestedContentLayout>
  </Content>
);

export default function CoreCompetenciesAccordion() {
  const [value, setValue] = React.useState(["item-1"]);
  const [nestedValue, setNestedValue] = React.useState(["sub-item-1"]);

  return (
    <Accordion
      type="single"
      collapsible
      value={value}
      onValueChange={(newValue) => setValue(newValue)}
    >
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
            <div style={{ width: "100%" }}>
              <Accordion
                type="multiple"
                defaultValue="sub-item-1"
                collapsible
                value={nestedValue}
                onValueChange={(newValue) => setNestedValue(newValue)}
              >
                <AccordionItem value="sub-item-1" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Box />}
                    title="Feature Specification"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Specialist"
                      competencyDescription="The ability to gather requirements, define functionality, and set goals in a clear, actionable format that can be used to communicate with the team and drive product delivery."
                      progressValue={85}
                      gradient="teal"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-2" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<RefreshCw />}
                    title="Product Delivery"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Specialist"
                      competencyDescription="The ability to work closely with one’s immediate team (engineering, design, etc.) to iteratively and quickly deliver product functionality that accomplishes pre-defined goals."
                      progressValue={80}
                      gradient="teal"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-3" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<ShieldCheck />}
                    title="Product Quality Assurance"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Competent"
                      competencyDescription="The ability to identify, prioritize, and resolve technical, functional, and business quality issues across all devices, countries, and use cases that apply to the product."
                      progressValue={65}
                      gradient="crimson"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CompetenciesLayout>
          <QuoteLayout>
            <QuoteBlock
              quote="Wear the hat of a builder: define, build, and launch well-designed, stable products."
              cite="-- Execute Flawlessly"
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
        <AccordionContent>
          <CompetenciesLayout>
            <div style={{ width: "100%" }}>
              <Accordion
                type="multiple"
                defaultValue="sub-item-1"
                collapsible
                value={nestedValue}
                onValueChange={(newValue) => setNestedValue(newValue)}
              >
                <AccordionItem value="sub-item-1" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<PenTool />}
                    title="User Experience Design"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Specialist"
                      competencyDescription="The ability to define requirements and deliver UX designs that are easy to use, leverage UX best practices, and seamlessly fit together with the predominant UX patterns present in the product"
                      progressValue={75}
                      gradient="teal"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-2" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Megaphone />}
                    title="Voice of Customer"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Competent"
                      competencyDescription="The ability to leverage user feedback in all its forms (from casual conversations to formal studies) to understand how users engage with the product, make better decisions, and drive meaningful outcomes for the business"
                      progressValue={55}
                      gradient="crimson"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-3" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<PieChart />}
                    title="Fluency with Data"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Knowledgeable"
                      competencyDescription="The ability to use data to generate actionable insights, to leverage those insights to achieve goals set for the product, and to connect those quantified goals to meaningful outcomes for the business"
                      progressValue={40}
                      gradient="blue"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CompetenciesLayout>
          <QuoteLayout>
            <QuoteBlock
              quote="Wear the hat of an architect: understand customer needs, generate actionable insights and leverage user feedback"
              cite="-- Empathise Deeply"
            />
          </QuoteLayout>
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
        <AccordionContent>
          <CompetenciesLayout>
            <div style={{ width: "100%" }}>
              <Accordion
                type="multiple"
                defaultValue="sub-item-1"
                collapsible
                value={nestedValue}
                onValueChange={(newValue) => setNestedValue(newValue)}
              >
                <AccordionItem value="sub-item-1" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Map />}
                    title="Product Vision & Roadmapping"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Specialist"
                      competencyDescription="The ability to define an overall vision for the product that connects to the strategy for the team and the company. The ability to define a clear roadmap of prioritised features and initiatives that deliver against that vision."
                      progressValue={70}
                      gradient="teal"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-2" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Briefcase />}
                    title="Strategic Impact"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Knowledgeable"
                      competencyDescription="The ability to understand and contribute to the business strategy for a team and the company overall. The ability to bring strategy to fruition through the consistent delivery of business outcomes."
                      progressValue={35}
                      gradient="blue"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-3" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<LineChart />}
                    title="Business Outcomes"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Knowledgeable"
                      competencyDescription="The ability to drive meaningful outcomes for the business by connecting product functionality and goals to the strategic objectives of the team and the company overall."
                      progressValue={35}
                      gradient="blue"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CompetenciesLayout>
          <QuoteLayout>
            <QuoteBlock
              quote="Wear the hat of a visionary: be the glue that joins the product development and company strategy together."
              cite="-- Navigate Ambiguity"
            />
          </QuoteLayout>
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
        <AccordionContent>
          <CompetenciesLayout>
            <div style={{ width: "100%" }}>
              <Accordion
                type="multiple"
                defaultValue="sub-item-1"
                collapsible
                value={nestedValue}
                onValueChange={(newValue) => setNestedValue(newValue)}
              >
                <AccordionItem value="sub-item-1" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Users />}
                    title="Stakeholder Management"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Competent"
                      competencyDescription="The ability to proactively identify stakeholders impacted by the area of ownership and to work with those stakeholders to factor their requirements into product decisions."
                      progressValue={40}
                      gradient="crimson"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-2" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Sprout />}
                    title="Team Leadership"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Knowledgeable"
                      competencyDescription="The ability to manage and mentor direct reports with the goal of enabling them to deliver on their product areas successfully, continuously improve against these competencies, deliver meaningful business outcomes, and achieve their career objectives."
                      progressValue={25}
                      gradient="blue"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-3" type="nested">
                  <NestedAccordionTrigger
                    hasIcon
                    Icon={<Layers />}
                    title="Managing Up"
                  />
                  <NestedAccordionContent>
                    <Competency
                      helpText="Knowledgeable "
                      competencyDescription="The ability to leverage senior managers and executives in the organisation to help achieve goals, deliver meaningful business outcomes, and positively influence the strategic direction of the team and the company's strategic direction."
                      progressValue={25}
                      gradient="blue"
                    />
                  </NestedAccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CompetenciesLayout>
          <QuoteLayout>
            <QuoteBlock
              quote="Wear the hat of a leader: multiply the impact of people by enabling them to contribute to and own the business impact"
              cite="-- Multiply your Impact"
            />
          </QuoteLayout>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
