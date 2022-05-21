import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import homeslider from "./slider.module.scss";
const SliderProduct = ({ dataProduct }) => {
  let dataSlider = [];
  dataSlider = dataProduct.slice(0, 3);
  // console.log(dataSlider);
  const settings = {
    dots: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className={clsx(homeslider.custom_dots)}>
        <ul style={{ margin: "0px", padding: "0" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings} className={clsx(homeslider.container)}>
      {dataSlider.map((data) => (
        <React.Fragment key={data.id}>
          <div className={clsx(homeslider.slider)}>
            <div className={clsx(homeslider.slider_a)}>
              <p className={clsx(homeslider.slider_a_cap)}>Habus&#38;Moba</p>
              <h2 className={clsx(homeslider.slider_a_pro)}>{data.title}</h2>
              <p className={clsx(homeslider.slider_a_dsc)}>{data.description}</p>
              <Link to='/products/details'>
                <div  className={clsx(homeslider.slider_a_btn)}>Move</div>
              </Link>
            </div>
            <div className={clsx(homeslider.slider_b)}>
              <div className={clsx(homeslider.slider_b_img)}>
                <img src={data.image} alt="" />
              </div>
              <div className={clsx(homeslider.slider_b_about)}>
                <p className={clsx(homeslider.slider_b_design)}>Design</p>
                <p className={clsx(homeslider.slider_b_by)}>By: lb Koford-Larsen</p>
                <p className={clsx(homeslider.slider_b_price)}>${data.price}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Slider>
  );
};

export default SliderProduct;
