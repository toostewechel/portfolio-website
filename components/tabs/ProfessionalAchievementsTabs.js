import { styled } from "../../stitches.config.js";
import ListItem from "../../components/ListItem.js";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./Tabs.js";
import Card from "../../components/about/pageblocks/Card.js";

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

  "@bp3" : {
    flexDirection: "row",
  }
})

const Column = styled("div", {
  display: "flex",
  flexBasis: "100%",
  flex: 1,
})

function ProfessionalAchievementsTab() {
  return (
    <Tabs defaultValue="experience">
      <TabsList>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="courses">Courses</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <RowContainer>
          <Column>
            <Card />
          </Column>
          <Column>
            <Card />
          </Column>
        </RowContainer>
        <RowContainer>
          <Column>
            <Card />
          </Column>
          <Column></Column>
        </RowContainer>
      </TabsContent>
      <TabsContent value="education">
        <ListItem
          src="/logo/university-twente-logo.png"
          title="University of Twente"
          subtitle="Master Industrial Design Engineering"
          description="Learned how to think outside the box, identify the real problem that needs solving and to effectively and efficiently establish the right development process together with relevant stakeholders."
          duration="2015 - 2018"
          location="Enschede, Netherlands"
        />
        <ListItem
          src="/logo/university-twente-logo.png"
          title="University of Twente"
          subtitle="Minor Medical & Sports Physiology"
          description="Learned the physical and psychological factors involved in sport and exercise participation: ranging from promoting an active healthy lifestyle, to the prevention and rehabilitation of injuries."
          duration="6 months"
          location="Enschede, Netherlands"
        />
        <ListItem
          src="/logo/university-twente-logo.png"
          title="University of Twente"
          subtitle="Bachelor Industrial Design Engineering"
          description="Learned to combine technology and creativity to design and improve products through building a solid foundation in a variety of subjects, from mathematics to graphic design and from ergonomics to marketing. "
          duration="2011 - 2015"
          location="Enschede, Netherlands"
        />
      </TabsContent>
      <TabsContent value="courses">
        <ListItem
          src="/logo/udemy-logo.png"
          title="Git Complete"
          subtitle="Mastering the Modern Workflow"
          description="Learned to build web applications using modern skills, tools and all the best-practices that companies need in developers."
          duration="16 hours"
          location="Udemy - Online Learning"
        />
        <ListItem
          src="/logo/udemy-logo.png"
          title="Javascript"
          subtitle="Basics for beginners"
          description="Learned the basic syntax and programming concepts of JavaScript by completing 30 different exercises and challenges."
          duration="8 hours"
          location="Udemy - Online Learning"
        />
        <ListItem
          src="/logo/udemy-logo.png"
          title="React Front to Back"
          subtitle="Master React Concepts"
          description="Learned the basic programming concepts of the React Framework, while progressively building real world applications."
          duration="12 hours"
          location="Udemy - Online Learning"
        />
      </TabsContent>
    </Tabs>
  );
}

export default ProfessionalAchievementsTab;
