import { styled } from "../../stitches.config.js";
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

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
  padding: "$spacing-04 $none",
  borderTop: "1px solid $gray6",
  background: "$gray2",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
});

const StyledSectionItem = styled("div", {
  padding: "$spacing-04",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$sm",
})

const StyledResultItem = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  padding: "$spacing-04",
  borderLeft: "4px solid",
  fontFamily: "$default",
  fontSize: "$sm",
})

const LabelContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
})

const ShortcutsContainer = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px",
})

const StyledKbd = styled("kbd", {
  padding: "4px 6px",
  background: "rgba(0, 0, 0, 0.10)",
  borderRadius: "4px",
  fontSize: "$sm",
  fontFamily: "$default",
  background: "linear-gradient(0deg, #32275F 0.34%, rgba(52, 41, 97, 0.85) 75.27%)",
  color: "$mauve2",
})

const StyledIcon = styled("div", {
  color: "$gray11",
})

function RenderResults() {
  const { results } = useMatches();
  
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <StyledSectionItem>{item}</StyledSectionItem>
        ) : (
          <StyledResultItem style={{ background: active ? "rgba(0,0,0, 0.05)" : "transparent", borderLeft: active ? "4px solid #5746AF" : "4px solid transparent" }}>
            <LabelContainer>
              <StyledIcon>{item.icon}</StyledIcon>
              {item.name}
            </LabelContainer>
            {item.shortcut?.length ? (
              <ShortcutsContainer>
                {item.shortcut.map((sc) =>
                  <StyledKbd key={sc}>
                    {sc}
                  </StyledKbd>
                )}
              </ShortcutsContainer>) : null}
          </StyledResultItem>
        )
      }
    ></KBarResults>
  );
}

function KBarMenu() {
  return (
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