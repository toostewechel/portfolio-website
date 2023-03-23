import React from "react";
import { styled } from "../../stitches.config.js";
import { ArrowRight } from "lucide-react";
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
  display: "flex",
  flexDirection: "column",
  maxWidth: "768px",
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  paddingInlineStart: "$spacing-07",
  listStyle: "none",
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

const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  marginRight: "8px",
});

const TakeawaysListContainer = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledCollapsibleContent;

export const ListItem = ({ children }) => {
  return (
    <StyledListItem>
      <IconContainer>
        <ArrowRight size={20} />
      </IconContainer>
      {children}
    </StyledListItem>
  );
};

interface Props {
  accentColor: "plum" | "blue" | "crimson" | "violet" | "teal" | "cyan";
  children: React.ReactNode;
}

export const KeyTakeawaysCollapsible = ({ accentColor, children }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Collapsible open={open} onOpenChange={setOpen}>
        <HeaderPanel>
          <Title>Key Takeaways</Title>
          <CollapsibleTrigger asChild>
            <Button color={accentColor}>{open ? "Hide" : "Show"}</Button>
          </CollapsibleTrigger>
        </HeaderPanel>
        <CollapsibleContent>
          <TakeawaysListContainer>
            <TakeawaysList>{children}</TakeawaysList>
          </TakeawaysListContainer>
        </CollapsibleContent>
      </Collapsible>
    </Container>
  );
};
