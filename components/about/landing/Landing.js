import { styled } from "../../../stitches.config.js";
import ProfileCard from "../profilecard/ProfileCard.js";
import Header from "../../header/Header.js";
import Section from "../../layouts/blocks/Section.js";

const Container = styled("div", {
  margin: 0,
  backgroundColor: "#FFE0B4",

  "@bp1": {
    backgroundImage: "url(/images/wallpaper.png)",
    opacity: 1,
    backgroundSize: "contain",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    height: "100%",
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
    <Section id="#home">
      <Container>
        <Header></Header>
        <MenuWrapper>
          <div></div>
          <div>
            <ProfileCard badge={true} />
          </div>
          <div></div>
        </MenuWrapper>
      </Container>
    </Section>
  );
}

export default Landing;
