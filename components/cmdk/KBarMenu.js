import { styled } from "../../stitches.config.js";
import { CommandIcon, EnterIcon } from "./Icons.js";
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
   "-webkit-overflow-scrolling": "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
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
  background: "white",

  "&::placeholder": {
    color: "$mauve8",
    fontWeight: "$default",
  },
});

const StyledResultsContainer = styled("div", {
  padding: "$spacing-04",
  borderTop: "1px solid $gray6",
  background: "$white",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
});

const StyledSectionItem = styled("div", {
  pl: "$spacing-03",
  pt: "$spacing-03",
  pb: "$spacing-02",
  fontFamily: "$header",
  fontWeight: "$semi-bold",
  letterSpacing: "$tracking-tight",
  fontSize: "$base",
  color: "$mauve9",
});

const StyledResultItem = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  padding: "$spacing-03",
  fontFamily: "$default",
  fontSize: "$sm",
  borderRadius: "8px",
});

const LabelContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const ShortcutsContainer = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px",
});

const StyledKbd = styled("kbd", {
  padding: "$spacing-02",
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  fontSize: "$sm",
  fontFamily: "$mono",
  color: "$mauve11",
});

const StyledIcon = styled("div", {
  color: "$gray11",
});

const StyledFooter = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$spacing-03",
  backgroundColor: "white",
  borderTop: "1px solid $gray6",
  width: "100%",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
});

const ItemName = styled("p", {
  fontFamily: "$header",
  fontSize: "$base",
  fontWeight: "$extra-bold",
  color: "$mauve12",
  mb: "-4px",
})

const Subtitle = styled("p", {
  fontFamily: "$default",
  fontSize: "$xs",
  color: "$mauve9",
})

const Label = styled("p", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$mauve9",
})

const FlexBox = styled("div", {
  display: "flex",
  alignItems: "center",

  variants: {
    direction: {
      column: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }
    }
  }
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
          <StyledResultItem
            style={{
              background: active ? "#EFEFFF" : "transparent",
            }}
          >
            <LabelContainer>
              <StyledIcon>{item.icon}</StyledIcon>
              <FlexBox direction="column" >
                <ItemName>{item.name}</ItemName>
                <Subtitle>{item.subtitle}</Subtitle>
              </FlexBox>
            </LabelContainer>
            {item.shortcut?.length ? (
              <ShortcutsContainer>
                {item.shortcut.map((sc) => (
                  <StyledKbd key={sc}>{sc}</StyledKbd>
                ))}
              </ShortcutsContainer>
            ) : null}
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
          <StyledFooter>
            <CommandIcon />
            <FlexBox>
              <Label>Open Command</Label>
              <EnterIcon />
            </FlexBox>
          </StyledFooter>
        </StyledKBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

export default KBarMenu;
