import { styled } from "../../stitches.config.js";
import CharacterTraitsAccordion from "../accordion/CharacterTraitsAccordion.js";

// Layouts Component
const CardLayout = styled('div', {
	display: 'flex',
	flexDirection: "column",
	padding: "$spacing-06",
	width: "100%",
	backgroundColor: "white",
	borderRadius: "12px",
	boxShadow: "$medium",

	"@bp2": {
		flexDirection: "row",
	},
})
const CoverLayout = styled('div', {
	width: "100%",

	"@bp2": {
		width: "50%",
	},
})
const ContentLayout = styled('div', {
	width: "100%",

	"@bp2": {
		width: "50%",
	},
})

const CoverCardContainer = styled('div', {
	display: 'flex',
	flexDirection: "column",
	gap: "$spacing-06",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	background: "linear-gradient(138.88deg, #F8F1EE 0.36%, #E5DFD0 93.42%)",
	borderRadius: "6px",
	width: "100%",
	height: "100%",
	padding: "$spacing-10 $spacing-04",
	boxShadow: "-3px 3px 6px rgba(203, 194, 184, 0.2), 3px -3px 6px rgba(203, 194, 184, 0.2), -3px -3px 6px rgba(255, 248, 234, 0.9), 3px 3px 8px rgba(203, 194, 184, 0.9), inset 1px 1px 2px rgba(255, 248, 234, 0.3), inset -1px -1px 2px rgba(203, 194, 184, 0.5)",
})

const ContentContainer = styled('div', {
	display: 'flex',
	flexDirection: "column",
	gap: "$spacing-08",
	justifyContent: "center",
	alignItems: "start",
	padding: "$spacing-08",
})

const DescriptionBox = styled('div', {
	display: "flex",
	flexDirection: "column", 
	alignItems: "start",
	gap: "$spacing-02",
	width: "100%",
})

const TitleContainer = styled('div', {
	display: 'flex',
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
})

const Label = styled('p', {
	fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: "$none",
  color: "$bronze9",
})

const CardTitle = styled('p', {
	fontFamily: "$header",
	fontWeight: "$black",
	letterSpacing: "$tracking-tighter",
	fontSize: "$4xl",
	color: "$mauve12",
})

const ColoredLine = styled('div', {
	display: "flex",
	width: "132px",
	height: "8px",
	borderRadius: "6px",
	background: "$bronze8",
})

const ImageContainer = styled('div', {
	width: "500px",
	height: "400px",
	backgroundImage: "url(/readme/advocate.png)",
	backgroundSize: "contain",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	zIndex: "3",
})

const Title = styled('p', {
	fontFamily: "$header",
	fontWeight: "$black",
	letterSpacing: "$tracking-tight",
	fontSize: "$xl",
	color: "$mauve12",
})

const SummaryContainer = styled('div', {
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-02",
})

const CardDescription = styled("p", {
	fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$base",
  color: "mauve12",
	maxWidth: "380px",
})

const Paragraph = styled("p", {
	fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  color: "mauve12",
	maxWidth: "480px",
})

export const PersonalityCardCover = () => (
	<CoverCardContainer>
		<TitleContainer>
			<Label>My Personality</Label>
			<CardTitle>Advocate</CardTitle>
			<ColoredLine />
		</TitleContainer>
		<ImageContainer />
		<SummaryContainer>
			<Title>Summary</Title>
			<CardDescription>Advocates are Introverted, Intuitive, Feeling, Judging and Assertive. They approach life with thoughtfulness and imagination, guided by their principled version of humanism.</CardDescription>
		</SummaryContainer>
	</CoverCardContainer>
)

export const PersonalityCardContent = () => (
	<ContentContainer>
		<DescriptionBox>
			<Label>My Strategy</Label>
			<Title>Confident Individualist</Title>
			<Paragraph>Prefers doing things alone, choosing to rely on their own skills and instincts instead of seeking contact with other people. They know what they are good at.</Paragraph>
		</DescriptionBox>
		<DescriptionBox>
			<Label>My Role</Label>
			<Title>Diplomat</Title>
			<Paragraph>Prefers working collaboratively rather than competing with their peers. Understands others and themselves. Imaginative and empathic, often a harmoniser in group settings.</Paragraph>
		</DescriptionBox>
		<DescriptionBox>
			<Label>My Character</Label>
			<Title>Traits</Title>
			<CharacterTraitsAccordion />
		</DescriptionBox>
	</ContentContainer>
)


export default function PersonalityCard() {
	return (
		<CardLayout>
			<CoverLayout>
				<PersonalityCardCover />
			</CoverLayout>
			<ContentLayout>
				<PersonalityCardContent />
			</ContentLayout>
		</CardLayout>
	)
}