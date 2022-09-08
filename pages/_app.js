// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";
import React, { useEffect } from "react";

//Import global CSS styles
import "../styles/global.css";
import "../styles/fonts.css";


//Global Command Menu
import { useRouter } from 'next/router'
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
  return document.getElementById("core").scrollIntoView()
}



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const actions = [
    {
      id: "homeAction",
      name: "Home",
      subtitle: "Bring me back home",
      shortcut: ["h"],
      keywords: "back home",
      perform: () => router.push('/'),
      icon: <Home width={19} height={19} />,
      section: "Home",
    },
    {
      id: "coreValues",
      name: "Core Values",
      subtitle: "View my guiding values",
      shortcut: ["v"],
      keywords: "writing words",
      perform: () => router.push('/#core-values'),
      icon: <Box width={19} height={19} />,
      section: "About me",
    },
    {
      id: "projects",
      name: "Projects",
      subtitle: "View a snapshot of my projects",
      shortcut: ["p"],
      keywords: "projects",
      perform: () => (window.location.pathname = "contact"),
      icon: <Tool width={19} height={19} />,
      section: "About me",
    },
    {
      id: "skillset",
      name: "Skillset",
      subtitle: "View my core skills and the things I am learning",
      shortcut: ["s"],
      keywords: "skills",
      perform: () => (window.location.pathname = "contact"),
      icon: <GitHub width={19} height={19} />,
      section: "About me",
    },
    {
      id: "experience",
      name: "Experience",
      subtitle: "View my roles and education",
      shortcut: ["e"],
      keywords: "cv work education",
      perform: () => (window.location.pathname = "contact"),
      icon: <Twitter width={19} height={19} />,
      section: "About me",
    },
    {
      id: "writing",
      name: "Writing",
      subtitle: "View my stories and ideas",
      shortcut: ["w"],
      keywords: "blog writing post",
      perform: () => (window.location.pathname = "contact"),
      icon: <Linkedin width={19} height={19} />,
      section: "About me",
    },
    {
      id: "toolsSoftware",
      name: "Tools & Software",
      subtitle: "View tools and software I use in my daily workflow",
      shortcut: ["t"],
      keywords: "tools apps software",
      perform: () => (window.location.pathname = "contact"),
      icon: <Linkedin width={19} height={19} />,
      section: "About me",
    },
  ];


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
