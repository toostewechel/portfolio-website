import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion.js";
import CharacterTrait from "../readme/CharacterTrait";
import {
  Database,
  BatteryCharging,
  Trees,
  Lightbulb,
  PersonStanding,
} from "lucide-react";

export default function CharacterTraitsAccordion() {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          hasIcon
          Icon={<Database />}
          title="Mind"
          src="/icons/money.svg"
        />
        <AccordionContent>
          <CharacterTrait
            labelLeft="Introverted"
            labelRight="Extraverted"
            percentageLeft="57%"
            percentageRight="43%"
            charactertraitDescription="Primarily Introverted: You prefer fewer, yet deep and meaningful, social interactions and feel drawn to calmer environments."
            progressValue={57}
            gradient="blue"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          hasIcon
          Icon={<BatteryCharging />}
          title="Energy"
          src="/icons/hammer-line.svg"
        />
        <AccordionContent>
          <CharacterTrait
            labelLeft="Intuitive"
            labelRight="Observant"
            percentageLeft="66%"
            percentageRight="34%"
            charactertraitDescription="Primarily Intuitive: You’re likely very imaginative and open-minded, focusing on hidden meanings and distant possibilities."
            progressValue={66}
            gradient="plum"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          hasIcon
          Icon={<Trees />}
          title="Nature"
          src="/icons/smartphone.svg"
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
      <AccordionItem value="item-4">
        <AccordionTrigger
          hasIcon
          Icon={<Lightbulb />}
          title="Tactics"
          src="/icons/settings-line.svg"
        />
        <AccordionContent>
          <CharacterTrait
            labelLeft="Judging"
            labelRight="Prospecting"
            percentageLeft="76%"
            percentageRight="24%"
            charactertraitDescription="Primarily Judging: You’re likely decisive, thorough, and highly organised. You value clarity and prefer planning to spontaneity."
            progressValue={57}
            gradient="red"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger
          hasIcon
          Icon={<PersonStanding />}
          title="Identity"
          src="/icons/search-eye-line.svg"
        />
        <AccordionContent>
          <CharacterTrait
            labelLeft="Assertive"
            labelRight="Turbulent"
            percentageLeft="82%"
            percentageRight="18%"
            charactertraitDescription="Primarily Assertive: You’re likely self-assured, even-tempered, and resistant to stress, refusing to worry too much about things."
            progressValue={57}
            gradient="crimson"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
