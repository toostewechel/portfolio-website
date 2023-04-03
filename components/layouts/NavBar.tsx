import React from "react";
import { styled } from "../../stitches.config.js";
import { LayoutDashboard } from "lucide-react";
import { useRouter } from "next/router";
import CommandDialog from "../cmdk/CommandDialog.js";

const Container = styled("nav", {
  display: "none",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-03",
  gap: "$spacing-02",
  borderRadius: "6px",

  "@bp3": {
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

const MenuItem = ({ href, children }) => {
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
    <ActiveLink href={href} onClick={handleClick}>
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
      <MenuItem href="/">
        <LayoutDashboard size={24} />
      </MenuItem>
      <MenuItem href="/readme">
        <MenuLabel>About</MenuLabel>
      </MenuItem>
      <MenuItem href="/experience">
        <MenuLabel>Experience</MenuLabel>
      </MenuItem>
      <MenuItem href="">
        <MenuLabel>Projects</MenuLabel>
      </MenuItem>
      <MenuItem href="/blog">
        <MenuLabel>Blog</MenuLabel>
      </MenuItem>
      <CommandDialog />
    </Container>
  );
};
