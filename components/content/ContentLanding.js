import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Tag from "../tag/Tag.js";
import ContentMeta from "./ContentMeta.js";

const ContentContainer = styled("div", {
  maxWidth: "1024px",
  m: "0 auto",
});

const TitleWrapper = styled("div", {
  position: "relative",
  overflow: "visible",
  flexDirection: "column",
  gap: "$spacing-03",
  justifyContent: "center",
  textAlign: "center",
  paddingTop: "$spacing-13",
  paddingBottom: "$spacing-13",
  maxWidth: "768px",
  m: "0 auto",
})

const BackgroundPattern = styled("div", {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundImage: "url(/patterns/circular-background-pattern.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "115% auto",
  zIndex: -1,
  top: 0,

  "@bp2": {
    backgroundSize: "75% auto",
  },
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  fontSize: "$sm",
  color: "$gray11",
});

const LandingImageContainer = styled("div", {
  maxWidth: "1234px",
  pb: "$spacing-08",
});

const LandingImage = styled("img", {
  height: "auto",
  width: "100%",
  borderRadius: "16px",
});

function ContentLanding(props) {
  return (
    <ContentContainer>
      <TitleWrapper>
        <BackgroundPattern />
        <Tag color="blue" label="Tech" />
        <Heading as="h1" level={1} color="dark" title={props.title} />
        <MetaInformation>19 October 2022 • 20 min read</MetaInformation>
      </TitleWrapper>
      <LandingImageContainer>
        <LandingImage src="/images/placeholder-blog.jpg" />
      </LandingImageContainer>
      <ContentMeta />
    </ContentContainer>
  );
}

export default ContentLanding;
