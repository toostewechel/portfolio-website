import { styled } from "../../stitches.config.js";
import Image from "next/image";

export default function LandingImage({ src }) {
  return (
    <Image
      src={src}
      layout="responsive"
      width={800}
      height={800}
      style={{ zIndex: "4" }}
    />
  );
}
