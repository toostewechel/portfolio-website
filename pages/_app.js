// Import MDX provider and StyledMarkdown component
import { MDXProvider } from "@mdx-js/react";
import * as components from "../components/markdown/StyledMarkdown.js";

//Import global CSS styles
import "../styles/global.css";
import "../styles/fonts.css";
import { styled, color } from "../stitches.config.js";
import { violet } from "@radix-ui/colors";

//Global command menu
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

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

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div style={{ background: active ? "#eee" : "transparent" }}>
            {item.name}
          </div>
        )
      }
    ></KBarResults>
  );
}

const StyledKBarPositioner = {
  zIndex: "50",
  background: "rgba(0,0,0, 0.35)",
};

const StyledKBarAnimator = styled(KBarAnimator, {
  maxWidth: "592px",
  width: "100%",
  boxShadow: "$smooth",
  background: "white",
  borderRadius: "8px",
});

const StyledKBarSearch = styled(KBarSearch, {
  fontFamily: "$default",
  fontSize: "$base",
  border: "none",
  width: "100%",
  color: "$gray12",
  outline: "2px solid transparent",
  outlineOffset: "2px",
  padding: "$spacing-04",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",

  "&::placeholder": {
    color: "$gray8",
    fontWeight: "$medium ",
  },
});

const StyledResultsContainer = styled("div", {
  padding: "$spacing-04",
  borderTop: "1px solid $gray6",
  background: "$gray2",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
});

function MyApp({ Component, pageProps }) {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={StyledKBarPositioner}>
          <StyledKBarAnimator>
            <StyledKBarSearch placeholder="Search for commands ..." />
            <StyledResultsContainer>
              <RenderResults />
            </StyledResultsContainer>
          </StyledKBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </KBarProvider>
  );
}

export default MyApp;
