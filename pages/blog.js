import { styled } from "../stitches.config.js";
import { PageLayout, GridWidgetsLayout } from "../components/layouts/Layout.js";
import { Header } from "../components/layouts/Header.tsx";
import { Tag } from "../components/tag/Tag.tsx";
import { ChevronsRight } from "lucide-react";
import { GridHeader } from "../components/widgets/GridHeader.tsx";
import { ProfileInformation } from "../components/widgets/ProfileInformation.tsx";
import { Snapshot } from "../components/widgets/Snapshot.tsx";
import { BookMeeting } from "../components/widgets/BookMeeting.tsx";
import { Personality } from "../components/widgets/Personality.tsx";
import { CoreCompetencies } from "../components/widgets/CoreCompetencies.tsx";
import { Blogpost } from "../components/widgets/Blogpost.tsx";
import { OperatingPrinciples } from "../components/widgets/OperatingPrinciples.tsx";
import { Experience } from "../components/widgets/Experience.tsx";
import Footer from "../components/layouts/blocks/Footer.js";
import { ArrowUpRight } from "lucide-react";
import BlogpostsBlock from "../components/home/pageblocks/BlogpostsBlock.js";

const Wrapper = styled("div", {
  backgroundColor: "$olive3",
  backgroundImage: "url(/patterns/grid-lines-red.svg)",
  backgroundPositionX: "center",
  height: "100%",
});

const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "232px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "72px",
});

export default function BlogPost() {
  return (
    <Wrapper>
      <Header></Header>
      <PageLayout style={{ marginTop: "70px" }}>
        <BlogpostsBlock />
      </PageLayout>
      <Footer />
    </Wrapper>
  );
}
