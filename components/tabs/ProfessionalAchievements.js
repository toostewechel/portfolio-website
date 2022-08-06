import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from "../../stitches.config.js";
import ListItem from "../../components/ListItem.js";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: 'column',
  width: "100%",
})

const StyledList = styled(TabsPrimitive.List, {
  display: "flex",
  borderBottom: "1px solid $gray6",
  mb: "$spacing-02",
})

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "header",
  fontWeight: "$semi-bold",
  fontSize: "$base",
  padding: "$spacing-04",
  color: "$gray11",
  '&:hover': { color: "$violet11" },
  '&[data-state="active"]': {
    color: "$violet11",
    fontWeight: "$bold",
    boxShadow: 'inset 0 -2px 0 0 currentColor, 0 2px 0 0 currentColor'
  },
  "@bp1": {
    padding: "$spacing-05",
  }
})

const StyledContent = styled(TabsPrimitive.Content, {
  backgroundColor: "white",
})

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;


export default () => (
  <Tabs defaultValue="experience">
    <TabsList >
      <TabsTrigger value="experience">Experience</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="courses">Courses</TabsTrigger>
    </TabsList>
    <TabsContent value="experience">
      <ListItem
        src="/logo/jouw-omgeving-logo.png"
        title="Jouw Omgeving B.V."
        subtitle="Product Owner"
        description="Responsible for determining a coherent product vision and strategy, prioritizing and maintaining product roadmap & sprint backlog and overseeing all the development stages."
        duration="2020 - 2022"
        location="Utrecht, Netherlands"
      />
      <ListItem
        src="/logo/jouw-omgeving-logo.png"
        title="Jouw Omgeving B.V."
        subtitle="Product Designer - UI/UX"
        description="Responsible for (re)designing platform features, writing user stories and the design and development of a accessible Design System for the Jouw Omgeving platform."
        duration="2018 - 2020"
        location="Utrecht, Netherlands"
      />
      <ListItem
        src="/logo/jouw-omgeving-logo.png"
        title="Jouw Omgeving B.V."
        subtitle="Graduate Intern"
        description="Developed and applied a conceptual framework to translate and embed a existing healthcare 'curriculum' into the Jouw Omgeving e-health application."
        duration="2017 - 2018"
        location="Utrecht, Netherlands"
      />
      <ListItem
        src="/logo/jumbo-supermarkten-logo.png"
        title="Jumbo Supermarkten"
        subtitle="Warehouse Logistics"
        description="Various logistic related activities in a Jumbo Warehouse."
        duration="2009 - 2015"
        location="Raalte, Netherlands"
      />
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
        src="/logo/university-twente-logo.png"
        title="University of Twente"
        subtitle="Master Industrial Design Engineering"
        description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        duration="2015 - 2018"
        location="Enschede, Netherlands"
      />
      <ListItem
        src="/logo/university-twente-logo.png"
        title="University of Twente"
        subtitle="Master Industrial Design Engineering"
        description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        duration="2015 - 2018"
        location="Enschede, Netherlands"
      />
      <ListItem
        src="/logo/university-twente-logo.png"
        title="University of Twente"
        subtitle="Master Industrial Design Engineering"
        description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        duration="2015 - 2018"
        location="Enschede, Netherlands"
      />
    </TabsContent>
  </Tabs>
);