// Import MDXProvider & StyledMarkdown Component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";

//Import Global CSS Styles
import "../styles/global.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
