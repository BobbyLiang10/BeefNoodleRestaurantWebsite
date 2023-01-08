import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus-content flex__center">
      <div className="aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Beef Noodle Restaurant is an iconic Chinese/Taiwanese restaurant in
          the Scarborough district of Toronto. Since 1990, we have served
          customers locally and worldwide for over thirty years, bringing
          friends and families together and leaving them with an insatiable
          appetite for more. Our authentic beef noodle recipe has remained
          intact for generations and and we are recognized as one of the best
          beef noodle restaurants in Toronto. We welcome you to come visit us
          and taste the great sensation that has captivated the taste buds of
          Scarborough.
        </p>
      </div>
      <div className="aboutus_restaurant_image flex__center">
        <img src={images.restaurant_entrance} alt="about_entrance"></img>
      </div>
    </div>
  </div>
);

export default AboutUs;
