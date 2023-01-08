import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="specialMenu flex__center section__padding" id="menu">
    <div className="title">
      <SubHeading title="Our Menu" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="menu">
      <div className="menu_wine flex__center">
        <p className="menu_heading">Popular Dishes</p>
        <div className="menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="menu_img">
        <img src={images.noodle} alt="menu img" />
        <img src={images.shanghai_noodles} alt="menu img" />
        <img src={images.dumplings} alt="menu img" />
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <a href={images.menu} target="_blank" rel="noreferrer noopener">
        <button type="button" className="custom__button" alt="menu img">
          View More
        </button>
      </a>
    </div>
  </div>
);

export default SpecialMenu;
