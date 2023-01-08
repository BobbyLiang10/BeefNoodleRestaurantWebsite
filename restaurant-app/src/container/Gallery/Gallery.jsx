import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const galleryImages = [
  images.sweet_sour_pork,
  images.rice_noodle,
  images.rice_pancake,
  images.soup,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex__center">
      <div className="gallery-content">
        <SubHeading title="Photos" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Take a look at some of our signature dishes.
        </p>
        <button type="button" className="custom__button">
          <a href="https://www.yelp.ca/biz_photos/beef-noodle-restaurant-scarborough">
            View More
          </a>
        </button>
      </div>

      <div className="gallery-images">
        <div className="gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery_arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery_arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
