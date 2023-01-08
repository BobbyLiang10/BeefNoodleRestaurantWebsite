import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img_reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in.</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote"></img>
            <p className="p__opensans"> Testing the chef</p>
          </div>
          <p className="p__opensans">Testing the other chefs</p>
        </div>
        <div className="app__chef-sign">
          <p>Jane Doe</p>
          <p className="p__opensans">Chef and Founder</p>
          <img src={images.sign} alt="sign"></img>
        </div>
      </div>
    </div>
  );
}

/*Place ID: ChIJlylVX7DR1IkRpOCUi5XkI3M
  API Key: AIzaSyDpZ7mdBmUZncTPYD4jQe665cBEQi9-cf8*/

export default Chef;
