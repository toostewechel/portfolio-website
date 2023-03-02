import { styled, keyframes } from "../../stitches.config.js";
import React from "react";
import Avatar from "../avatar/Avatar.js";

const CarouselAnimateVertical = keyframes({
  "0%": {
    transform: "translateY(100%) scale(0.85)",
    opacity: "0",
    visibility: "hidden",
  },
  "3%, 11.1111111111%": {
    transform: "translateY(100%) scale(0.95)",
    opacity: "0.55",
    visibility: "visible",
  },
  "14.1111111111%, 22.2222222222%": {
    transform: "translateY(0) scale(1)",
    opacity: "1",
    visibility: "visible",
  },
  "25.2222222222%, 33.3333333333%": {
    transform: "translateY(-100%) scale(0.95)",
    opacity: "0.55",
    visibility: "visible",
  },
  "36.3333333333%": {
    transform: "translateY(-100%) scale(0.85)",
    opacity: "0",
    visibility: "visible",
  },
  "100%": {
    transform: "translateY(-100%) scale(0.85)",
    opacity: "0",
    visibility: "hidden",
  },
});

const CarouselWrapper = styled("div", {
  position: "relative",

  height: "100%",
  maxWidth: "292px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const CarouselItem = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  width: "292px",
  padding: "$spacing-03 $none ",
  opacity: 0,
  animation: `${CarouselAnimateVertical} 27s infinite ease-in-out`,
  willChange: "transform, opacity",

  "&:nth-child(1)": {
    animationDelay: "-3s",
  },
  "&:nth-child(2)": {
    animationDelay: "0s",
  },
  "&:nth-child(3)": {
    animationDelay: "3s",
  },
  "&:nth-child(4)": {
    animationDelay: "6s",
  },
  "&:nth-child(5)": {
    animationDelay: "9s",
  },
  "&:nth-child(6)": {
    animationDelay: "12s",
  },
  "&:nth-child(7)": {
    animationDelay: "15s",
  },
  "&:nth-child(8)": {
    animationDelay: "18s",
  },
  "&:last-child": {
    animationDelay: "-6s",
  },
});

export const SoftwareCarousel = ({}) => {
  return (
    <CarouselWrapper>
      <CarouselItem>
        <Avatar
          src="/logo/iconjar-logo.png"
          name="IconJar"
          description="Icon Browser"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/capacities-logo.svg"
          name="Capacities"
          description="Knowledge Management"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/figma-logo.png"
          name="Figma"
          description="Design Tool"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/raycast-logo.png"
          name="RayCast"
          description="App Launcher"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/nextjs-logo.png"
          name="Next.JS"
          description="React Framework"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/radix-logo.png"
          name="Radix UI"
          description="Component Library"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/replit-logo.png"
          name="Replit"
          description="Browser IDE"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/linear-logo.png"
          name="Linear"
          description="Issue Tracking"
        />
      </CarouselItem>
      <CarouselItem>
        <Avatar
          src="/logo/react-logo.png"
          name="React"
          description="JavaScript Framework"
        />
      </CarouselItem>
    </CarouselWrapper>
  );
};
