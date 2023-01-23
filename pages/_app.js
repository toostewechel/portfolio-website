// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";
import React, { useEffect } from "react";

//Import global CSS styles
import "../styles/global.css";
import "../styles/fonts.css";
import "../styles/cmdk/vercel.css";
import "../styles/cmdk/styles.css";

function ScrollToView() {
  return document.getElementById("core").scrollIntoView();
}

function MyApp({ Component, pageProps }) {
  return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
  );
}

export default MyApp;
