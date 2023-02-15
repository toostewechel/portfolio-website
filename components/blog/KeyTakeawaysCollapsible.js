import React from "react";
import { styled } from "../../stitches.config.js";
import { ArrowRight } from "lucide-react";
import Heading from "../typography/Heading.js";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Container = styled("div", {
  maxWidth: "1234px",
  ml: "auto",
  mr: "auto",
  padding: "$spacing-04",
});

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: "100%",
  border: "1px solid $gray6",
  borderRadius: "6px",
  backgroundColor: "$gray1",
});

const HeaderPanel = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: "$spacing-04",
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
});

const Button = styled("button", {
  borderRadius: "4px",
  padding: "$spacing-02 $spacing-03",
  color: "$crimson1",
  fontFamily: "$default",
  fontWeight: "$medium",

  variants: {
    color: {
      plum: {
        backgroundColor: "$plum10",
        "&:hover": {
          backgroundColor: "$plum11",
        },
      },
      blue: {
        backgroundColor: "$blue10",
        "&:hover": {
          backgroundColor: "$blue11",
        },
      },
      crimson: {
        backgroundColor: "$crimson10",
        "&:hover": {
          backgroundColor: "$crimson11",
        },
      },
      violet: {
        backgroundColor: "$violet10",
        "&:hover": {
          backgroundColor: "$violet11",
        },
      },
      teal: {
        backgroundColor: "$teal10",
        "&:hover": {
          backgroundColor: "$teal11",
        },
      },
      cyan: {
        backgroundColor: "$cyan10",
        "&:hover": {
          backgroundColor: "$teal11",
        },
      },
    },
  },
});

const StyledCollapsibleContent = styled(CollapsiblePrimitive.Content, {
  padding: "$spacing-08 $spacing-04",
  backgroundColor: "$gray2",
  borderTop: "1px solid $gray6",
  borderBottomRightRadius: "6px",
  borderBottomLeftRadius: "6px",
});

const TakeawaysList = styled("ul", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  paddingInlineStart: "$spacing-07",
  listStyle: "none",
  marginLeft: "auto",
  marginRight: "auto",
});

const StyledListItem = styled("li", {
  display: "flex",
  marginLeft: "8px",
  marginBottom: "8px",
  alignItems: "flex-start",

  "&:last-child": {
    marginBottom: "0px",
  },
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledCollapsibleContent;

export const ListItem = ({ children }) => {
  return (
    <StyledListItem>
      <ArrowRight size={24} style={{ marginRight: "8px" }} />
      {children}
    </StyledListItem>
  );
};

export const KeyTakeawaysCollapsible = ({ accentColor, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Collapsible open={open} onOpenChange={setOpen}>
        <HeaderPanel>
          <Title>Key Takeaways</Title>
          <CollapsibleTrigger asChild>
            <Button color={accentColor}>{open ? "Hide" : "Open"}</Button>
          </CollapsibleTrigger>
        </HeaderPanel>
        <CollapsibleContent>
          <TakeawaysList>{children}</TakeawaysList>
        </CollapsibleContent>
      </Collapsible>
    </Container>
  );
};
