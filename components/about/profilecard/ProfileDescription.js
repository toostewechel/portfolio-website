import React, { useEffect, useState } from "react";
import { styled } from "../../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { useMediaQuery } from "beautiful-react-hooks";
import VisuallyHidden from "../../visuallyhidden/VisuallyHidden.js";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: "100%",
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;

const HeaderPanel = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-02 $none",

  "@bp1": {
    padding: "$spacing-03 $none",
  },
});

const Flex = styled("div", {
  display: "flex",
  minWidth: "0",
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pr: "$spacing-02",
  width: "24px",
  height: "24px",
  color: "$blue11",

  "@bp1": {
    pr: "$spacing-03",
  },
});

const Title = styled("h3", {
  alignSelf: "center",
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const IconButton = styled("button", {
  borderRadius: "4px",
  outlineOffset: "2px",
  ml: "$spacing-03",
  padding: "$spacing-02",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$violet11",
  '&[data-state="closed"]': {
    backgroundColor: "transparent",
  },
  '&[data-state="open"]': {
    backgroundColor: "transparent",
  },
  "&:hover": {
    backgroundColor: "$violet4",
  },
  "&:active": {
    backgroundColor: "$violet5",
  },
  "&:focus": {
    outlineColor: "$violet11",
  },
});

const StyledParagraph = styled("p", {
  fontSize: "$lg",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  mb: "$spacing-07",

  "@bp2": {
    fontSize: "$xl",
  },
});

const StyledSpan = styled("span", {
  backgroundColor: "$crimsonA8",
  padding: "2px",
  borderRadius: "4px",
  color: "$crimson2",
  boxShadow: "$smooth",
})

function ProfileDescription(props) {
  const [open, setOpen] = React.useState(true);
  const [closed, setClosed] = React.useState(false);
  const isTablet = useMediaQuery("(max-width: 768px)");
  React.useEffect(() => {
    setOpen(true);
  }, []);

  if (!setOpen) {
    return null;
  }
  React.useEffect(() => {
    setClosed(false);
  }, []);

  if (!setClosed) {
    return null;
  }

  return (
    <div>
      {isTablet ? (
        <Collapsible open={closed} onOpenChange={setClosed}>
          <HeaderPanel>
            <Flex>
              <Title>About</Title>
            </Flex>
            <CollapsibleTrigger asChild>
              <IconButton>
                {closed ? <CloseLineIcon /> : <MenuLineIcon />}
              </IconButton>
            </CollapsibleTrigger>
          </HeaderPanel>
          <CollapsibleContent>
            <StyledParagraph>I design and build digital products, by <StyledSpan>un•tang•ling </StyledSpan>complexity in a structured, creative and visual way. </StyledParagraph>
            <StyledParagraph> I am <StyledSpan>passionate</StyledSpan> about building useful products that have a real impact.</StyledParagraph>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Collapsible open={open} onOpenChange={setOpen} disabled>
          <HeaderPanel>
            <Flex>
              <Title>About</Title>
            </Flex>
            <VisuallyHidden>
              <CollapsibleTrigger asChild>
                <IconButton>
                  {open ? <CloseLineIcon /> : <MenuLineIcon />}
                </IconButton>
              </CollapsibleTrigger>
            </VisuallyHidden>
          </HeaderPanel>
          <CollapsibleContent>
            <StyledParagraph>I design and build digital products, by <StyledSpan>un•tang•ling </StyledSpan>complexity in a structured, creative and visual way. </StyledParagraph>
            <StyledParagraph> I am <StyledSpan>passionate</StyledSpan> about building useful products that have a real impact.</StyledParagraph>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}

export default ProfileDescription;
