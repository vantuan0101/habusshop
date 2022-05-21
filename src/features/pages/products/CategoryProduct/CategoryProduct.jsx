import React from "react";
import style from "./product.module.scss";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

const CategoryProduct = ({ categoryList }) => {
  return (
    <>
      {categoryList ? (
        <div className={clsx(style.products_category)}>
          {categoryList.map((cata, index) => <h3 key={index}>{cata}</h3>)}
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default CategoryProduct;
