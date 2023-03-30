import React from "react";
import { styled } from "../../stitches.config.js";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion.js";
import { ShieldAlert, Hand, Lightbulb, ArrowRight } from "lucide-react";

const TakeawaysList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "768px",
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  paddingInlineStart: "$spacing-04",
  listStyle: "none",
  marginBottom: "$spacing-05",
});

const StyledListItem = styled("li", {
  display: "flex",
  marginLeft: "8px",
  marginBottom: "8px",
  alignItems: "flex-start",

  "&:last-child": {
    marginBottom: "0px",
  },
});

const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  marginRight: "8px",
});

const TakeawaysListContainer = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "start",
});

const Strong = styled("span", {
  fontWeight: "$medium",
  color: "$mauve12",
});

export const ListItem = ({ children }) => {
  return (
    <StyledListItem>
      <IconContainer>
        <ArrowRight size={20} />
      </IconContainer>
      <div>{children}</div>
    </StyledListItem>
  );
};

export default function CollaborationAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" type="tile">
        <AccordionTrigger
          hasTag
          label="Tips"
          color="teal"
          hasIcon
          Icon={<Lightbulb />}
          title="I can be helpful for"
          src="/icons/money.svg"
        />
        <AccordionContent>
          <TakeawaysListContainer>
            <TakeawaysList>
              <ListItem>
                <Strong>When words don't work:</Strong> shaping abstract or
                complex ideas into clear, simple narratives, often, supported by
                visuals such as flowcharts and infographics
              </ListItem>
              <ListItem>
                <Strong>As a spider in the web:</Strong> bridge different
                viewpoints and balance perspectives. A broad knowledge of
                different disciplines helps me build empathy and understanding
                between product, engineering and business.
              </ListItem>
              <ListItem>
                <Strong>As a sounding board:</Strong> If you are stuck or have
                trouble generating ideas, I like to think along and ask many
                questions that might provide a different or fresh perspective.
              </ListItem>
              <ListItem>
                <Strong>When you feel you are too busy:</Strong> I invested much
                time into productivity and personal knowledge management. You
                can ask me for advice, tips, and tricks for implementing it into
                your daily workflow.
              </ListItem>
              <ListItem>
                <Strong>When you need a second pair of eyes:</Strong> I have an
                excellent eye for detail and consistency and don't mind
                double-checking things or providing feedback on important
                documents, presentations or other artefacts.
              </ListItem>
            </TakeawaysList>
          </TakeawaysListContainer>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" type="tile">
        <AccordionTrigger
          hasTag
          label="Pitfalls"
          color="crimson"
          hasIcon
          Icon={<ShieldAlert />}
          title="Good to know"
          src="/icons/hammer-line.svg"
        />
        <AccordionContent>
          <TakeawaysListContainer>
            <TakeawaysList>
              <ListItem>
                <Strong>Sensitive to criticism:</Strong> as I always try to put
                great effort into my work, I can become defensive when people
                challenge my work, but only when they do it without sufficient
                argumentation or based on assumptions. I prefer people to be
                clear and explicit rather than passive and presumptuous!
              </ListItem>
              <ListItem>
                <Strong>Reluctant to open up:</Strong> I'm private and don't
                want to burden others with my personal struggles quickly.
                Generally, I don't easily ask for help, but that doesn't always
                mean I don't need it. So, if you see me struggling with
                something, please don't hesitate to give me a nudge!
              </ListItem>
              <ListItem>
                <Strong>Prone to taking on too much work:</Strong> Due to my
                perfectionism, broad interests, and drive to help and support
                others, I sometimes, especially in busy times, get overwhelmed
                with work, taking on too much at the same time.
              </ListItem>
            </TakeawaysList>
          </TakeawaysListContainer>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" type="tile">
        <AccordionTrigger
          hasTag
          label="Preferences"
          color="plum"
          hasIcon
          Icon={<Hand />}
          title="Collaboration preferences"
          src="/icons/smartphone.svg"
        />
        <AccordionContent>
          <TakeawaysListContainer>
            <TakeawaysList>
              <ListItem>
                <Strong>Us versus the problem mentality:</Strong> I believe the
                best work is done with an open, participatory and inclusive
                dialogue between disciplines early on to avoid misalignment,
                confusion and something infeasible to build.
              </ListItem>
              <ListItem>
                <Strong>Bias to building in the open:</Strong> No big reveals
                but a continuous feedback loop; I prefer it when we are
                comfortable sharing unfinished work early and often as it can
                spark inspiration and catch possible friction points and
                trade-offs early in the design process.
              </ListItem>
              <ListItem>
                <Strong>Having a positive mindset:</Strong> Many things can and
                will go wrong while developing products, so I prefer optimistic
                rather than cynical approaches; be flexible, resilient, open to
                change and iteration, and trust that things will always work out
                eventually.
              </ListItem>
              <ListItem>
                <Strong>Don't engage in opinion battles:</Strong> I prefer to
                avoid opinion battles at all costs by taking the time as a
                product team to build a shared understanding of the problem and
                opportunity space by visualising all the options.
              </ListItem>
              <ListItem>
                <Strong>Direct feedback loops:</Strong> If you have feedback for
                me, please give it directly! This is especially true if you see
                me doing something you disagree with or if something is
                bothering you. Through which medium you give it doesn't matter
                to me.
              </ListItem>
              <ListItem>
                <Strong>Hard to reach, easy to find:</Strong> I prefer working
                for extended periods of time with total concentration and no
                distractions. When working in teams, we should respect each
                other priorities and try to reduce shallow work and distractions
                and optimise for deep, uninterrupted work.
              </ListItem>
            </TakeawaysList>
          </TakeawaysListContainer>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
