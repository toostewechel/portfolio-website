import { styled } from "../../stitches.config.js";
import Heading from "../typography/Heading.js";

const Background = styled("div", {
  margin: 0,
  height: "100vh",
  background:
    "linear-gradient(29.21deg, #F76190 14.44%, rgba(247, 97, 144, 0.25) 118.03%)",
});

const BackgroundImage = styled("div", {
  margin: 0,
  height: "100vh",

  "@bp2": {
    backgroundImage: "url(/blog/design-for-healthcare/chapter-2.png)",
    backgroundSize: "65%",
    backgroundPositionX: "right",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
  },
});

const LandingWrapper = styled("div", {
  maxWidth: "1234px",
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
  mb: "$spacing-07",

  "@bp1": {
    fontSize: "$xl",
  },
});

const StyledImage = styled("img", {
  width: "100%",
  height: "auto",
});

const ContentContainer = styled("div", {
  maxWidth: "532px",
});

const Button = styled("a", {
  padding: "$spacing-04 $spacing-05",
  backgroundColor: "$violet11",
  color: "$violet2",
  fontFamily: "$default",
  fontSize: "$lg",
  fontWeight: "semi-bold",
  borderRadius: "8px",
});

function ContentOpening(props) {
  return (
    <Background>
      <BackgroundImage>
        <LandingWrapper>
          <LandingItems>
            <LandingItem>
              <ContentContainer>
                <Heading
                  as="h2"
                  level={2}
                  color="dark"
                  title="Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief"
                />
                <Description>
                  In de afgelopen jaren is in onze samenleving veel
                  dienstverlening gedigitaliseerd. Maar zodra iets online staat,
                  betekent dit niet gelijk dat het beter toegankelijk is of
                  gemakkelijker in gebruik.
                </Description>
                <Button href="#">Lees deel 1</Button>
              </ContentContainer>
            </LandingItem>
          </LandingItems>
        </LandingWrapper>
      </BackgroundImage>
    </Background>
  );
}

export default ContentOpening;
