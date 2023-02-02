import { styled } from "../../../stitches.config.js";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";

const Container = styled("footer", {
	maxWidth: "1234px",
	margin: "0 auto",
});

const FooterHeaderContainer = styled("div", {
	maxWidth: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	padding: "$spacing-04",
	gap: "$spacing-07",

	"@bp3": {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "end",
	}
});

const Box = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$spacing-04",
	width: "100%",

	"@bp3": {
		width: "auto",
	}
});

const Logo = styled("img", {
	width: "232px",
	height: "auto",
});

const Description = styled('p', {
	fontFamily: "$default",
	fontWeight: "$regular",
	color: "$mauve10",
	fontSize: "$base",
	maxWidth: "380px",
	paddingLeft: "$spacing-01",
});

const PoweredByContainer = styled("div", {
	m: 0,
	display: "flex",
	width: "100%",
	p: "0",
	alignItems: "center",
	background: "transparent",
	gap: "12px",
})

const Label = styled("p", {
	fontFamily: "$default",
	fontWeight: "$medium",
	fontSize: "$xs",
	color: "$mauve9",
	width: "148px",
	textTransform: "uppercase",
});

const Line = styled("div", {
	height: "1px",
	background: "$gray6",
	width: "100%",
});

const PoweredByLogoContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	gap: "$spacing-02",
});

const PoweredByBadge = styled("a", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$mauve9",
	transition: "background 300ms ease-in",
	background: "transparent",
	padding: "$spacing-03",
	borderRadius: "6px",
	border: "1px solid transparent",
	transition: "background 300ms ease-in",

	"&:hover": {
		transition: "background 300ms ease-out",
		backgroundColor: "$gray2",
		border: "1px solid $gray6",
	},
})

const SocialButtonContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	gap: "$spacing-02",
})

const SocialButtonIcon = styled("a", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "6px",
	color: "$mauve9",
	padding: "$spacing-03",
	transition: "background 300ms ease-in",
	background: "transparent",
	border: "1px solid transparent",
	outline: 0,

	"&:hover": {
		transition: "background 300ms ease-out",
		backgroundColor: "$mauve4",
		border: "1px solid $gray6",
		color: "$mauve12",
	},
	"&:active": {
		backgroundColor: "$mauve3",
	},
	"&:focus": {
		transition: "background 300ms ease-out",
		backgroundColor: "$mauve3",
		border: "1px solid $blue11",
		color: "$mauve12",
	},
});

const FooterMetaContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	mt: "$spacing-06",
	borderTop: "solid 1px $gray6",
	maxWidth: "100%",
	backgroundColor: "$gray2",
});

const FlexBox = styled("div", {
	maxWidth: "1234px",
	margin: "0 auto",
	display: "flex",
	flexDirection: "row",
	gap: "$spacing-03",
	alignItems: "center",
	justifyContent: "space-between",
	width: "100%",
	padding: "$spacing-04",
});

const Year = styled("p", {
	fontSize: "$sm",
	fontWeight: "$regular",
	fontFamily: "$default",
	color: "$mauve10",
});

const CurrentYear = new Date().getFullYear();

const SiteMapContainer = styled("div", {
	mt: "$spacing-04",
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	gap: "$spacing-03",

	"@bp2": {
		flexDirection: "row",
		gap: "$spacing-04",
		alignItems: "center",
	}
})

const Link = styled("a", {
	fontFamily: "$default",
	fontWeight: "$medium",
	fontSize: "$sm",
	color: "$mauve9",
	p: "$spacing-01",
})

const Circle = styled("div", {
	display: "none",

	"@bp2": {
		display: "flex",
		size: "$3",
		background: "$gray6",
		borderRadius: "100%",
	}
})

function Footer() {
	return (
		<>
			<Container>
				<FooterHeaderContainer>
					<Box>
						<Logo src="/logo/snapshots-labs-logo.png" alt="Snapshots Labs Logo" />
						<Description>
							Personal portfolio site of Tom Oostewechel with a curated overview of my professional and personal work
						</Description>
						<SiteMapContainer>
							<Link href="/design-vision">Design Vision</Link>
							<Circle />
							<Link href="/personal-overview">Personal Overview</Link>
							<Circle />
							<Link href="/release-notes">Release Notes</Link>
						</SiteMapContainer>
					</Box>
					<Box>
						<PoweredByContainer>
							<Label>powered by</Label>
							<Line />
						</PoweredByContainer>
						<PoweredByLogoContainer>
							<PoweredByBadge href="">
								<img src="/badges/spline-logo-badge.png" alt="Spline 3D Logo" />
							</PoweredByBadge>
							<PoweredByBadge href="">
								<img src="/badges/akash-logo-badge.png" alt="Akash Logo" />
							</PoweredByBadge>
							<PoweredByBadge href="">
								<img src="/badges/replit-logo-badge.png" alt="Replit Logo" />
							</PoweredByBadge>
						</PoweredByLogoContainer>
					</Box>
				</FooterHeaderContainer>
			</Container>
			<FooterMetaContainer>
				<FlexBox>
					<Year>&copy; {CurrentYear} - Snapshots Labs</Year>
					<SocialButtonContainer>
						<SocialButtonIcon href="https://twitter.com/boonikad93" target="_blank">
							<TwitterFillIcon size={24} />
						</SocialButtonIcon>
						<SocialButtonIcon href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/" target="_blank">
							<LinkedinFillIcon size={24} />
						</SocialButtonIcon>
						<SocialButtonIcon href="https://github.com/toostewechel" target="_blank">
							<GithubFillIcon size={24} />
						</SocialButtonIcon>
					</SocialButtonContainer>
				</FlexBox>
			</FooterMetaContainer>
		</>
	);
}

export default Footer;
