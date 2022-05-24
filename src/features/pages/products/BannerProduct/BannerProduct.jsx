import clsx from "clsx";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import img1 from "../../../../assets/img/SVG/Asset1.svg";
import img2 from "../../../../assets/img/SVG/Asset2.svg";
import img3 from "../../../../assets/img/SVG/Asset3.svg";
import style from './style.module.scss';

const BannerProduct = () => {
  const {loading} = useSelector((state)=> state.apiCategory)
  // console.log(loading);

  return (
    <>
      {!loading ? (
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
