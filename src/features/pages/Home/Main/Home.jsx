import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiCategoryList } from 'redux/apiCategorySlice';
import Intro from '../Intro/Intro';
import ProductReview from '../ProductPreview/ProductReview';
import SliderProduct from '../Slider/Slider';
import home from './home.module.scss';

const Home = () => {
    
    return (
        <div className={clsx(home.home)}>
            {/* Slider */}
            <SliderProduct />

            {/* intro */}
            <Intro />

            <ProductReview />
        </div>
    );
};

export default Home;
