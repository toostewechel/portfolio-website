import { useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";
import ShareToPopover from "../popover/ShareToPopover.js";
import { ReadingProgressBar } from "../progress/ReadingProgressBar.js";
import { useMediaQuery } from "react-responsive";
import { X } from "lucide-react";
import { IconButton } from "../button/IconButton.tsx";
import AvatarStatusBadgePopover from "../popover/AvatarStatusBadgePopover.js";

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$spacing-04",
  position: "sticky",
  top: -1,
  zIndex: 9999,
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
	backgroundColor: 'white',

	"@bp5": {
		backgroundColor: "white",
	},
	"@bp6": {
		backgroundColor: "transparent",
	},

});

const LogoLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
});

const StyledLogo = styled("img", {
  height: "auto",
  width: "164px",

  "@bp1": {
    width: "232px",
  },
});

interface BlogHeaderProps {
  whatsapp: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  progressBarGradient: string;
  targetRef: any;
}

export const BlogHeader = ({
  whatsapp,
  facebook,
  linkedin,
  twitter,
  targetRef,
  gradient,
}: BlogHeaderProps) => {
  // Make background white if viewport < 1024px and OffsetY > BlogLanding.clientHeight
  const [offsetY, setOffsetY] = useState(0);
  const [landingHeight, setLandingHeight] = useState(0);
  const bp4 = useMediaQuery({ maxWidth: 1234 });
  const bp5 = useMediaQuery({ minWidth: 1440 });

  // Reset viewport height on page render
  useEffect(() => {
    window.scrollTo(0, 0);
    setOffsetY(0);
  }, []);

  // Get height of Landing element
  useEffect(() => {
    setLandingHeight(document.getElementById("landing").clientHeight);
  }, []);

  // Create scroll function to update offsetY state on mouse scroll
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
      <LogoLink href="/">
        <StyledLogo src="/logo/snapshots-labs-logo.png" />
      </LogoLink>
      <Controls>
        <ShareToPopover
          whatsapp={whatsapp}
          facebook={facebook}
          twitter={twitter}
          linkedin={linkedin}
        />
        <ReadingProgressBar targetRef={targetRef} gradient={gradient} />
        <IconButton href="/" ariaLabel="Close" tooltipLabel="Close">
          <X size={20} />
        </IconButton>   
      </Controls>
    </Container>
  );
};


export const Header = ({}) => {
	// Make background white if viewport < 1024px and OffsetY > BlogLanding.clientHeight
  const [offsetY, setOffsetY] = useState(0);
  const [landingHeight, setLandingHeight] = useState(0);
  const bp4 = useMediaQuery({ maxWidth: 1440 });

  // Reset viewport height on page render
  useEffect(() => {
    window.scrollTo(0, 0);
    setOffsetY(0);
  }, []);

  // Create scroll function to update offsetY state on mouse scroll
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
      }}
    >
      <LogoLink href="/">
        <StyledLogo src="/logo/snapshots-labs-logo.png" />
      </LogoLink>
			<AvatarStatusBadgePopover />
     </Container>
  );
}