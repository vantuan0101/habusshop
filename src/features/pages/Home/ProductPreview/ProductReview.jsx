import clsx from 'clsx';
import React, { memo } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import product from './productReview.module.scss';

const ProductReview = () => {
    const dataProduct = useSelector((state) => state.productAll);
    const loading = dataProduct.loading;
    // console.log(dataProduct);
    const newDataProduct = dataProduct.dataProduct.slice(0, 5);
    

    return (
        <div className={clsx(product.product)}>
            <h3 className={clsx(product.product_name)}>Products</h3>
            <div className={clsx(product.product_container)}>
                {loading ? (
                    <Skeleton />
                ) : (
                    newDataProduct.map((img, index) => (
                        <div key={img.id} className={clsx(product.product_show)}>
                            <div className={clsx(product.product_item)}>
                                <div className={clsx(product.product_content)}>
                                    <h3 className={clsx(product.product_content_heading)}>{img.category}</h3>
                                    <Link to={`/products/details/${img.id}`}>
                                        <div className={clsx(product.product_content_view)}>
                                            View details <AiOutlineArrowRight />
                                        </div>
                                    </Link>
                                </div>

                                <div className={clsx(product.product_image)}>
                                    <img className={clsx(product.product_image_img)} src={img.image} alt={img.title} />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Link to="/products" className={clsx(product.showmore)}>
                Show All
            </Link>
            <div className={clsx(product.discount)}>
                <div className={clsx(product.discount_text)}>
                    <h3>LOG IN OF%20 DISCOUNT</h3>
                    <p>
                        Among the activities,the purchase of the following products can play 20% off discount,quickly
                        login it!
                    </p>
                </div>
                <Link to="login" className={clsx(product.discount_btn)}>
                    Login
                </Link>
            </div>
        </div>
    );
};

export default memo(ProductReview);
