import React from "react";
import clsx from "clsx";
import products from "./introproduct.module.scss";
import img1 from "../../../../assets/img/img-search.png";
import img2 from "../../../../assets/img/img-tap.png";
import img3 from "../../../../assets/img/img-happy.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const IntroProduct = ({ state }) => {
  return (
    <div className={clsx(products.intro)}>
      <div className={clsx(products.intro_item)}>
        {state ? (
          <>
            <div className={clsx(products.intro_item_header)}>
              <h3>Search</h3>
              <p>1500+ products to choose from</p>
            </div>
            <div className={clsx(products.intro_item_img)}>
              <img src={img1} alt="" />
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>

      <div className={clsx(products.intro_item)}>
        {state ? (
          <>
            <div className={clsx(products.intro_item_header)}>
              <h3>Tap</h3>
              <p>Checkout in seconds with express checkout</p>
            </div>
            <div className={clsx(products.intro_item_img)}>
              <img src={img2} alt="" />
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>

      <div className={clsx(products.intro_item)}>
        {state ? (
          <>
            <div className={clsx(products.intro_item_header)}>
              <h3>Happy</h3>
              <p>Delivered to your door within day</p>
            </div>
            <div className={clsx(products.intro_item_img)}>
              <img src={img3} alt="" />
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
};

export default IntroProduct;
