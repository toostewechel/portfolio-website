import React from "react";
import { styled, keyframes } from "../../../stitches.config.js";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import { useRouter } from "next/router";

const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: "relative",
  display: "flex",
  zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  paddingInlineStart: 0,
  boxShadow: "0 2px 10px $blackA7",
  margin: 0,

  "& > li": {
    marginBottom: 0,
  },
});

const itemStyles = {
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  marginBottom: "none",
  padding: "$spacing-03",
  borderRadius: 4,
  border: "2px solid transparent",
  color: "$violet11",
  "&:active": { backgroundColor: "$mauve3" },
  "&:focus": {
    boxShadow: "0 0 0 2px $violet7",
    border: "2px solid $blue11",
    backgroundColor: "$mauve3",
  },
  "&:hover": { backgroundColor: "$mauve3" },
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  width: "164px",
  "@media only screen and (min-width: 600px)": { width: "232px" },
  animationDuration: "250ms",
  animationTimingFunction: "ease",
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 10,
  width: "100%",
  backgroundColor: "white",
  borderRadius: 6,
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  "@media only screen and (min-width: 600px)": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
});

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  top: "100%",
  right: 0,
  perspective: "2000px",
});

const MenuItem = ({ href, children, ariaLabel }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const ActiveLink = styled("a", {
    display: "flex",
    width: "100%",
    padding: "$spacing-03",
    borderRadius: "4px",
    background: router.asPath === href ? "$mauve12" : "transparent",
    boxShadow:
      router.asPath === href ? "0px 2px 2px rgba(0, 0, 0, 0.1)" : "$none",
    color: router.asPath === href ? "$mauve3" : "$mauve11",

    "&:hover": {
      color: router.asPath === href ? "$mauve1" : "$mauve12",
      background: router.asPath === href ? "$mauve12" : "rgba(0, 0, 0, 0.05)",
    },
    "&:focus": {
      color: router.asPath === href ? "$mauve1" : "$mauve11",
    },
  });

  return (
    <ActiveLink aria-label={ariaLabel} href={href} onClick={handleClick}>
      {children}
    </ActiveLink>
  );
};

const MenuLabel = styled("p", {
  display: "flex",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$xs",
});

const LinkContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$spacing-03",
});

const NavigationMenuMobile = () => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          <NavigationMenuTrigger aria-label="Open Menu">
            <Menu size={24} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <LinkContainer>
              <MenuItem ariaLabel="Dashboard Page" href="/">
                <MenuLabel>Dashboard</MenuLabel>
              </MenuItem>
              <MenuItem ariaLabel="About Me Page" href="/readme">
                <MenuLabel>About</MenuLabel>
              </MenuItem>
              <MenuItem ariaLabel="My Experience Page" href="/experience">
                <MenuLabel>Experience</MenuLabel>
              </MenuItem>
              <MenuItem ariaLabel="Project Page" href="/projects">
                <MenuLabel>Projects</MenuLabel>
              </MenuItem>
              <MenuItem ariaLabel="Blogpost Page" href="/blog">
                <MenuLabel>Blog</MenuLabel>
              </MenuItem>
            </LinkContainer>
          </NavigationMenuContent>
        </NavigationMenu.Item>
      </NavigationMenuList>
      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

export default NavigationMenuMobile;
