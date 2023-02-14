import { useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";
import ShareToPopover from "../popover/ShareToPopover.js";
import { ReadingProgressBar } from "../progress/ReadingProgressBar.js";
import { useMediaQuery } from "react-responsive";

import { X } from "lucide-react";
import {
  Provider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/Tooltip.js";

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-04",
  position: "sticky",
  top: 0,
  zIndex: 9999,
  backgroundColor: "white",

  "@bp5": {
    boxShadow: "none",
    padding: "$spacing-05",
  },
  "@bp6": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});

const ImageLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const StyledLogo = styled("img", {
  height: "auto",
  width: "164px",

  "@bp1": {
    width: "232px",
  },
});

const IconLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  color: "$mauve11",
  padding: "$spacing-04",
  transition: "background 300ms ease-in",
  background: "transparent",
  border: "2px solid transparent",
  outline: 0,
  ml: "$spacing-02",

  "&:hover": {
    transition: "background 300ms ease-out",
    border: "2px solid transparent",
    backgroundColor: "$mauve2",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve2",
    border: "2px solid $blue11",
    color: "$mauve12",
  },
});

export default function Header({
  whatsapp,
  facebook,
  twitter,
  linkedin,
  targetRef,
  progressBarGradient,
}) {
  const [offsetY, setOffsetY] = useState(0);
  const [landingHeight, setLandingHeight] = useState(0);
  const bp4 = useMediaQuery({ maxWidth: 1024 });
  const bp5 = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setLandingHeight(document.getElementById("landing").clientHeight);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOffsetY(0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container
      style={{
        boxShadow:
          offsetY > 0 && bp4
            ? "0 2px 4px -1px  hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px  hsla(214, 50%, 22%, 0.26)"
            : "none",
        backgroundColor: offsetY > landingHeight && bp5 ? "#F8F8F8" : null,
      }}
    >
      <ImageLink href="/">
        <StyledLogo src="/logo/snapshots-labs-logo.png" />
      </ImageLink>
      <Controls>
        <ShareToPopover
          whatsapp={whatsapp}
          facebook={facebook}
          twitter={twitter}
          linkedin={linkedin}
        />
        <ReadingProgressBar
          targetRef={targetRef}
          gradient={progressBarGradient}
        />
        <Provider>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconLink href="/" aria-label="Close">
                <X size={20} />
              </IconLink>
            </TooltipTrigger>
            <TooltipContent sideOffset={4}>Close</TooltipContent>
          </Tooltip>
        </Provider>
      </Controls>
    </Container>
  );
}
