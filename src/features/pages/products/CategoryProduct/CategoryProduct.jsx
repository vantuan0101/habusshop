import clsx from "clsx";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import style from "./product.module.scss";

const CategoryProduct = () => {
  const {categoryList} = useSelector((state)=> state.apiCategory)

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
