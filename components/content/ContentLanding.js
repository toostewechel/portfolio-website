import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";
import Tag from "../tag/Tag.js";
import Avatar from "../avatar/Avatar.js";

const ContentContainer = styled("div", {
  overflow: "visible",
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
  paddingTop: "$spacing-11",
  paddingBottom: "$spacing-08",
  maxWidth: "768px",
  m: "0 auto",
});

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
    backgroundSize: "70% auto",
  },
});

const LandingImageContainer = styled("div", {
  maxWidth: "1234px",
  pb: "$spacing-06",
});

const LandingImage = styled("img", {
  height: "auto",
  width: "100%",
  borderRadius: "16px",
});

const ShareBar = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  textAlign: "start",
  pt: "$spacing-06",
  pb: "$spacing-10",
})

function ContentLanding(props) {
  return (
    <ContentContainer>
      <TitleWrapper>
        <BackgroundPattern />
        <Tag color={props.color} label={props.label} />
        <Heading as="h1" level={1} color="dark" title={props.title} />
        <ShareBar>
          <Avatar
            src="/images/avatar-placeholder.png"
            name="Tom Oostewechel"
            description={props.meta}
          />
        </ShareBar>
      </TitleWrapper>
      <LandingImageContainer>
        <LandingImage src={props.src} />
      </LandingImageContainer>

    </ContentContainer>
  );
}

export default ContentLanding;
