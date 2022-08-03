import { styled } from "../stitches.config.ts";

const Button = styled("button", {
  backgroundColor: "$blue3",
  color: "$blue11",
  padding: "4px",
});

function HomePage() {
  return (
    <div>
      <Button>Click Me!</Button>
    </div>
  );
}

export default HomePage;
