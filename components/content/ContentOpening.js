import { styled } from "../../stitches.config.js";

const BackgroundImage = styled("div", {
  margin: 0,
  backgroundColor: "#FFE0B4",
  height: "100vh",

  "@bp2": {
    backgroundImage: "url(/images/wallpaper.png)",
    opacity: 1,
    backgroundSize: "contain",
    backgroundPosition: "-132px center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
});

function ContentOpening(props) {
  return <BackgroundImage></BackgroundImage>;
}

export default ContentOpening;
