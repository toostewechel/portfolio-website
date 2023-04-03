import { styled } from "../../stitches.config.js";

const Link = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledLogo = styled("img", {
  height: "auto",
  width: "164px",

  "@bp1": {
    width: "232px",
  },
});

export default function SiteLogo() {
  return (
    <Link href="/">
      <StyledLogo
        src="/logo/snapshots-labs-logo.png"
        alt="Snapshot Labs Logo"
      />
    </Link>
  );
}
