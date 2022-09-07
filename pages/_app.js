// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";
import React, { useEffect } from "react";

//Import global CSS styles
import "../styles/global.css";
import "../styles/fonts.css";
import { styled, color } from "../stitches.config.js";



//Global Command Menu
import KBarMenu from "../components/cmdk/KBarMenu.js";
import { KBarProvider } from "kbar";
import {
  FileText,
  Home,
  Box,
  User,
  Tool,
  AtSign,
  Twitter,
  GitHub,
  Linkedin,
} from "react-feather";

function ScrollToView() {
  return document.getElementById("core").scrollIntoView();
}

const actions = [
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back home",
    perform: () => (window.location.pathname = "/"),
    icon: <Home width={19} height={19} />,
    section: "Home",
  },
  {
    id: "coreValues",
    name: "Core Values",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (ScrollToView()),
    icon: <Box width={19} height={19} />,
    section: "Blog",
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
    icon: <Tool width={19} height={19} />,
    section: "Blog",
  },
  {
    id: "github",
    name: "Github",
    shortcut: ["g"],
    keywords: "github",
    perform: () => (window.location.pathname = "contact"),
    icon: <GitHub width={19} height={19} />,
    section: "Socials",
  },
  {
    id: "twitter",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
    icon: <Twitter width={19} height={19} />,
    section: "Socials",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    shortcut: ["l"],
    keywords: "linkedIn",
    perform: () => (window.location.pathname = "contact"),
    icon: <Linkedin width={19} height={19} />,
    section: "Socials",
  },
];

function MyApp({ Component, pageProps }) {
  return (
    <KBarProvider actions={actions}>
      <KBarMenu />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </KBarProvider>
  );
}

export default MyApp;
