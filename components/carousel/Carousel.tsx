import { styled, keyframes } from "../../stitches.config.js";
import React from "react";

const Wrapper = styled("div", {
	display: "flex",
});

const CarouselWrapper = styled('div', {
	position: "relative",
	width: "100%",
	maxWidth: "292px",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
});

const CarouselItem = styled('div', {
	display: "flex",
	alignItems: "center",
	position: "absolute",
	width: "100%",
	padding: "$spacing-04",
	opacity: 0,
	willChange: "transform, opacity", 
});

export const CarouselExample = () => {
	return (
		<Wrapper>
			<CarouselWrapper>
				<CarouselItem>Item 1</CarouselItem>
				<CarouselItem>Item 2</CarouselItem>
				<CarouselItem>Item 3</CarouselItem>
				<CarouselItem>Item 4</CarouselItem>
				<CarouselItem>Item 5</CarouselItem>
				<CarouselItem>Item 6</CarouselItem>
				<CarouselItem>Item 7</CarouselItem>
				<CarouselItem>Item 8</CarouselItem>
				<CarouselItem>Item 9</CarouselItem>
			</CarouselWrapper>
		</Wrapper>
	)
}