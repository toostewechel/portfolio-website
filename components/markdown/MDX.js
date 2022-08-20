import Heading from "../typography/Heading.js";

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

