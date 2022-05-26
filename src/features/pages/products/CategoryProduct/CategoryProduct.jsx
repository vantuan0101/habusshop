import clsx from 'clsx';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import style from './product.module.scss';

const CategoryProduct = () => {
    const { categoryList, loading } = useSelector((state) => state.apiCategory);
    // console.log(loading);
// console.log(categoryList);

    return (
        <>
            <div className={clsx(style.products_category)}>
              {categoryList.map((cata, index)=>(
                <h3 key={index}>
                 {!loading ? cata : <Skeleton />}
                </h3>
              ))}
            </div>
        </>
    );
};

export default CategoryProduct;
// 