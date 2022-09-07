import { styled } from "../../stitches.config.js";
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

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

function KBarMenu(){
  return(
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
  )
}

export default KBarMenu;