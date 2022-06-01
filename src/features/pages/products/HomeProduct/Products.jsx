import clsx from 'clsx';
import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import BannerProduct from '../BannerProduct/BannerProduct';
import CategoryProduct from '../CategoryProduct/CategoryProduct';
import Feedback from '../FeedbackProduct/Feedback';
import IntroProduct from '../IntroProduct/IntroProduct';
import MenProduct from '../MenProduct/MenProduct';
import products from './products.module.scss';
const Products = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    
    return (
        <div className={clsx(products.products)}>
            <div className={clsx(products.container)}>
                <CategoryProduct />
                <BannerProduct />
                <IntroProduct />
                <MenProduct />
                <Feedback />
            </div>
        </div>
    );
};

export default Products;
