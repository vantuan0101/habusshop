import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import categoryApi from "../../../../api/categoryApi";
import BannerProduct from "../BannerProduct/BannerProduct";
import CategoryProduct from "../CategoryProduct/CategoryProduct";
import Feedback from "../FeedbackProduct/Feedback";
import IntroProduct from "../IntroProduct/IntroProduct";
import MenProduct from "../MenProduct/MenProduct";
import products from "./products.module.scss";
const Products = () => {
  const [categoryList, setCategoryList] = useState(null);
  useEffect(() => {
    const categoryFetch = async () => {
      const categoryList = await categoryApi.getAll();
      setCategoryList(categoryList);
    };
    categoryFetch();
  }, []);
  // console.log(categoryList);

  return (
        <div className={clsx(products.products)}>
          <div className={clsx(products.container)}>
            <CategoryProduct categoryList={categoryList} />
            <BannerProduct state={categoryList ? true : false} />
            <IntroProduct state={categoryList ? true : false} />
            <MenProduct categoryList={categoryList}/>
            <Feedback />
          </div>
        </div>
  );
};

export default Products;
