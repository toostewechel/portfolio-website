import { styled } from "../../../stitches.config.js";
import ContentBlock from "../../layouts/blocks/ContentBlock.js";
import Section from "../../layouts/blocks/Section.js";
import Spacer from "../../layouts/blocks/Spacer.js";
import CoreValueCardNew from "../../card/CoreValueCard.js";

const CoreValuesWrapper = styled("div", {
	position: "relative",
	display: "flex",
	justifyContent: "center",
	maxWidth: "1234px",
	margin: "0 auto",
});

const CoreValueItems = styled("ul", {
	maxWidth: "1234px",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	flexWrap: "wrap",
	padding: "$none",
	listStyle: "none",

	"@bp1": {
		gap: "48px 24px",
	}
});

const CoreValueItem = styled("li", {
	display: "flex",
	flexDirection: "column",
	flex: "0 0 100%",
	height: "auto",
	mb: 0,

	"&:first-child": {
		borderTop: "1px solid $gray6",
	},

	"@bp2": {
		flexBasis: "calc(50% - 12px)",

		"&:first-child": {
			borderTop: 0,
		},
	},

	"@bp4": {
		flexBasis: "calc(calc(100% / 3) - 16px)",
		
		"&:first-child": {
			borderTop: 0,
		},
	},
});

function CoreValuesBlock() {
	return (
		<Section id="core-values">
			<ContentBlock
				heading="Core Values"
				alignment="center"
				description="These values guide me when making decisions, building relationships and solving problems."
				hasButton="true"
				buttonLabel="My User Manual"
			/>
			<Spacer level={6} />
			<CoreValuesWrapper>
				<CoreValueItems>
					<CoreValueItem>
						<CoreValueCardNew color="plum" label="Actions and words align" title="Reliable">
							I move with intent, keep my word and follow through, even on
							the little things, so clients and team members can put their
							trust in me
						</CoreValueCardNew>
					</CoreValueItem>
					<CoreValueItem>
						<CoreValueCardNew color="blue" label="Circle of influence" title="Pro-active">
							I take responsibility and focus my efforts on new initiatives,
							innovative ideas and complex problems inside my circle of
							influence
						</CoreValueCardNew>
					</CoreValueItem>
					<CoreValueItem>
						<CoreValueCardNew color="crimson" label="Dive into the unknown" title="Curious">
							I have a deep desire to explore, investigate and learn new
							things to understand the people and world around me
						</CoreValueCardNew>
					</CoreValueItem>
					<CoreValueItem>
						<CoreValueCardNew color="violet" label="Seek to understand" title="Empathy">
							I have empathy for those around me and always try to
							understand their needs and perspectives first and foremost
						</CoreValueCardNew>
					</CoreValueItem>
					<CoreValueItem>
						<CoreValueCardNew color="teal" label="Grow the pie together" title="Win-Win">
							I always try to look for solutions that benefit the majority
							involved in order to collaborate more effectively with others
						</CoreValueCardNew>
					</CoreValueItem>
					<CoreValueItem>
						<CoreValueCardNew color="cyan" label="Put first things first" title="Autonomous">
							I try to live by being driven by principles I value most
							instead of by (hidden) agendas and forces surrounding me
						</CoreValueCardNew>
					</CoreValueItem>
				</CoreValueItems>
			</CoreValuesWrapper>
		</Section>
	);
}


export default CoreValuesBlock;
