import { styled } from "../../stitches.config.js";
import { Tag } from "../tag/Tag.tsx";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Container = styled(motion.div, {
  m: 0,
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  background: "linear-gradient(104.04deg, #FCFDFC 0%, #F8FAF8 100%)",
  willChange: "all",
  width: "100%",
  height: "100%",
  outline: 0,
  boxShadow:
    "-6px 6px 12px rgba(207, 207, 207, 0.2), 6px -6px 12px rgba(207, 207, 207, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(207, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(207, 207, 207, 0.5)",

  "@bp2": {
    m: "$none $spacing-02 $spacing-02 $spacing-02",
  },

  "&:focus": {
    border: "1px solid $blue11",
  },
});

const ResponsiveImage = styled("img", {
  maxWidth: "100%",
  height: "auto",
});

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  position: "absolute",
  borderRadius: "6px",
  boxShadow: "$small",
  background: "$mauveA9",
  top: 16,
  left: 16,
});

const IconSize = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$5",
});

const TitleContainer = styled("div", {
  borderRadius: "6px",
  background: "rgba(2,0,16, 0.75)",
  padding: "$spacing-05 $spacing-04",
  boxShadow: "$xs",
  position: "relative",
  mr: "$spacing-04",
  ml: "$spacing-04",
  mt: "-42px",
});

const CardTitle = styled("h3", {
  fontFamily: "$header",
  fontWeight: "$extra-bold",
  lineHeight: "$compact",
  letterSpacing: "$tracking-normal",
  fontSize: "$lg",
  color: "$mauve1",
  textAlign: "center",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
});

const DescriptionContainer = styled("div", {
  padding: "$spacing-05",
});

const CardDescription = styled("p", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$base",
  lineHeight: "$base",
  color: "$gray11",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "-webkit-line-clamp": 4,
  "-webkit-box-orient": "vertical",
});

const MetaInformationContainer = styled("div", {
  padding: "$spacing-02 $spacing-05 $spacing-05 $spacing-05",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MetaInformation = styled("p", {
  fontFamily: "$default",
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  fontSize: "$sm",
  color: "$gray11",
});

const FlexBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

function BlogTimelineCard({ href, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Container
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
    >
      <Icon>
        <IconSize>
          {props.dutch && (
            <img
              style={{ width: "24px", height: "24px" }}
              src="/icons/nl.svg"
            />
          )}
          {props.english && (
            <img
              style={{ width: "24px", height: "24px" }}
              src="/icons/gb.svg"
            />
          )}
        </IconSize>
      </Icon>
      <ResponsiveImage src={props.image} />
      <TitleContainer>
        <CardTitle>{props.title}</CardTitle>
      </TitleContainer>
      <FlexBox>
        <DescriptionContainer>
          <CardDescription>{props.description}</CardDescription>
        </DescriptionContainer>
        <MetaInformationContainer>
          <MetaInformation>{props.meta}</MetaInformation>
          <Tag color={props.color} label={props.category} />
        </MetaInformationContainer>
      </FlexBox>
    </Container>
  );
}

export default BlogTimelineCard;
