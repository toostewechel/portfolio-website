import { styled, keyframes } from "../../stitches.config.js";
import React from "react";

const CarouselAnimateVertical = keyframes({
  "0%": { 
		transform: "translateY(100%) scale(0.5)",
		opacity: "0",
		visibility: "hidden",
	},
  "3%, 11.1111111111%": {
		transform: "translateY(100%) scale(0.7)",
		opacity: "0.4",
		visibility: "visible",
	},
	"14.1111111111%, 22.2222222222%": {
		transform: "translateY(0) scale(1)",
		opacity: "1",
		visibility: "visible",
	},
	"25.2222222222%, 33.3333333333%": {
		transform: "translateY(-100%) scale(0.7)",
		opacity: "0.4",
		visibility: "visible",
	},
	"36.3333333333%": {
		transform: "translateY(-100%) scale(0.5)",
		opacity: "0",
		visibility: "visible",
	},
	"100%": {
		transform: "translateY(-100%) scale(0.5)",
		opacity: "0",
		visibility: "hidden",
	},
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
	opacity: 1,
	willChange: "transform, opacity",
	animation: `${CarouselAnimateVertical} 27s infinite ease-in-out`,

	"&:nth-child(1)": {
		animationDelay: "calc(3s * -1)",
	},
	"&:nth-child(2)": {
		animationDelay: "calc(3s * 0)",
	},
	"&:nth-child(3)": {
		animationDelay: "calc(3s * 1)",
	},
	"&:nth-child(4)": {
		animationDelay: "calc(3s * 2)",
	},
	"&:nth-child(5)": {
		animationDelay: "calc(3s * 3)",
	},
	"&:nth-child(6)": {
		animationDelay: "calc(3s * 4)",
	},
	"&:nth-child(7)": {
		animationDelay: "calc(3s * 5)",
	},
	"&:nth-child(8)": {
		animationDelay: "calc(3s * 6)",
	},
	"&:last-child": {
		animationDelay: "calc(-3s * 2)",
	},
});

export const CarouselExample = ({}) => {
	return (
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

	);
}