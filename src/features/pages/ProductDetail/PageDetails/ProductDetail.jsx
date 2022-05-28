import clsx from 'clsx';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './productdetail.module.scss';
const ProductDetail = ({
    handleGetCategoryName,
    dataProduct,
    handleSortDesc,
    handleSortAsc,
    handleShowAllProduct,
    productClick,
    handleAddClick
}) => {
    const { categoryList } = useSelector((state) => state.apiCategory);
    const handleCategoryName = (e) => {
        // setProductClick(e.target.innerHTML)
        handleGetCategoryName(e.target.innerHTML);
        // return productClick
    };
    
    return (
        <div className={clsx(style.pd_detail)}>
            <ul className={clsx(style.pd_header)}>
                {categoryList.map((item, index) => (
                    <li className={clsx(style.pd_items)} key={index} onClick={handleCategoryName}>
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
                            <ul className={clsx(style.content_filter_items)}>
                                Price
                                <div>
                                    <li className={clsx(style.content_filter_items_item)}>Decrease</li>
                                </div>
                            </ul>
                            <ul className={clsx(style.content_filter_items)}>
                                Brand
                                <div>
                                    <li className={clsx(style.content_filter_items_item)}>Decrease</li>
                                </div>
                            </ul>
                            <ul className={clsx(style.content_filter_items)}>
                                Sort By
                                <div>
                                    <li className={clsx(style.content_filter_items_item)} onClick={handleSortDesc}>
                                        Decrease
                                    </li>
                                    <li className={clsx(style.content_filter_items_item)} onClick={handleSortAsc}>
                                        Increase
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={clsx(style.all_product)} onClick={handleShowAllProduct}>
                        Show All Products
                    </div>
                    <ul className={clsx(style.products)}>
                        {dataProduct.map((item) => (
                            <li key={item.id} className={clsx(style.products_items)}>
                                <div className={clsx(style.products_image)}>
                                    <div className={clsx(style.products_img)}>
                                        <img src={item.image} alt="" />
                                        <div className={clsx(style.products_add)} onClick={()=>handleAddClick(item)}>+</div>
                                    </div>
                                </div>
                                <div className={clsx(style.products_abouts)}>
                                    <Link to={`${item.id}`} className={clsx(style.products_name)}>{item.title}</Link>
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
