import categoryApi from 'api/categoryApi';
import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from 'redux/cartsSlice';
import products from './menproduct.module.scss';
const MenProduct = () => {
    const [dataProduct, setDataProduct] = useState([]);
    useEffect(() => {
        const res = async () => {
            const req = await categoryApi.getSpecific("men's%20clothing");
            setDataProduct(req);
        };
        res();
    }, []);
    const dispatch = useDispatch();
    const handleAddCarts = (item) => {
        dispatch(addCart(item));
    };
    return (
        <div className={clsx(products.men_pd)}>
            <div className={clsx(products.men_ct)}>
                <div className={clsx(products.men_ct_header)}>
                    <div className={clsx(products.men_ct_heading)}>
                        <h3>men's clothing</h3>
                        <p>Under $50</p>
                    </div>
                    <Link to="/products/details">
                        <div className={clsx(products.men_ct_btn)}>Show All</div>
                    </Link>
                </div>

                <div className={clsx(products.men_ct_items)}>
                    {dataProduct.map((item, index) => (
                        <div key={index} className={clsx(products.men_ct_item)}>
                            <div className={clsx(products.men_ct_pd)}>
                                {item ? (
                                    <>
                                        <div className={clsx(products.men_ct_pd_img)}>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div
                                            className={clsx(products.men_ct_pd_add)}
                                            onClick={() => handleAddCarts(item)}
                                        >
                                            +
                                        </div>
                                    </>
                                ) : (
                                    <Skeleton />
                                )}
                            </div>

                            <div className={clsx(products.men_ct_dsc)}>
                                <Link to={`/products/details/${item.id}`}>
                                   {item ? item.title : <Skeleton height={40} />}
                                </Link>
                                <p> {item ? '$' + item.price : <Skeleton width={40} />}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(MenProduct);
