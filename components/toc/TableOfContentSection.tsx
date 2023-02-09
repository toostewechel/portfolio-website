import { FC, ReactNode } from "react";

import Heading from "../typography/Heading";

interface Props {
  topic: string;
  children: ReactNode;
  chapter: string;
}

const TableOfContentSection: FC<Props> = ({ topic, children, chapter }) => {
  return (
    <section id={topic} className={`section-heading-${chapter}`}>
      <Heading as="h2" title={topic} level="3" />
      <div>{children}</div>
    </section>
  );
};

export default TableOfContentSection;
