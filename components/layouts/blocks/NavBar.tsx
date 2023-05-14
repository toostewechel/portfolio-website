import React from "react";
import { styled } from "../../../stitches.config.js";
import { LayoutDashboard } from "lucide-react";
import { useRouter } from "next/router";
import CommandDialog from "../../cmdk/CommandDialog.js";

const Container = styled("nav", {
  display: "none",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-03",
  gap: "$spacing-02",
  borderRadius: "6px",

  "@bp4": {
    display: "flex",
  },

  "@bp6": {
    background: "rgba( 255, 255, 255, 0.65 )",
    boxShadow: "$small",
    backdropFilter: "blur(4px)",
    webkitBackdropFilter: "blur(4px)",
    borderRadius: "6px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
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
    background: router.asPath === href ? "$crimson10" : "transparent",
    boxShadow:
      router.asPath === href ? "0px 2px 2px rgba(0, 0, 0, 0.1)" : "$none",
    color: router.asPath === href ? "$crimson3" : "$mauve11",

    "&:hover": {
      color: router.asPath === href ? "$crimson1" : "$mauve11",
      background: router.asPath === href ? "$crimson10" : "rgba(0, 0, 0, 0.05)",
    },
    "&:focus": {
      color: router.asPath === href ? "$crimson1" : "$mauve11",
    },
  });

  return (
    <ActiveLink aria-label={ariaLabel} href={href} onClick={handleClick}>
      {children}
    </ActiveLink>
  );
};

const MenuItemReload = ({ href, children, ariaLabel }) => {
  const router = useRouter();

  const ActiveLink = styled("a", {
    display: "flex",
    width: "100%",
    padding: "$spacing-03",
    borderRadius: "4px",
    background: router.asPath === href ? "$crimson10" : "transparent",
    boxShadow:
      router.asPath === href ? "0px 2px 2px rgba(0, 0, 0, 0.1)" : "$none",
    color: router.asPath === href ? "$crimson3" : "$mauve11",

    "&:hover": {
      color: router.asPath === href ? "$crimson1" : "$mauve11",
      background: router.asPath === href ? "$crimson10" : "rgba(0, 0, 0, 0.05)",
    },
    "&:focus": {
      color: router.asPath === href ? "$crimson1" : "$mauve11",
    },
  });

  return (
    <ActiveLink aria-label={ariaLabel} href={href}>
      {children}
    </ActiveLink>
  );
};

const MenuLabel = styled("p", {
  display: "flex",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
});

export const NavBar = ({}) => {
  return (
    <Container>
      <MenuItem ariaLabel="Dashboard Page" href="/">
        <LayoutDashboard size={24} />
      </MenuItem>
      <MenuItemReload ariaLabel="About Me Page" href="/readme">
        <MenuLabel>About</MenuLabel>
      </MenuItemReload>
      <MenuItem ariaLabel="My Experience Page" href="/experience">
        <MenuLabel>Experience</MenuLabel>
      </MenuItem>
      <MenuItem ariaLabel="Project Page" href="/projects">
        <MenuLabel>Projects</MenuLabel>
      </MenuItem>
      <MenuItem ariaLabel="Blogpost Page" href="/blog">
        <MenuLabel>Blog</MenuLabel>
      </MenuItem>
      <CommandDialog />
    </Container>
  );
};
