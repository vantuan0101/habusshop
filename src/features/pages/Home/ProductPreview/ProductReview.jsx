import clsx from "clsx";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import product from "./productReview.module.scss";

const ProductReview = ({ dataProduct }) => {
  //   console.log(dataProduct);
  let dataPreview = [];
  dataPreview = dataProduct.slice(3, 8);
  //   console.log(dataPreview);
  return (
    <div className={clsx(product.product)}>
      <h3 className={clsx(product.product_name)}>Products</h3>
      <div className={clsx(product.product_container)}>
        {dataPreview.map((img, index) => (
          <div key={img.id} className={clsx(product.product_show)}>
            <div className={clsx(product.product_item)}>
              <div className={clsx(product.product_content)}>
                <h3 className={clsx(product.product_content_heading)}>
                  {img.category}
                </h3>
                <Link to="/products/details">
                  <div className={clsx(product.product_content_view)}>
                    View details <AiOutlineArrowRight />
                  </div>
                </Link>
              </div>

              <div className={clsx(product.product_image)}>
                <img
                  className={clsx(product.product_image_img)}
                  src={img.image}
                  alt={img.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/products" className={clsx(product.showmore)}>
        Show All
      </Link>
      <div className={clsx(product.discount)}>
        <div className={clsx(product.discount_text)}>
          <h3>LOG IN OF%20 DISCOUNT</h3>
          <p>
            Among the activities,the purchase of the following products can play
            20% off discount,quickly login it!
          </p>
        </div>
        <Link to="login" className={clsx(product.discount_btn)}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default ProductReview;
