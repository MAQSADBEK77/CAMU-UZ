import React from "react";
import Carousel from "../components/Carousel";
import { countries } from "../components/Data";
import YangliliklarCard from "../components/YangliliklarCard";
import Statics from "../components/Statics";
import MaqolaSlider from "../components/MaqolaSlider";
function Home() {
  return (
    <div className="container-css">
      <Carousel images={countries} />
      <YangliliklarCard />
      <Statics />
      <MaqolaSlider/>
    </div>
  );
}

export default Home;
