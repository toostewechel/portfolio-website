// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";

//Import global CSS styles
import "../styles/global.css";
import "../styles/fonts.css";
import { styled, color } from "../stitches.config.js";

//Global Command Menu
import KBarMenu from "../components/cmdk/KBarMenu.js";
import { KBarProvider } from "kbar";

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
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
