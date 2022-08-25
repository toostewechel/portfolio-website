import { styled } from "../../stitches.config.js";
import {
  Provider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/Tooltip.js";
import { useRouter } from "next/router";

const ToolbarContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "8px",
  padding: "$spacing-03",
  gap: "$spacing-07",
  background: "linear-gradient(0.41deg, #3F1ABC 0.36%, rgba(63, 26, 188, 0.65) 99.65%)",
  boxShadow: "$toolbar",

  "@bp1": {
    display: "flex",
  }
});

const IconButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "$spacing-03",
});

const ShortcutContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  allignItems: "center",
  padding: "$spacing-03 $spacing-05",
  backgroundColor: "$mauveA5",
  boxShadow: "$inset",
  color: "$mauveA12",
  borderRadius: "8px",
  display: "none",

  "@bp3": {
    display: "flex",
  }
});

const ShortcutLabel = styled("p", {
  fontFamily: "$default",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-tight",
  color: "$mauveA12",
  fontSize: "$xl",
  p: "$spacing-01 0px",
});

const Icon = styled("div", {
  display: "flex",
  size: "$5",

  "@bp1": {
    size: "$6",
  }
})

// Make command character useable in React
let command = String.fromCodePoint(8984);

function ActiveLink({ children, href, label }) {
  const router = useRouter();
  const IconLink = styled("a", {
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "$spacing-03",
    willChange: "transform",
    transition:
      "transform 300ms ease-in, background 300ms ease-in, scale 300ms ease-in",
    background: router.asPath === href ? "linear-gradient(180deg, $violetA10, $crimsonA6)" : "transparent",

    "&:hover": {
      scale: 1.05,
      transition:
        "transform 300ms ease-out, background 300ms ease-out, scale 300ms ease-out",
      background: "linear-gradient(180deg, $violetA10, $crimsonA6)",
      boxShadow: "$smooth",
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Provider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconLink href={href} onClick={handleClick}>
            {children}
          </IconLink>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>{label}</TooltipContent>
      </Tooltip>
    </Provider>
  );
}

function Toolbar(href) {
  return (
    <ToolbarContainer>
      <IconButtonContainer>
        <ActiveLink label="Home" href="#home">
          <Icon><img src="/icons/home.svg" /></Icon>
        </ActiveLink>
        <ActiveLink label="Core Values" href="#values">
          <Icon><img src="/icons/values.svg" /></Icon>
        </ActiveLink>
        <ActiveLink label="Case Studies" href="#">
          <Icon><img src="/icons/case-studies.svg" /></Icon>
        </ActiveLink>
        <ActiveLink label="Experience" href="#professional-achievements">
          <Icon><img src="/icons/experience.svg" /></Icon>
        </ActiveLink>
        <ActiveLink label="Writing" href="#">
          <Icon><img src="/icons/writing.svg" /></Icon>
        </ActiveLink>
        <ActiveLink label="Software" href="#software-stack">
          <Icon><img src="/icons/software.svg" /></Icon>
        </ActiveLink>
        <ActiveLink label="Interests" href="">
          <Icon><img src="/icons/interests.svg" /></Icon>
        </ActiveLink>
      </IconButtonContainer>
      <ShortcutContainer>
        <ShortcutLabel>{`${command}K`}</ShortcutLabel>
      </ShortcutContainer>
    </ToolbarContainer>
  );
}

export default Toolbar;
