import React, { useState, useEffect } from "react";
import { styled } from "../../stitches.config.js";
import { IconButton } from "../button/IconButton.tsx";
import { Home, Search } from "lucide-react";
import { useRouter } from "next/router";
import CommandDialog from "../cmdk/CommandDialog.js";
import { motion } from "framer-motion";

const Container = styled("nav", {
  display: "none",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "$spacing-03 $spacing-04",
  gap: "$spacing-03",
  borderRadius: "99px",

  "@bp3": {
    display: "flex",
  },

  "@bp6": {
    background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
    boxShadow: "$xs",
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
    borderRadius: "99px",
    background:
      router.asPath === href
        ? "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)"
        : "transparent",
    boxShadow:
      router.asPath === href ? "0px 2px 2px rgba(0, 0, 0, 0.1)" : "$none",
    color: router.asPath === href ? "$crimson2" : "$mauve11",
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

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scroll down hide the navbar
        setShow(false);
      } else {
        // If scroll up show the navbar
        setShow(true);
      }

      // Remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.div
      animate={{ scale: show ? "1" : "0" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Container>
        <ActiveMenuItem href="/">
          <Home size={20} />
        </ActiveMenuItem>
        <ActiveMenuItem href="/readme">
          <MenuLabel>About</MenuLabel>
        </ActiveMenuItem>
        <ActiveMenuItem href="">
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
