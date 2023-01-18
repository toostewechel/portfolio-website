import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Tag from "../tag/Tag.js";

const Background = styled("div", {
  margin: 0,
  height: "100vh",
  background: "$gray2",
  borderTop: "4px solid $gray4",
  borderBottom: "4px solid $gray4",
});

const BackgroundImage = styled("div", {
  margin: 0,
  height: "100vh",
  backgroundSize: "0%",

  "@bp2": {
    backgroundSize: "65%",
    backgroundPositionX: "right",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
  },
  "@bp5": {
    backgroundSize: "70%",
    backgroundPositionX: "right",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
  },
});

const LandingWrapper = styled("div", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 $spacing-03",
  display: "flex",
  height: "100%",
});

const LandingItems = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0",
  width: "100%",

  "@bp2": {
    flexDirection: "row",
  },
});

const LandingItem = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "auto",
  mr: 0,

  "@bp2": {
    flexBasis: "calc(50% - 16px)",
  },
});

const Description = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$mauve12",
  maxWidth: "720px",
  mb: "$spacing-09",

  "@bp1": {
    fontSize: "$xl",
  },
});

const ContentContainer = styled("div", {
  maxWidth: "532px",
});

const Button = styled("a", {
  padding: "$spacing-04 $spacing-05",
  backgroundColor: "$violet10",
  color: "$violet2",
  fontFamily: "$default",
  fontSize: "$lg",
  fontWeight: "semi-bold",
  borderRadius: "8px",

  "&:hover": {
    color: "$violet3",
    backgroundColor: "$violet11",
  },
});

function ContentOpening(props) {
  return (
    <Background>
      <BackgroundImage style={{ backgroundImage: props.backgroundImage }}>
        <LandingWrapper>
          <LandingItems>
            <LandingItem>
              <ContentContainer>
                <Tag color={props.tagColor} label={props.tagLabel} />
                <Heading as="h2" level={2} color="dark" title={props.title} />
                <Description>{props.description}</Description>
                <Button href={props.id}>{props.label}</Button>
              </ContentContainer>
            </LandingItem>
          </LandingItems>
        </LandingWrapper>
      </BackgroundImage>
    </Background>
  );
}

export default ContentOpening;
