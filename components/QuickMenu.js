import { styled } from "../stitches.config.js";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";

import MenuItem from "../components/menu/MenuItem.js";

const Container = styled("div", {
  p: "$spacing-05",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray2",
  borderRadius: "8px",
})

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  p: "$spacing-05",
  background: "linear-gradient(180deg, rgba(122, 89, 232, 0.75) 0%, #3913B8 100%)",
  borderRadius: "8px",
  height: "400px",
  width: "100%",
})

const FlexContainer = styled("div", {
  display: 'flex'
})

const ImageContainer = styled("div", {
  mb: "$spacing-05",
})

const CardTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$whiteA12",
  mb: "$spacing-01",

  "@bp1": {
    fontSize: "$2xl",
    mt: "$spacing-02",
  },
})

const CardDescription = styled("p", {
  fontSize: "$base",
  fontWeight: "$regular",
  fontFamily: "$default",
  color: "$violet5",
  mb: "24px",
})

const StatusBadge = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  p: "$spacing-03",
  borderRadius: "4px",
  backgroundColor: "$violetA4",
  border: "solid 1px $violetA7",
  mb: "$spacing-08",
})

const Badge = styled("div", {
  width: "13px",
  height: "13px",
  borderRadius: "999px",
  backgroundColor: "$green8",
  border: "solid 2px $violet4",
  mr: "$spacing-03",
})

const BadgeLabel = styled("p", {
  fontSize: "$base",
  fontWeight: "$semi-bold",
  fontFamily: "$header",
  color: "$violet3",
  mt: "$spacing-01",
  mr: "$spacing-02",
})

const Link = styled("a", {
  outlineOffset: "2px",

  "&:focus": {
    outlineColor: "$violet11",
  },
});

const SocialIconBar = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
})

const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "$6",
  p: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  color: "$violet3",
  borderRadius: "999px",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
})

const Menu = styled("div", {
  display: "flex",
  flexDirection: "column",
  p: "$spacing-05 $none",
})

const MenuTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: "$extra-bold",
  fontFamily: "$header",
  letterSpacing: "$tracking-tight",
  color: "$mauve12",
  mb: "$spacing-01",

  "@bp1": {
    fontSize: "$2xl",
    mt: "$spacing-02",
  },
})

function QuickMenu(props) {
  return (
    <Container>
      <FlexContainer>
        <Card>
          <ImageContainer>
            <img src="/images/card-placeholder.png" />
          </ImageContainer>
          <CardTitle>Tom Oostewechel</CardTitle>
          <CardDescription>Product Designer</CardDescription>
          <StatusBadge>
            <Badge />
            <BadgeLabel>Open to work</BadgeLabel>
          </StatusBadge>
          <SocialIconBar>
            <Link href="https://twitter.com/home">
              <Icon>
                <TwitterFillIcon />
              </Icon>
            </Link>
            <Link href="https://twitter.com/home">
              <Icon>
                <LinkedinFillIcon />
              </Icon>
            </Link>
            <Link href="https://twitter.com/home">
              <Icon>
                <GithubFillIcon />
              </Icon>
            </Link>
          </SocialIconBar>
        </Card>
      </FlexContainer>
      <FlexContainer>
        <Menu>
          <MenuTitle>Quick Menu</MenuTitle>
          <MenuItem src="/icons/search-eye-line.svg" label="Values" />
        </Menu>    
      </FlexContainer>
    </Container>
  )
}

export default QuickMenu;