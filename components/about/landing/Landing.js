import { styled } from "../../../stitches.config.js";
import QuickMenu from "../menu/QuickMenu.js";

const Container = styled("div", {
  
  margin: 0,

  "@bp1": {
    backgroundImage: "url(/images/wallpaper.png)",
    backgroundSize: "cover",
    height: "100vh",
  }
})

const MenuWrapper = styled("div", {
  maxWidth: "1234px",
  m: "0 auto",
  display: "flex",
  flexDirection: "column",
  flex: "0 0 100%",
  height: "100%",
  justifyContent: "center",
})

function Landing() {
  return (
    <Container>
      <MenuWrapper>
        <div></div>
        <div><QuickMenu /></div>
        <div></div>
      </MenuWrapper>
    </Container>
  )
}

export default Landing;