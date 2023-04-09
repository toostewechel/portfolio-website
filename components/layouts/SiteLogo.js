import { styled } from "../../stitches.config.js";
import Image from "next/image";

const Link = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledLogo = styled(Image, {
  height: "auto",
  width: "196px",

  "@bp1": {
    width: "232px",
  },
});

export default function SiteLogo() {
  return (
    <Link href="/" aria-label="Navigate Back to Dashboard">
      <StyledLogo
        width={492}
        height={168}
        src="/logo/snapshots-labs-logo.png"
        alt="Snapshot Labs Logo"
      />
    </Link>
  );
}
