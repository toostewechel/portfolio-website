import { styled } from "../../stitches.config.js";
import Image from "next/image";

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-04",
  alignItems: "center",
});

const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
});

const StyledImage = styled(Image, {
  size: "$7",

  "@bp4": {
    width: "48px",
    height: "48px",
  },
});

const FlexWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$spacing-01",
});

const Title = styled("p", {
  fontSize: "$lg",
  fontWeight: "$bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  lineHeight: "$none",
  mt: "$spacing-02",

  "@bp4": {
    fontSize: "$lg",
  },
});

const Description = styled("p", {
  fontSize: "$xs",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve11",
  lineHeight: "$none",

  "@bp4": {
    fontSize: "$xs",
  },
});

interface AvatarProps {
  src: string;
  name: string;
  description: string;
}

const Avatar = ({ src, name, description }: AvatarProps) => (
  <Container>
    <AvatarContainer>
      <StyledImage width={64} height={64} src={src} alt={name} />
    </AvatarContainer>
    <FlexWrapper>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </FlexWrapper>
  </Container>
);

export default Avatar;
