import React, { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './productdetail.module.scss';
import categoryApi from 'api/categoryApi';
import productApi from 'api/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiDataProduct } from '../../../../redux/apiProductSlice';
const ProductDetail = () => {
    const [productClick, setProductClick] = useState('electronics');

    // console.log(dataProduct , loading);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchApiDataProduct(productClick));
        
    // }, [productClick]);

    const [dataProduct, setDataProduct] = useState([]);
    useEffect(() => {
        const res = async () => {
            const req = await categoryApi.getSpecific(productClick);
            setDataProduct(req);
        };
        res();
    }, [productClick]);

    const { categoryList } = useSelector((state) => state.apiCategory);
    
    const handleGetCategoryName = (e) => {
        // console.log(e.target.innerHTML);
        setProductClick(e.target.innerHTML);
        // dispatch(fetchApiDataProduct(e.target.innerHTML));
    };
    // const { dataProduct, loading } = useSelector((state) => state.apiProduct);
    const handleAddProduct = (item) => {
        console.log(item);
    };
    return (
        <div className={clsx(style.pd_detail)}>
            <ul className={clsx(style.pd_header)}>
                {categoryList.map((item, index) => (
                    <li className={clsx(style.pd_items)} key={index} onClick={handleGetCategoryName}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className={clsx(style.pd_main)}>
                <ul className={clsx(style.pd_sidebar)}>
                    {categoryList.map((item, index) => (
                        <li className={clsx(style.pd_sidebar_item)} key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className={clsx(style.content)}>
                    <div className={clsx(style.content_header)}>
                        <h3 className={clsx(style.content_heading)}>{productClick}</h3>
                        <div className={clsx(style.content_filter)}>
                            <div>Price</div>
                            <div>Brand</div>
                            <div>Sort By</div>
                        </div>
                    </div>
                    <ul className={clsx(style.content_filter_tags)}>
                        <li>
                            Electronics <span>X</span>
                        </li>
                        <li>
                            Electronics <span>X</span>
                        </li>
                        <li>
                            Electronics <span>X</span>
                        </li>
                        <li>
                            Electronics <span>X</span>
                        </li>
                        <li>
                            Electronics <span>X</span>
                        </li>
                        <li>
                            Electronics <span>X</span>
                        </li>
                        <li>
                            Electronics <span>X</span>
                        </li>
                    </ul>
                    <div className={clsx(style.all_product)}>Show All Products</div>
                    <ul className={clsx(style.products)}>
                        {dataProduct.map((item) => (
                            <li key={item.id} className={clsx(style.products_items)}>
                                <div className={clsx(style.products_image)}>
                                    <div className={clsx(style.products_img)}>
                                        <img src={item.image} alt="" />
                                        <div
                                            className={clsx(style.products_add)}
                                            onClick={() => handleAddProduct(item)}
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(style.products_abouts)}>
                                    <p className={clsx(style.products_name)}>{item.title}</p>
                                    <p className={clsx(style.products_price)}>${item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductDetail);
