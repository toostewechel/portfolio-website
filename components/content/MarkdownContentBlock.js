import { MDXProvider } from "@mdx-js/react";
import { styled } from "../../stitches.config.js";
import * as components from "../markdown/StyledMarkdown.js";

const Container = styled("div", {
	m: "0 auto",
	maxWidth: "1234px",
	display: "flex",
	flexDirection: "row",
});

const ContentColumn = styled("div", {
	padding: "$spacing-04",
	maxWidth: "768px",
});

const TableOfContentColumn = styled("div", {
	width: "100%",
	margin: "$spacing-04",
	height: "420px",
	backgroundColor: "$gray3",
	position: "sticky",
	top: "88px",
})

const ContentStyle = styled("div", {
	color: "$gray12",
	width: "100%",
});

function MarkdownContentBlock({ Content, id }) {
	return (
		<Container id={id}>
			<ContentColumn>
				<MDXProvider components={{ ...components }}>
					<ContentStyle>
						<Content />
					</ContentStyle>
				</MDXProvider>
			</ContentColumn>
			<TableOfContentColumn></TableOfContentColumn>
		</Container>
	);
}

export default MarkdownContentBlock;
