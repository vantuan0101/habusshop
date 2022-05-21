import clsx from "clsx";
import React from "react";
import home from "./home.module.scss";
import Intro from "../Intro/Intro";
import ProductReview from "../ProductPreview/ProductReview";
import SliderProduct from "../Slider/Slider";

const Home = ({ dataProduct }) => {
  // console.log(dataSlider);
  return (
    <div className={clsx(home.home)}>
      {/* Slider */}
      <SliderProduct dataProduct={dataProduct} />

      {/* intro */}
      <Intro />

      <ProductReview dataProduct={dataProduct} />
    </div>
  );
};

export default Home;
