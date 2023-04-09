import { styled } from "../../stitches.config.js";
import AvatarStatusBadge from "../avatar/AvatarStatusBadge.js";
import { IconButton } from "../button/IconButton";
import { Twitter, Github, Linkedin, Smartphone, Mail } from "lucide-react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  border: "1px solid linear-gradient(30deg, $violetA9, $crimsonA2)",
  background: "linear-gradient(335.45deg, #1A1523 14.6%, #687076 101.4%)",
  boxShadow: " 0px 6px 6px rgba(0, 0, 0, 0.15)",
  width: "100%",

  "@bp1": {
    width: "264px",
  },

  "@bp4": {
    flexDirection: "row",
  },
});

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  p: "$spacing-06",
  height: "auto",
  width: "100%",
});

const FlexContainer = styled("div", {
  display: "flex",
  width: "100%",
});

const ImageContainer = styled("div", {
  mb: "$spacing-05",
});

const CardTitle = styled("p", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  lineHeight: "$none",
  letterSpacing: "$tracking-default",
  color: "$mauve1",

  "@bp1": {
    fontSize: "$xl",
  },
});

const CardDescription = styled("p", {
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$mauve5",
  mb: "$spacing-08",
});

const StatusBadge = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  p: "$spacing-03",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.2)",
  border: "solid 1px $violetA7",
  mb: "$spacing-08",
});

const Badge = styled("div", {
  width: "12px",
  height: "12px",
  borderRadius: "999px",
  backgroundColor: "$green8",
  border: "solid 2px $violet4",
  mr: "$spacing-03",
});

const BadgeLabel = styled("p", {
  fontSize: "$sm",
  fontWeight: "$semi-bold",
  fontFamily: "$default",
  color: "$violet3",
  mt: "$spacing-01",
  mr: "$spacing-02",
});

const SocialButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$spacing-02",
});

interface ProfileCardProps {
  badge?: boolean;
}

function ProfileCard(props: ProfileCardProps) {
  return (
    <Container>
      <FlexContainer>
        <Card>
          <ImageContainer>
            <AvatarStatusBadge
              size={10}
              src="/avatar/avatar-tom-oostewechel.png"
            />
          </ImageContainer>
          <CardTitle>Tom Oostewechel</CardTitle>
          <CardDescription>Product Designer</CardDescription>
          {props.badge ? (
            <StatusBadge>
              <Badge />
              <BadgeLabel>Open to work</BadgeLabel>
            </StatusBadge>
          ) : null}
          <SocialButtonContainer>
            <IconButton
              size="small"
              mode="light"
              href="https://twitter.com/boonikad93"
              target="_blank"
              title="Open Twitter Profile"
              ariaLabel="Open Twitter Profile"
              tooltipLabel="Twitter"
            >
              <Twitter size={20} />
            </IconButton>
            <IconButton
              size="small"
              mode="light"
              href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
              target="_blank"
              title="Open LinkedIn Profile"
              ariaLabel="Open LinkedIn Profile"
              tooltipLabel="Linked In"
            >
              <Linkedin size={20} />
            </IconButton>
            <IconButton
              size="small"
              mode="light"
              href="https://github.com/toostewechel"
              target="_blank"
              title="Open GitHub Profile"
              ariaLabel="GitHub Profile"
              tooltipLabel="GitHub"
            >
              <Github size={20} />
            </IconButton>
            <IconButton
              size="small"
              mode="light"
              href="mailto:tomas93@skiff.com"
              target="_blank"
              title="Open Email Client"
              ariaLabel="Open Email Client"
              tooltipLabel="Email"
            >
              <Mail size={20} />
            </IconButton>
            <IconButton
              size="small"
              mode="light"
              href="tel:0612647976"
              target="_blank"
              title="Open Phone App"
              ariaLabel="Open Phone App"
              tooltipLabel="Phone Number"
            >
              <Smartphone size={20} />
            </IconButton>
          </SocialButtonContainer>
        </Card>
      </FlexContainer>
    </Container>
  );
}

export default ProfileCard;
