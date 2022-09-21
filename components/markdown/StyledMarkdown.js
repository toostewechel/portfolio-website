import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";
import UnorderedList from "../typography/UnorderedList.js";
import OrderedList from "../typography/OrderedList.js";
import Link from "../typography/Link.js";
import CodeInline from "../typography/CodeInline.js";
import CodeBlock from "./CodeBlock.js";

function Heading1(props) {
  return <Heading as="h1" title={props.children} level="1" />;
}

export const h1 = Heading1;

function Heading2(props) {
  return <Heading as="h2" title={props.children} level="2" />;
}

export const h2 = Heading2;

function Heading3(props) {
  return <Heading as="h3" title={props.children} level="3" />;
}

export const h3 = Heading3;

function Heading4(props) {
  return <Heading as="h4" title={props.children} level="4" />;
}

export const h4 = Heading4;

function Heading5(props) {
  return <Heading as="h5" title={props.children} level="5" />;
}

export const h5 = Heading5;

function MDXParagraph(props) {
  return <Paragraph>{props.children}</Paragraph>;
}

export const p = MDXParagraph;

function MDXul(props) {
  return <UnorderedList>{props.children}</UnorderedList>;
}

export const ul = MDXul;

function MDXol(props) {
  return <OrderedList>{props.children}</OrderedList>;
}

export const ol = MDXol;

function MDXLink(props) {
  return <Link href={props.href}>{props.children}</Link>;
}

export const a = MDXLink;

function ResponsiveImage(props) {
  return (
    <img
      alt={props.alt}
      style={{ maxWidth: "100%", height: "auto" }}
      {...props}
    />
  );
}

export const img = ResponsiveImage;

function Wrapper(props) {
  return <div>{props.children}</div>;
}

export const wrapper = Wrapper;

function MDXCodeInline(props) {
  return <CodeInline code={props.children} />;
}

export const code = MDXCodeInline;

function MDXCodeBlock(props) {
  return <CodeBlock code={props.children} language="Javascript" />;
}

export const pre = MDXCodeBlock;

const StyledBlockquote = styled("blockquote", {
  pl: "$spacing-06",
  borderLeft: "solid 4px $violet11",

  "& > p": {
    fontFamily: "$default",
    fontSize: "$2xl",
    letterSpacing: "$tracking-tight",
    fontStyle: "italic",
    fontWeight: "$medium",
  },
})

function Blockquote(props) {
  return (
    <StyledBlockquote>
      {props.children}
    </StyledBlockquote>
  );
}

export const blockquote = Blockquote;