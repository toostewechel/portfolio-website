import { styled } from "../../../stitches.config.js";
import QuickMenu from "../menu/QuickMenu.js";
import Header from "../../header/Header.js";

const Container = styled("div", {
  margin: 0,
  backgroundColor: "$mauve12",

  "@bp1": {
    backgroundImage: "url(/images/wallpaper.png)",
    backgroundSize: "contain",
    backgroundPosition: "left",
    height: "100vh",
  },
});

const MenuWrapper = styled("div", {
  maxWidth: "1234px",
  ml: "auto",
  mr: "auto",
  mt: "-124px",
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "100%",
  justifyContent: "center",
});

function Landing() {
  return (
    <div>
      <Container>
        <Header></Header>
        <MenuWrapper>
          <div></div>
          <div>
            <QuickMenu />
          </div>
          <div></div>
        </MenuWrapper>
      </Container>
    </div>
  );
}

export default Landing;
