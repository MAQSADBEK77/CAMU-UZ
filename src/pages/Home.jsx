import React from "react";
import Carousel from "../components/Carousel";
import { countries } from "../components/Data";
import YangliliklarCard from "../components/YangliliklarCard";
import Statics from "../components/Statics";
function Home() {
  return (
    <div className="container-css">
      <Carousel images={countries} />
      <YangliliklarCard />
      <Statics/>
    </div>
  );
}

export default Home;
