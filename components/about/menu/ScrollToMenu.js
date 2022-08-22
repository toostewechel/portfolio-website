import React, { useEffect, useState } from "react";
import { styled } from "../../../stitches.config.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import MenuItem from "./MenuItem.js";
import { useMediaQuery } from "beautiful-react-hooks";
import VisuallyHidden from "../../VisuallyHidden/VisuallyHidden.js";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: "100%",
});

// const StyledTrigger = styled(CollapsiblePrimitive.Trigger, {
//   '&[data-disabled]': {
//     backgroundColor: "transparent",
//   },
// })

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;

const HeaderPanel = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-02",

  "@bp1": {
    padding: "$spacing-03",
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
    backgroundColor: "$violet3",
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



function ScrollToMenu(props) {
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
      {isTablet ? (<Collapsible open={closed} onOpenChange={setClosed}>
        <HeaderPanel>
          <Flex>
            <Title>Quick Menu</Title>
          </Flex>
          <CollapsibleTrigger asChild>
            <IconButton>{closed ? <CloseLineIcon /> : <MenuLineIcon />}</IconButton>
          </CollapsibleTrigger>
        </HeaderPanel>
        <CollapsibleContent>
          <MenuItem
            href="#values"
            src="/icons/search-eye-line.svg"
            label="Values"
          />
          <MenuItem
            href="#skillset"
            src="/icons/flag-line.svg"
            label="Skillset"
          />
          <MenuItem
            href="#professional-achievements"
            src="/icons/settings-line.svg"
            label="Experience"
          />
          <MenuItem
            href="#software-stack"
            src="/icons/code-slash-line.svg"
            label="Software Stack"
          />
          <MenuItem
            href="#interesets"
            src="/icons/restart-line.svg"
            label="Interests"
          />
          <MenuItem
            href="#contact"
            src="/icons/contacts-book-line.svg"
            label="Contact"
          />
        </CollapsibleContent>
      </Collapsible>) : (<Collapsible open={open} onOpenChange={setOpen} disabled>
        <HeaderPanel>
          <Flex>
            <Title>Quick Menu</Title>
          </Flex>
          <VisuallyHidden>
            <CollapsibleTrigger asChild>
              <IconButton>{open ? <CloseLineIcon /> : <MenuLineIcon />}</IconButton>
            </CollapsibleTrigger>
          </VisuallyHidden>
        </HeaderPanel>
        <CollapsibleContent>
          <MenuItem
            href="#values"
            src="/icons/search-eye-line.svg"
            label="Values"
          />
          <MenuItem
            href="#skillset"
            src="/icons/flag-line.svg"
            label="Skillset"
          />
          <MenuItem
            href="#professional-achievements"
            src="/icons/settings-line.svg"
            label="Experience"
          />
          <MenuItem
            href="#software-stack"
            src="/icons/code-slash-line.svg"
            label="Software Stack"
          />
          <MenuItem
            href="#interesets"
            src="/icons/restart-line.svg"
            label="Interests"
          />
          <MenuItem
            href="#contact"
            src="/icons/contacts-book-line.svg"
            label="Contact"
          />
        </CollapsibleContent>
      </Collapsible>)}

    </div>
  );
}

export default ScrollToMenu;
