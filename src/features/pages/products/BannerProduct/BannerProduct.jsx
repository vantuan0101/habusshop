import React from "react";
import clsx from "clsx";
import style from './style.module.scss'
import img1 from "../../../../assets/img/SVG/Asset1.svg";
import img2 from "../../../../assets/img/SVG/Asset2.svg";
import img3 from "../../../../assets/img/SVG/Asset3.svg";
import Skeleton from "react-loading-skeleton";

const BannerProduct = ({state}) => {
  return (
    <>
      {state ? (
        <div className={clsx(style.products_card)}>
          <div className={clsx(style.products_card_heading)}>
            <h3>Lightning Fast Shipping</h3>
            <p>From our HABUS to YOURS</p>
          </div>
          <div className={clsx(style.products_card_img)}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      ) : (
        <Skeleton height={300} />
      )}
    </>
  );
};

export default BannerProduct;
