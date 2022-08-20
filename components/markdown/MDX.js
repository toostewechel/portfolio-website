import Heading from "../typography/Heading.js";
import Paragraph from "../typography/Paragraph.js";
import UnorderedList from "../typography/UnorderedList.js";
import OrderedList from "../typography/OrderedList.js";
import Link from "../typography/Link.js";

function Heading1(props) {
  return (
    <Heading as="h1" title={props.children} level="1" />
  )
}

export const h1 = Heading1;

function Heading2(props) {
  return (
    <Heading as="h2" title={props.children} level="2" />
  )
}

export const h2 = Heading2;

function Heading3(props) {
  return (
    <Heading as="h3" title={props.children} level="3" />
  )
}

export const h3 = Heading3;

function Heading4(props) {
  return (
    <Heading as="h4" title={props.children} level="4" />
  )
}

export const h4 = Heading4;

function Heading5(props) {
  return (
    <Heading as="h5" title={props.children} level="5" />
  )
}

export const h5 = Heading5;

function MDXParagraph(props) {
  return <Paragraph description={props.children} />
}

export const p = MDXParagraph;

function MDXul(props) {
  return <UnorderedList>{props.children}</UnorderedList>
}

export const ul = MDXul;

function MDXol(props) {
  return <OrderedList>{props.children}</OrderedList>
}

export const ol = MDXol;

function MDXLink(props) {
  return <Link href={props.href}>{props.children}</Link>
}

export const a = MDXLink;

function ResponsiveImage(props) {
  return <img style={{ maxWidth: "100%", height: "auto" }} {...props} />
}

export const img = ResponsiveImage;