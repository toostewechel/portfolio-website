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
		width: "45%",
	},
})
const ContentLayout = styled('div', {
	width: "100%",

	"@bp2": {
		width: "55%",
	},
})

const CoverCardContainer = styled('div', {
	display: 'flex',
	flexDirection: "column",
	gap: "$spacing-06",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",
	borderRadius: "6px",
	width: "100%",
	height: "100%",
	padding: "$spacing-10 $spacing-04",
	boxShadow: "$medium",
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
  fontSize: "$xs",
  lineHeight: "$none",
  color: "$bronze9",

	variants: {
		color: {
			dark: {
				color: "$bronze9",
			},
			light: {
				color: "$bronze3",
			}
		}
	}
})

const CardTitle = styled('p', {
	fontFamily: "$header",
	fontWeight: "$extra-bold",
	letterSpacing: "$tracking-tight",
	lineHeight: "$none",
	mt: "$spacing-03",
	mb: "$spacing-04",
	fontSize: "$4xl",
	color: "$mauve1",
})

const ColoredLine = styled('div', {
	display: "flex",
	width: "132px",
	height: "6px",
	borderRadius: "6px",
	background: "$bronze7",
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
	fontWeight: "$extra-bold",
	letterSpacing: "$tracking-tighter",
	fontSize: "$xl",
	color: "$mauve12",

	variants: {
		color: {
			dark: {
				color: "$mauve12",
			},
			light: {
				color: "$mauve1",
			}
		}
	}
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
  color: "$gray8",
	maxWidth: "380px",
})

const Paragraph = styled("p", {
	fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  color: "$mauve12",
	maxWidth: "480px",
})

export const PersonalityCardCover = () => (
	<CoverCardContainer>
		<TitleContainer>
			<Label color="light">My Personality</Label>
			<CardTitle>Advocate</CardTitle>
			<ColoredLine />
		</TitleContainer>
		<ImageContainer />
		<SummaryContainer>
			<Title color="light">Summary</Title>
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