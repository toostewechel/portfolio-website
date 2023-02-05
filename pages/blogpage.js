import { createRef } from "react";
import Landing from "../components/blog/Landing.js";
import LandingContent from "../components/blog/LandingContent.js";
import LandingImage from "../components/blog/LandingImage.js";
import ContentHeader from "../components/content/ContentHeader.js";

function Blog() {
	const targetRef = createRef();
	return (
		<div ref={targetRef}>
			<ContentHeader targetRef={targetRef} gradient="design" />
			<Landing
				AccentColor="crimson"
				LandingContent={
					<LandingContent 
						AvatarImage="/avatar/avatar-tom-oostewechel.png" 
						AvatarLabel="Tom Oostewechel" 
						AvatarDescription="Author" 
						DatePosted="4 Feb, 2023" 
						HeadingTitle="Design Accessible Experiences for the Healthcare Sector"
						Description="Easily convert paper healthcare protocols and methods, 			without technical knowledge, into tailor-made, user friendly online modules and launch in production within weeks instead of months." />}
				LandingImage={
					<LandingImage Image="/images/landing-image-blog.png" />
				}
			/>
		</div>
	)
}

export default Blog;
