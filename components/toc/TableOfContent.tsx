import { FC, useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";

const TableOfContentsContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "100%",
  marginTop: "24px",
});

const Content = styled("div", {
  width: "300px",
});

const StyledList = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  paddingInlineStart: 0,
  borderLeft: "1px solid $gray6",
  mt: "$spacing-04",
});

const StyledListItem = styled("li", {
  fontSize: "$xs",
  fontFamily: "$default",
  fontWeight: "$regular",
  color: "$gray10",
  mb: 0,
  padding: "$spacing-03 $spacing-04",
  borderLeft: "1px solid gray6",
});

const FlexContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-02",
  pb: "$spacing-02",
});

const SquareIcon = styled("div", {
  width: "13px",
  height: "13px",
  borderRadius: "4px",
  backgroundColor: "$mauve12",
  ml: "-5px",
  mr: "$spacing-02",
});

const Heading = styled("p", {
  display: "flex",
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$compact",
  letterSpacing: "$tracking-wide",
  fontSize: "$sm",
  color: "$mauve12",
  textTransform: "uppercase",
});

interface Props {
  chapter: string;
}

interface Section {
  topic: string;
  boundingTop: number;
  isActive: boolean;
}

const marginTop = 124;

const TableOfContent: FC<Props> = ({ chapter }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOffsetY(0);
  }, []);

  useEffect(() => {
    const els: HTMLElement[] = Array.from(
      document.querySelectorAll(`section.section-heading-${chapter}`)
    );

    const allSections = els.map((el: HTMLElement, index: number) => {
      const { top: boundingTop } = el.getBoundingClientRect();

      return {
        topic: el.getAttribute("id")!,
        boundingTop,
        isActive: index === 0,
      };
    });

    setSections(allSections);
  }, []);

  useEffect(() => {
    if (sections.length <= 1) return;

    const onScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) return;
    if (sections.length === 1) {
      sections[0].isActive = true;
      return;
    }

    sections.forEach((section: Section, index: number) => {
      if (index === 0) {
        section.isActive =
          sections[index + 1].boundingTop > offsetY + marginTop;
      } else {
        if (sections[index + 1]) {
          section.isActive =
            sections[index + 1].boundingTop > offsetY + marginTop &&
            sections[index].boundingTop <= offsetY + marginTop;
        } else {
          section.isActive = sections[index].boundingTop <= offsetY + marginTop;
        }
      }
    });
  }, [sections, offsetY]);

  return (
    <TableOfContentsContainer>
      <Content>
        <FlexContainer>
          <SquareIcon />
          <Heading>Content</Heading>
        </FlexContainer>
        <StyledList>
          {sections.map((section: Section, index: number) => {
            return (
              <StyledListItem
                key={index}
                style={{
                  borderLeft: section.isActive
                    ? "4px solid #1A1523"
                    : "4px solid transparent",
                }}
              >
                <span
                  onClick={() => {
                    window.scrollTo(0, section.boundingTop - (marginTop - 4));
                    setOffsetY(section.boundingTop - (marginTop - 4));
                  }}
                  style={{
                    textDecoration: "none",
                    color: section.isActive ? "#1A1523" : "gray",
                    cursor: "pointer",
                  }}
                >
                  {section.topic}
                </span>
              </StyledListItem>
            );
          })}
        </StyledList>
      </Content>
    </TableOfContentsContainer>
  );
};

export default TableOfContent;
