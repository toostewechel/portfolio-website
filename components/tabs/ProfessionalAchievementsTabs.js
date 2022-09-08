import { styled } from "../../stitches.config.js";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./Tabs.js";
import { Timeline, TimelineItem } from "../timeline/Timeline.js";
import Card from "../../components/home/pageblocks/Card.js";
import CardHeader from "../card/CardHeader.js";
import CredentialTimelineCard from "../card/CredentialTimelineCard.js";

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",

  "@bp1": {
    fontSize: "$xl",
  },
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  width: "100%",

  "@bp3": {
    flexDirection: "row",
  },
});

const Column = styled("div", {
  display: "flex",
  flexBasis: "100%",
  height: "100%",
  flex: 1,
});

function ProfessionalAchievementsTab() {
  return (
    <Tabs defaultValue="experience">
      <TabsList>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="courses">Courses</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="left"
              year="2022"
            />
            <CredentialTimelineCard
              logo="/logo/jouw-omgeving-logo.png"
              tagColor="plum"
              tagLabel="Full Time"
              title="Product Owner"
              subtitle="Jouw Omgeving"
              description="Responsible for product vision & strategy, prioritising the roadmap & sprint backlog and overseeing all the development stages from customer wish to production deployment."
              duration="2022 - 2020"
              location="Utrecht"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="right"
              year="2018"
            />
            <CredentialTimelineCard
              logo="/logo/jouw-omgeving-logo.png"
              tagColor="plum"
              tagLabel="Full Time"
              title="Product Designer"
              subtitle="Jouw Omgeving"
              description="Responsible for (re)designing platform features, writing user stories and the design of an accessible Design System for the Jouw Omgeving e-Health platform."
              duration="2020 - 2018"
              location="Utrecht"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="left"
              year="2021"
            />
            <CredentialTimelineCard
              logo="/logo/jouw-omgeving-logo.png"
              tagColor="plum"
              tagLabel="Intern"
              title="Graduate Assignment"
              subtitle="Jouw Omgeving"
              description="I developed and applied a conceptual framework to translate and embed an existing healthcare 'curriculum' into the Jouw Omgeving e-health application."
              duration="2018 - 2017"
              location="Utrecht"
              hasLink={true}
              href="/publications/Oostewechel_Tom_DPM1499_Report.pdf"
              tooltipLabel="Download Thesis"
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader color="blue" hasYear={false} alignment="left" />
            <CredentialTimelineCard background="/images/placeholder-timeline-item.png" />
          </TimelineItem>
        </Timeline>
        <RowContainer>
          <Column>
            <Card
              icon="/logo/jouw-omgeving-logo.png"
              title="Product Owner"
              subtitle="Jouw Omgeving | Full-time"
              description="Responsible for product vision & strategy, prioritising the roadmap & sprint backlog and overseeing all the development stages from customer wish to production deployment."
              duration="2018 - 2017"
              location="Utrecht"
              href="https://www.jouwomgeving.nl/"
            />
          </Column>
          <Column>
            <Card
              icon="/logo/jouw-omgeving-logo.png"
              title="Product Designer"
              subtitle="Jouw Omgeving | Full-time"
              description="Responsible for (re)designing platform features, writing user stories and the design of an accessible Design System for the Jouw Omgeving e-Health platform."
              duration="2018 - 2020"
              location="Utrecht"
              href="https://www.jouwomgeving.nl/"
            />
          </Column>
        </RowContainer>
        <RowContainer>
          <Column>
            <Card
              icon="/logo/jouw-omgeving-logo.png"
              title="Graduate Intern"
              subtitle="Jouw Omgeving | Full-time"
              description="I developed and applied a conceptual framework to translate and embed an existing healthcare 'curriculum' into the Jouw Omgeving e-health application."
              duration="2017 - 2018"
              location="Utrecht"
              href="https://www.jouwomgeving.nl/"
            />
          </Column>
          <Column></Column>
        </RowContainer>
      </TabsContent>
      <TabsContent value="education">
        <RowContainer>
          <Column>
            <Card
              icon="/logo/university-twente-logo.png"
              title="Master Industrial Design Engineering"
              subtitle="University of Twente"
              description="Learned how to think outside the box, identify the real problem that needs solving and to effectively and efficiently establish the right development process together with relevant stakeholders."
              duration="2015 - 2018"
              location="Enschede"
              href="https://www.utwente.nl/en/education/master/programmes/industrial-design-engineering/masters-tracks/management-of-product-development/"
            />
          </Column>
          <Column>
            <Card
              icon="/logo/university-twente-logo.png"
              title="Minor Medical & Sports Physiology"
              subtitle="University of Twente"
              description="Learned the physical and psychological factors involved in sport and exercise participation: ranging from promoting an active healthy lifestyle, to the prevention and rehabilitation of injuries."
              duration="2014"
              location="Enschede"
              href="https://www.utwente.nl/"
            />
          </Column>
        </RowContainer>
        <RowContainer>
          <Column>
            <Card
              icon="/logo/university-twente-logo.png"
              title="Bachelor Industrial Design Engineering"
              subtitle="University of Twente"
              description="Learned to combine technology and creativity to design and improve products through building a solid foundation in a variety of subjects, from mathematics to graphic design and from ergonomics to marketing."
              duration="2011 - 2015"
              location="Enschede"
              href="https://www.utwente.nl/en/education/bachelor/programmes/industrial-design-engineering/"
            />
          </Column>
          <Column></Column>
        </RowContainer>
      </TabsContent>
      <TabsContent value="courses">
        <RowContainer>
          <Column>
            <Card
              icon="/logo/udemy-logo.png"
              title="Git Complete"
              subtitle="Mastering the Modern Workflow"
              description="Learned to build web applications using modern skills, tools and all the best-practices that companies need in developers."
              duration="16 hours"
              location="Udemy - Online Learning"
              href="https://www.utwente.nl/en/education/master/programmes/industrial-design-engineering/masters-tracks/management-of-product-development/"
            />
          </Column>
          <Column>
            <Card
              icon="/logo/udemy-logo.png"
              title="Javascript"
              subtitle="Basics for beginners"
              description="Learned the basic syntax and programming concepts of JavaScript by completing 30 different exercises and challenges."
              duration="8 hours"
              location="Udemy - Online Learning"
              href="https://www.utwente.nl/"
            />
          </Column>
        </RowContainer>
        <RowContainer>
          <Column>
            <Card
              icon="/logo/udemy-logo.png"
              title="React Front to Back"
              subtitle="Master React Concepts"
              description="Learned the basic programming concepts of the React Framework, while progressively building real world applications."
              duration="12 hours"
              location="Udemy - Online Learning"
              href="https://www.utwente.nl/en/education/bachelor/programmes/industrial-design-engineering/"
            />
          </Column>
          <Column>
            <Card
              icon="/logo/udemy-logo.png"
              title="Robust Scrum Product Owner"
              subtitle="Level up your Product Owner skills"
              description="Learned about the mindset, the characteristics and different responsibilities of being a Product Owner in a Scrum Team."
              duration="3 hours"
              location="Udemy - Online Learning"
              href="https://www.utwente.nl/en/education/bachelor/programmes/industrial-design-engineering/"
            />
          </Column>
        </RowContainer>
      </TabsContent>
    </Tabs>
  );
}

export default ProfessionalAchievementsTab;
