import productApi from 'api/productsApi';
import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import homeslider from './slider.module.scss';

const SliderProduct = () => {
    const dataProduct = useSelector((state) => state.productAll);
    const loading = dataProduct.loading;
    console.log(dataProduct);
    const newDataProduct = dataProduct.dataProduct.slice(0, 3);
    // useEffect(() => {
    //     const res = async () => {
    //         setLoading(true)
    //         const req = await productApi.getLimit(3);
    //         setDataProduct(req);
    //         setLoading(false)
    //     };
    //     res();
    // }, []);
    const settings = {
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (dots) => (
            <div className={clsx(homeslider.custom_dots)}>
                <ul style={{ margin: '0px', padding: '0' }}> {dots} </ul>
            </div>
        ),
    };
    return (
        <Slider {...settings} className={clsx(homeslider.container)}>
            {loading ? (
                <Skeleton />
            ) : (
                newDataProduct.map((data) => (
                    <React.Fragment key={data.id}>
                        <div className={clsx(homeslider.slider)}>
                            <div className={clsx(homeslider.slider_a)}>
                                <p className={clsx(homeslider.slider_a_cap)}>Habus&#38;Moba</p>
                                <h2 className={clsx(homeslider.slider_a_pro)}>{data.title}</h2>
                                <p className={clsx(homeslider.slider_a_dsc)}>{data.description}</p>
                                <Link to={`/products/details/${data.id}`}>
                                    <div className={clsx(homeslider.slider_a_btn)}>Move</div>
                                </Link>
                            </div>
                            <div className={clsx(homeslider.slider_b)}>
                                <div className={clsx(homeslider.slider_b_img)}>
                                    <img src={data.image} alt="" />
                                </div>
                                <div className={clsx(homeslider.slider_b_about)}>
                                    <p className={clsx(homeslider.slider_b_design)}>Design</p>
                                    <p className={clsx(homeslider.slider_b_by)}>By: lb Koford-Larsen</p>
                                    <p className={clsx(homeslider.slider_b_price)}>${data.price}</p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            )}
        </Slider>
    );
};

export default memo(SliderProduct);
