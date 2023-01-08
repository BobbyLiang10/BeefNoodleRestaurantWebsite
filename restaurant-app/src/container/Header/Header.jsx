import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Toronto's Finest Beef Noodle Restaurant" />
      <h1 className="header-h1">Beef Noodle Restaurant</h1>

      <button type="button" className="custom__button">
        <a href="#menu">Explore Menu</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.beef_noodle} alt="header img" />
    </div>
  </div>
);

export default Header;
