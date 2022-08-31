import { styled } from "../stitches.config.js";
import ProfessionalAchievementsTab from "../components/tabs/ProfessionalAchievementsTabs.js";
import Banner from "../components/about/pageblocks/Banner.js";
import Spacer from "../components/layouts/blocks/Spacer.js";
import Landing from "../components/about/landing/Landing.js";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});


const Title = styled("h2", {
  fontSize: "$3xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tighter",
  color: "$mauve12",
  mb: "$spacing-03",

  "@bp1": {
    fontSize: "$4xl",
    mb: "$spacing-02",
  },
});

const Paragraph = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  lineHeight: "$base",
  letterSpacing: "$tracking-normal",
  color: "$gray12",
  maxWidth: "640px",
  mb: "$spacing-06",

  "@bp1": {
    fontSize: "$lg",
  },
});

const PageLayout = styled("div", {
  maxWidth: "1234px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

const FlexContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  columnGap: "$spacing-05",

  "@bp4": {
    flexDirection: "row",
    rowGap: "$spacing-04",
  },
});

const Flex = styled("div", {
  width: "100%",
});


function HomePage() {
  return (
    <div>
      <Landing />
      <Spacer level={12} />
      <Banner />
      <Spacer level={7} />
      <PageLayout>
        <ProfessionalAchievementsTab />
      </PageLayout>
      <Spacer level={12} />
    </div>
  );
}

export default HomePage;
