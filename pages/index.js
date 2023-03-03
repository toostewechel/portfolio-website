import { styled } from "../stitches.config.js";
import { PageLayout, GridWidgetsLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/Header.tsx";
import { Tag } from "../components/tag/Tag.tsx";
import { ChevronsRight } from "lucide-react";
import { ProfileInformation } from "../components/widgets/ProfileInformation.tsx";
import { Snapshot } from "../components/widgets/Snapshot.tsx";
import { BookMeeting } from "../components/widgets/BookMeeting.tsx";
import { Personality } from "../components/widgets/Personality.tsx";
import { CoreCompetencies } from "../components/widgets/CoreCompetencies.tsx";
import { Blogpost } from "../components/widgets/Blogpost.tsx";
import { OperatingPrinciples } from "../components/widgets/OperatingPrinciples.tsx";
import { Experience } from "../components/widgets/Experience.tsx";
import Footer from "../components/layouts/blocks/Footer.js";
import { ArrowUpRight } from "lucide-react";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines-red.svg)",
  backgroundPositionX: "center",
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "232px",
  justifyContent: "center",
  alignItems: "center",
	marginTop: "72px",
});

const HeaderContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
});

const PageHeader = styled("h1", {
  fontSize: "$3xl",
  fontWeight: "$black",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "0",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const LabelContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",

  variants: {
    color: {
      blue: {
        color: "$blue10",
      },
      red: {
        color: "$red10",
      },
      teal: {
        color: "$teal10",
      },
    },
  },
});

const Label = styled("a", {
  fontFamily: "$mono",
  fontWeight: "$medium",
  lineHeight: "$none",
  fontSize: "$base",
	textDecoration: "underline",
});

export default function WidgetsGrid() {
  return (
    <Wrapper>
      <Header></Header>
      <PageLayout>
        <ContentContainer>
					<HeaderContainer>
         		 <PageHeader>Take a Peek</PageHeader>
						<LabelContainer>
							<ArrowUpRight size={24} />
							<Label>Version 1.0</Label>
						</LabelContainer>
					</HeaderContainer>
          <GridWidgetsLayout>
            <ProfileInformation
              tagLabel="Open for Work"
              tagColor="teal"
              hasIcon={false}
              hasJob={false}
            />
            <Snapshot
              type="Case Study"
              title="Build Standardised eHealth Modules for Healthcare"
              language="en"
              backgroundColor="blue"
              backgroundImage="/widgets/case-study-cover.png"
            />
            <BookMeeting />
            <Personality />
            <CoreCompetencies />
            <Blogpost
              color="teal"
              imageSrc="/widgets/blog-cover.png"
              title="Living With a Linear Mind in an Exponential Age"
              description="Why Personal Knowledge Management can help you thrive in an exponential age"
              datePosted="24 February, 2023"
            />
            <OperatingPrinciples />
            <Experience />
          </GridWidgetsLayout>
        </ContentContainer>
      </PageLayout>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
}
