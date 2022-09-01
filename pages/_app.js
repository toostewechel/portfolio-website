// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";

//Import global CSS styles
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
