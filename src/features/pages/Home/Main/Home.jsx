import clsx from "clsx";
import React from "react";
import Intro from "../Intro/Intro";
import ProductReview from "../ProductPreview/ProductReview";
import SliderProduct from "../Slider/Slider";
import home from "./home.module.scss";

const Home = () => {
  
  
  return (
    <div className={clsx(home.home)}>
      {/* Slider */}
      <SliderProduct />

      {/* intro */}
      <Intro />

      <ProductReview />
    </div>
  );
};

export default Home;
