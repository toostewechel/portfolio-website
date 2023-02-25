import { styled } from "../stitches.config.js";
import { PageLayout, GridWidgetsLayout } from '../components/layouts/Layout.js';
import Header from "../components/layouts/blocks/Header.js";
import Footer from "../components/layouts/blocks/Footer.js";

const Wrapper =styled("div", {
	backgroundColor: "$olive3",
	backgroundImage: "url(/patterns/grid-lines.svg)",
	backgroundPositionX: "center",
})

const ProfileWidget = styled("div", {
	gridArea: "pf",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const CaseStudyWidget = styled("div", {
	gridArea: "cs",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const BookMeetingWidget = styled("div", {
	gridArea: "bm",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const CoreCompetenciesWidget = styled("div", {
	gridArea: "cc",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const PersonalityWidget = styled("div", {
	gridArea: "pers",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const BlogPostWidget = styled("div", {
	gridArea: "bp",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const CollaborationWidget = styled("div", {
	gridArea: "col",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})

const ExperienceWidget = styled("div", {
	gridArea: "exp",
	display: "flex",
	width: "100%",
	height: "100%",
	backgroundColor: "$olive6",
	boxShadow: "$small",
	borderRadius: "16px",
})


export default function WidgetsGrid() {
	return(
		<Wrapper>
		<Header></Header>
		<PageLayout style={{ marginTop: '156px', display: "flex", justifyContent: "center", marginBottom: '232px' }}>
			<GridWidgetsLayout>
					<ProfileWidget />
					<CaseStudyWidget />
					<BookMeetingWidget />
					<CoreCompetenciesWidget />
					<PersonalityWidget />
					<BlogPostWidget />
					<CollaborationWidget />
					<ExperienceWidget />
			</GridWidgetsLayout>
		</PageLayout>
		<div><Footer /></div>
	</Wrapper>
	)
}