import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './detail.module.scss';
import { useParams } from 'react-router-dom';
import productApi from 'api/productsApi';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {addCart} from '../../../../redux/cartsSlice'
const ReadMore = ({ children }) => {
    const text = children;
    // console.log(typeof text);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className={clsx(style.text)}>
            {isReadMore ? text?.slice(0, 150) : text}
            <span onClick={toggleReadMore} className={clsx(style.read_or_hide)}>
                {isReadMore ? '...read more' : ' show less'}
            </span>
        </p>
    );
};

const DetailSpecificProduct = () => {
    const [productDetail, setProductDetail] = useState([]);
    const [qty, setQty] = useState(1);
    let params = useParams();
    // console.log(params.detailsId);
    const dispatch = useDispatch()
    useEffect(() => {
        const res = async () => {
            const req = await productApi.get(params.detailsId);
            setProductDetail(req);
        };
        res();
    }, [params.detailsId]);
    // console.log(productDetail);
    const decreaseQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };
    const increaseQty = () => {
        setQty(qty + 1);
    };
    const handleAddCart = () => {
        dispatch(addCart(productDetail ,  qty))
    };
    return (
        <div className={clsx(style.product_detail)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.image)}>
                    <img src={productDetail.image} alt="" />
                </div>
                <div className={clsx(style.product)}>
                    <div className={clsx(style.product_name)}>{productDetail.title}</div>
                    <div className={clsx(style.product_infor)}>
                        <div className={clsx(style.product_quantity)}>
                            <button onClick={decreaseQty}>-</button>
                            <div>{qty}</div>
                            <button onClick={increaseQty}>+</button>
                        </div>
                        <div className={clsx(style.product_price)}>${productDetail.price}</div>
                    </div>
                    <div className={clsx(style.product_rate)}>
                        <AiFillStar color="orange" />
                        {productDetail?.rating?.rate}
                    </div>
                    <div className={clsx(style.product_dsc)}>
                        <ReadMore>{productDetail.description}</ReadMore>
                    </div>
                    <div className={clsx(style.product_add)} onClick={handleAddCart}>
                        <AiOutlineShoppingCart />
                        <div >Add to carts</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSpecificProduct;
