import { styled } from "../../stitches.config.js";

const ContentLayout = styled("div", {
  maxWidth: "720px",
  padding: "8px",
  ml: "auto",
  mr: "auto",
});

export const PageLayout = styled("div", {
  maxWidth: "1272px",
  padding: "$spacing-03",
  ml: "auto",
  mr: "auto",
});

export const GridWidgetsLayout = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(12, 290px)",
  gridTemplateColumns: "repeat(1, 290px)",
  gap: "32px",
  gridTemplateAreas: `
		"pf"
		"pf"
		"pers"
		"cs"
		"cc" 
		"cc"
		"col"
		"bm"
		"bm" 
		"exp"
		"bp"
		"bp"
 `,
  // >640px
  "@bp2": {
    gridTemplateRows: "repeat(5, 290px)",
    gridTemplateColumns: "repeat(2, 290px)",
    gridTemplateAreas: `
		"pf pf"
		"cs pers"
		"cc cc"
		"bm col"
		"bm exp"
		"bp bp"
 `,
  },
  // >768px
  "@bp3": {
    gridTemplateRows: "repeat(5, 290px)",
    gridTemplateColumns: "repeat(2, 290px)",
    gridTemplateAreas: `
		"pf pf"
		"cs pers"
		"cc cc"
		"bm col"
		"bm exp"
		"bp bp"
 `,
  },
  // >1024px
  "@bp4": {
    gridTemplateRows: "repeat(4, 290px)",
    gridTemplateColumns: "repeat(3, 290px)",
    gridTemplateAreas: `
		"pf pf cs"
		"pers cc cc"
		"bm col exp"
		"bm bp bp"
 `,
  },
  // >1280px
  "@bp5": {
    gridTemplateRows: "repeat(3, 290px)",
    gridTemplateColumns: "repeat(4, 290px)",
    gridTemplateAreas: `
		"pf pf cs bm"
		"pers cc cc bm"
		"bp bp col exp"
 `,
  },
});

export const BlogContentLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray2",
});

export const BlogMarkdownContentLayout = styled("div", {
  backgroundColor: "white",
  maxWidth: "1720px",
  width: "100%",
  borderRadius: "16px",
  border: "1px solid $gray6",
  pt: "$spacing-10",
  pb: "$spacing-10",
  zIndex: 0,

  "@bp3": {
    pt: "$spacing-13",
    pb: "$spacing-13",
  },
});

function Layout(props) {
  return <ContentLayout>{props.children}</ContentLayout>;
}

export default Layout;
