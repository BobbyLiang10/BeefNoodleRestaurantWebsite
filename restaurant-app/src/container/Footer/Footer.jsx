import React from "react";

import "./Footer.css";

import { FiFacebook } from "react-icons/fi";
import { FaYelp } from "react-icons/fa";
import { images } from "../../constants";

const Footer = () => (
  <div className="footer section__padding" id="login">
    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Address: 4271 Sheppard Avenue East Unit #1. Scarborough, ON. M1S 4G4
        </p>
        <p className="p__opensans">Phone Number: 416-297-1581</p>
      </div>
      <div className="footer-links_logo">
        <p className="footer-headtext"> Beef Noodle Restaurant </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <div className="footer-links_icons">
          <a href="https://www.facebook.com/BeefNoodleRestaurant">
            <FiFacebook />
          </a>
          <a href="https://www.yelp.ca/biz/beef-noodle-restaurant-scarborough">
            <FaYelp />
          </a>
        </div>
      </div>
      <div className="footer-links_work">
        <h1 className="footer-headtext">Restaurant Hours</h1>
        <p className="p__opensans">Monday-Sunday: 11am - 9pm</p>
      </div>
    </div>
    <div className="footer_copyright">
      <p className="p__opensans">
        2022 Beef Noodle Restaurant. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
