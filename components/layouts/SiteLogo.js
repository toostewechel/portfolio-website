import { styled } from "../../stitches.config.js";
import Image from "next/image";

const Link = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const LogoContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-04",
  alignItems: "center",
});

const SiteTitle = styled("h2", {
  fontFamily: "$header",
  fontWeight: "$black",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tighter",
  fontSize: "$lg",
  color: "$mauve12",

  "@bp3": {
    fontSize: "$xl",
  },
});

export default function SiteLogo() {
  return (
    <Link href="/" aria-label="Navigate Back to Dashboard">
      <LogoContainer>
        <Image
          src="/logo/snapshots-logo-square.png"
          alt="Snapshot Labs Logo"
          width={64}
          height={64}
        />
        <SiteTitle>Snapshot Labs</SiteTitle>
      </LogoContainer>
    </Link>
  );
}
