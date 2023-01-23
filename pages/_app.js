// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";
import React, { useEffect } from "react";

//Import global CSS styles
import "../styles/global.css";
import "../styles/fonts.css";
import "../styles/cmdk/vercel.scss";
import "../styles/cmdk/styles.css";

//Global Command Menu
import { useRouter } from "next/router";
import KBarMenu from "../components/cmdk/KBarMenu.js";
import { KBarProvider } from "kbar";
import {
  HomeIcon,
  CoreValueIcon,
  ProjectIcon,
  SkillsetIcon,
  ExperienceIcon,
  WritingIcon,
  ToolsIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../components/cmdk/Icons.js";

function ScrollToView() {
  return document.getElementById("core").scrollIntoView();
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
      perform: () => router.push("/"),
      icon: <HomeIcon />,
    },
    {
      id: "coreValues",
      name: "Core Values",
      subtitle: "View my guiding values",
      shortcut: ["v"],
      keywords: "writing words",
      perform: () => router.push("/#core-values"),
      icon: <CoreValueIcon />,
      section: "About me",
    },
    {
      id: "projects",
      name: "Projects",
      subtitle: "View a snapshot of my projects",
      shortcut: ["p"],
      keywords: "projects",
      perform: () => router.push("/#projects"),
      icon: <ProjectIcon />,
      section: "About me",
    },
    {
      id: "skillset",
      name: "Skillset",
      subtitle: "View my core skills and the things I am learning",
      shortcut: ["s"],
      keywords: "skills",
      perform: () => router.push("/#skillset"),
      icon: <SkillsetIcon />,
      section: "About me",
    },
    {
      id: "experience",
      name: "Experience",
      subtitle: "View my roles and education",
      shortcut: ["e"],
      keywords: "cv work education",
      perform: () => router.push("/#experience"),
      icon: <ExperienceIcon />,
      section: "About me",
    },
    {
      id: "writing",
      name: "Writing",
      subtitle: "View my stories and ideas",
      shortcut: ["w"],
      keywords: "blog writing post",
      perform: () => router.push("/#writing"),
      icon: <WritingIcon />,
      section: "About me",
    },
    {
      id: "toolsSoftware",
      name: "Tools & Software",
      subtitle: "View tools and software I use in my daily workflow",
      shortcut: ["t"],
      keywords: "tools apps software",
      perform: () => router.push("/#software"),
      icon: <ToolsIcon />,
      section: "About me",
    },
    {
      id: "twitter",
      name: "Twitter",
      subtitle: "View my Twitter profile",
      shortcut: ["e"],
      keywords: "tweet twitter social media",
      perform: () => router.push("https://twitter.com/boonikad93"),
      icon: <TwitterIcon />,
      section: "Socials",
    },
    {
      id: "github",
      name: "GitHub",
      subtitle: "View my GitHub profile",
      shortcut: ["w"],
      keywords: "development github",
      perform: () => router.push("https://github.com/toostewechel"),
      icon: <GithubIcon />,
      section: "Socials",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      subtitle: "View my LinkedIn profile",
      shortcut: ["t"],
      keywords: "linkedin profile",
      perform: () =>
        router.push("https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"),
      icon: <LinkedinIcon />,
      section: "Socials",
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
