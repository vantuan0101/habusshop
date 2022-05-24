import clsx from "clsx";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMenProductList } from "./categoryMenProductSlice";
import products from "./menproduct.module.scss";
const MenProduct = () => {
  const {dataProduct } = useSelector((state)=> state.apiMenProduct)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMenProductList())
  },[dispatch])

  return (
    <div className={clsx(products.men_pd)}>
      <div className={clsx(products.men_ct)}>
        <div className={clsx(products.men_ct_header)}>
          <div className={clsx(products.men_ct_heading)}>
            {dataProduct ? (
              <h3>men's clothing</h3>
            ) : (
              <Skeleton width={100} />
            )}
            {dataProduct ? <p>Under $50</p> : <Skeleton width={100} />}
          </div>
          {dataProduct ? (
            <Link to="/products/details">
              <div className={clsx(products.men_ct_btn)}>Show All</div>
            </Link>
          ) : (
            <Skeleton width={130} height={40} />
          )}
        </div>

        <div className={clsx(products.men_ct_items)}>
          {dataProduct &&
            dataProduct.map((item,index) => (
              <div key={index} className={clsx(products.men_ct_item)}>
                {dataProduct ? (
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
