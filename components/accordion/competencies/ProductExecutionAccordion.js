import React from "react";
import { styled } from "../../../stitches.config.js";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../Accordion.js";
import CharacterTrait from "../../readme/CharacterTrait.js";
import Competency from "./Competency.js";
import {
  Database,
  BatteryCharging,
  Trees,
  Lightbulb,
  PersonStanding,
} from "lucide-react";

const AccordionWrapper = styled("div", {
	all: "unset",
	display: "flex",
	width: "100%",
})

export default function ProductExecutionAccordion() {
  return (
		<AccordionWrapper>
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger 
          hasIcon
          Icon={<Database />}
          title="Feature Specification"
        />
        <AccordionContent>
					<Competency 
						helpText="Specialist"
						competencyDescription="The ability to gather requirements, define functionality, and set goals in a clear, actionable format that can be used to communicate with the team and drive product delivery."
						progressValue={85}
						gradient="teal"	
					/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          hasIcon
          Icon={<BatteryCharging />}
          title="Product Delivery"
        />
        <AccordionContent>
          <CharacterTrait
            labelLeft="Intuitive"
            labelRight="Observant"
            percentageLeft="66%"
            percentageRight="34%"
            charactertraitDescription="Primarily Intuitive: You’re likely very imaginative and open-minded, focusing on hidden meanings and distant possibilities."
            progressValue={66}
            gradient="blue"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          hasIcon
          Icon={<Trees />}
          title="Product Quality Assurance"
        />
        <AccordionContent>
          <CharacterTrait
            labelLeft="Feeling"
            labelRight="Thinking"
            percentageLeft="60%"
            percentageRight="40%"
            charactertraitDescription="Primarily Feeling: You likely value emotional expression and sensitivity, prioritising empathy, social harmony, and cooperation."
            progressValue={60}
            gradient="teal"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
			</AccordionWrapper>
  );
}
