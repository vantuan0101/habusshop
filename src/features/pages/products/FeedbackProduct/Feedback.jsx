import clsx from 'clsx';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Slider from 'react-slick';
import feedback from './feedback.module.scss';

const Feedback = () => {
    const categoryList =[1,2,3,4,5]
    const settings = {
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={clsx(feedback.home)}>
            <div className={clsx(feedback.container)}>
                <div className={clsx(feedback.header)}>
                    {categoryList ? <h3>Let Customers</h3> : <Skeleton width={150} />}
                    {categoryList ? <p>Speak for us</p> : <Skeleton width={100} />}
                </div>
                <Slider {...settings}>
                    {categoryList &&
                        categoryList.map((item,index) =>
                            item ? (
                                <div key={index} className={clsx(feedback.slider)}>
                                    <div className={clsx(feedback.slider_items)}>
                                        <div className={clsx(feedback.contain)}>
                                            <div className={clsx(feedback.contain_header)}>
                                                <p>A very satisfied customer</p>
                                                <p>
                                                    My order was delivered on time and the Peach Crown Royal was
                                                    sufficient in quality
                                                </p>
                                                <p>Jash Doae</p>
                                            </div>
                                            <div className={clsx(feedback.contain_feed)}>
                                                <div>
                                                    <img src="https://picsum.photos/id/237/200/300" alt="lo" />
                                                </div>
                                                <p>Sazerac Sk</p>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                            ) : (
                                <Skeleton height={350} />
                            ),
                        )}
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;
