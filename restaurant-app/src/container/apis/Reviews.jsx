import googlePlaces from "./google-maps-reviews";
//eslint-disable-next-line no-unused-vars
import style from "./google-maps-reviews.css";

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(`Plugin loaded!`);
  console.log(event);
  console.log(window.google);
  googlePlaces(window.google, "google-reviews", {
    placeId: "ChIJlylVX7DR1IkRpOCUi5XkI3M",
  });
});
