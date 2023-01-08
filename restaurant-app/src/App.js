import React from "react";

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Video,
  // will add onto website when more information is available
  /*Laurels,*/ SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Video />
    {/*<Laurels />*/}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
