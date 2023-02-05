import { styled } from "../stitches.config.js";
import ExternalLinkLineIcon from "remixicon-react/ExternalLinkLineIcon";
import { ExternalLink } from "lucide-react";

const LinkContainer = styled("a", {
  outline: 0,
  willChange: "transform",
  transition: "all, 300ms ease-in",
  border: "1px solid transparent",
  borderRadius: "6px",

  "&:focus": {
    transform: "translateY(-2px)",
    transition: "transform 200ms ease-out, background 200ms ease-out",
    backgroundColor: "$gray2",
    border: "1px solid $gray6",
    boxShadow: "$small",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    transition: "transform 200ms ease-out, background 200ms ease-out",
    backgroundColor: "$gray2",
    border: "1px solid $gray6",
    boxShadow: "$small",
  },
  "&:active": {
    transform: "translateY(-1px)",
    transition: "transform 200ms ease-out, background 200ms ease-out",
    backgroundColor: "$gray4",
    boxShadow: "$xs",
  },
});

const Panel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "$spacing-03 $spacing-02",

  "@bp1": {
    padding: "$spacing-03",
  },
});

const FlexWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Logo = styled("img", {
  width: "40px",
  height: "40px",
  borderRadius: "6px",
  mr: "$spacing-04",

  "@bp2": {
    size: "$8",
    mr: "$spacing-04",
  },
});

const FlexContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",

  "@bp4": {
    fontSize: "$xl",
  },
});

const Description = styled("p", {
  fontSize: "$xs",
  fontWeight: "$regular",
  letterSpacing: "$tracking-tight",
  fontFamily: "$default",
  color: "$mauve10",
  mt: "-2px",

  "@bp3": {
    mt: "0",
    fontSize: "$base",
  },
});

const DecorativeIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: "$spacing-03",
  color: "$mauve11",
});

function StyledLink(props) {
  return (
    <LinkContainer href={props.href} target="_blank">
      <Panel>
        <FlexWrapper>
          <Logo src={props.src} />
          <FlexContainer>
            <div>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
            </div>
          </FlexContainer>
        </FlexWrapper>
        <FlexContainer>
          <DecorativeIcon>
            <ExternalLink size={20} />
          </DecorativeIcon>
        </FlexContainer>
      </Panel>
    </LinkContainer>
  );
}

export default StyledLink;
