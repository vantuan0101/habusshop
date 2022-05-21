import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import categoryApi from "../../../../api/categoryApi";
import products from "./menproduct.module.scss";
const MenProduct = () => {
  // const [categoryMenList, setCategoryMenList] = useState(null);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/men's%20clothing")
  //     .then((res) => res.json())
  //     .then((json) => setCategoryMenList(json));
  // }, []);
  //    console.log(categoryMenList);
  const [categoryMenList, setCategoryMenList] = useState(null);
    useEffect(() => {
        const categoryFetch = async () => {
            const categoryList = await categoryApi.getSpecific("men's%20clothing");
            setCategoryMenList(categoryList);
        };
        categoryFetch();
    }, []);
  return (
    <div className={clsx(products.men_pd)}>
      <div className={clsx(products.men_ct)}>
        <div className={clsx(products.men_ct_header)}>
          <div className={clsx(products.men_ct_heading)}>
            {categoryMenList ? (
              <h3>men's clothing</h3>
            ) : (
              <Skeleton width={100} />
            )}
            {categoryMenList ? <p>Under $50</p> : <Skeleton width={100} />}
          </div>
          {categoryMenList ? (
            <Link to="/products/details">
              <div className={clsx(products.men_ct_btn)}>Show All</div>
            </Link>
          ) : (
            <Skeleton width={130} height={40} />
          )}
        </div>

        <div className={clsx(products.men_ct_items)}>
          {categoryMenList &&
            categoryMenList.map((item) => (
              <div key={item.id} className={clsx(products.men_ct_item)}>
                {categoryMenList ? (
                  <div className={clsx(products.men_ct_pd)}>
                    <div className={clsx(products.men_ct_pd_img)}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={clsx(products.men_ct_pd_add)}>+</div>
                  </div>
                ) : (
                  <Skeleton width={300} height={300} />
                )}

                <div className={clsx(products.men_ct_dsc)}>
                  <p>{item ? item.title : <Skeleton height={40} />}</p>
                  <p> {item ? "$" + item.price : <Skeleton width={40} />}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenProduct;
