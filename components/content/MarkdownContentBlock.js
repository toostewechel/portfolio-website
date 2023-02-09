import { MDXProvider } from "@mdx-js/react";
import { styled } from "../../stitches.config.js";
import * as components from "../markdown/StyledMarkdown.js";

import TableOfContent from "../toc/TableOfContent.tsx";

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
	position: "sticky",
	top: "196px",
})

const ContentStyle = styled("div", {
	color: "$gray12",
	width: "100%",
});

function MarkdownContentBlock({ Content, id, chapter }) {
	return (
		<Container id={id}>
			<ContentColumn>
				<MDXProvider components={{ ...components }}>
					<ContentStyle>
						<Content />
					</ContentStyle>
				</MDXProvider>
			</ContentColumn>
			<TableOfContentColumn>
				<TableOfContent chapter={chapter} />
			</TableOfContentColumn>
		</Container>
	);
}

export default MarkdownContentBlock;
