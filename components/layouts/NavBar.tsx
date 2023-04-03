import React, { useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";
import { LayoutDashboard } from "lucide-react";
import { useRouter } from "next/router";
import CommandDialog from "../cmdk/CommandDialog.js";
import { motion } from "framer-motion";

const Container = styled("nav", {
  display: "none",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-03",
  gap: "$spacing-03",
  borderRadius: "6px",

  "@bp3": {
    display: "flex",
  },

  "@bp6": {
    background: "rgba( 255, 255, 255, 0.65 )",
    boxShadow: "$small",
    backdropFilter: "blur(4px)",
    webkitBackdropFilter: "blur(4px)",
    borderRadius: "12px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
});

const ActiveMenuItem = ({ href, children }) => {
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
    background: router.asPath === href ? "$gray4" : "transparent",
    boxShadow:
      router.asPath === href ? "0px 2px 2px rgba(0, 0, 0, 0.1)" : "$none",
    color: router.asPath === href ? "$mauve12" : "$mauve11",
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
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <motion.div
      animate={{ scale: show ? "1" : "0" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Container>
        <ActiveMenuItem href="/">
          <LayoutDashboard size={24} />
        </ActiveMenuItem>
        <ActiveMenuItem href="/readme">
          <MenuLabel>About</MenuLabel>
        </ActiveMenuItem>
        <ActiveMenuItem href="/experience">
          <MenuLabel>Experience</MenuLabel>
        </ActiveMenuItem>
        <ActiveMenuItem href="">
          <MenuLabel>Projects</MenuLabel>
        </ActiveMenuItem>
        <ActiveMenuItem href="/blog">
          <MenuLabel>Blog</MenuLabel>
        </ActiveMenuItem>
        <CommandDialog />
      </Container>
    </motion.div>
  );
};
