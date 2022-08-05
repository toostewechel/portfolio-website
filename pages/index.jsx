import { styled } from "../stitches.config.js";
import StyledLink from "../components/StyledLink.js";
import ListItem from "../components/ListItem.js";

function HomePage() {
  return (
    <div>
      <ListItem
        src="/logo/university-twente-logo.png"
        title="University of Twente"
        subtitle="Master Industrial Design Engineering"
        description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        duration="2011 - 2015"
        location="Enschede, Netherlands"
      />
      <ListItem
        src="/logo/university-twente-logo.png"
        title="University of Twente"
        subtitle="Master Industrial Design Engineering"
        description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        duration="2011 - 2015"
        location="Enschede, Netherlands"
      />
      <ListItem
        src="/logo/university-twente-logo.png"
        title="University of Twente"
        subtitle="Master Industrial Design Engineering"
        description="I can effectively manage the product creation process throughout the different product development stages, from initial concept to product launch."
        duration="2011 - 2015"
        location="Enschede, Netherlands"
      />
    </div>
  );
}

export default HomePage;
