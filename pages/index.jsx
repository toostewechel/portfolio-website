import { styled } from "../stitches.config.js";

const Button = styled("button", {
  backgroundColor: "$blue3",
  color: "$blue11",
  padding: "4px",
  letterSpacing: "$tracking-tight",
});

const Heading1 = styled("h1", {
  fontSize: "$header-1",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$violet11",
});

function HomePage() {
  return (
    <div>
      <Button>Click Me!!!</Button>
      <Heading1>Hello world!</Heading1>
    </div>
  );
}

export default HomePage;
