import { FC, ReactNode } from 'react';

import Heading from "../typography/Heading";

interface Props {
	topic: string;
	children: ReactNode
	uuid: string;
}

const TableOfContentsItemComponent: FC<Props> = ({ topic, children, chapter }) => {
	return (
		<section id={topic.toLowerCase()} className={`section-heading-${chapter}`}>
			<Heading as="h2" title={topic} level="3" />
			<div>{children}</div>
		</section>
	);
}

export default TableOfContentsItemComponent;