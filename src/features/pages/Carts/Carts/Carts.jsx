import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { AiFillGoogleCircle, AiTwotoneCar } from 'react-icons/ai';
import { BsApple, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsPaypal, BsShop } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { quantityDecrease, quantityIncrease, removeCart } from 'redux/cartsSlice';
import style from './carts.module.scss';
const Carts = () => {
    const carts = useSelector((state) => state.carts);
    // console.log(carts.carts);
    const [price, setPrice] = useState([]);
    useEffect(() => {
        if (carts.carts) {
            const newPrice = carts?.carts.map((item) => item.price * item.quantityCount);
            setPrice(newPrice);
        }
    }, [carts.carts]);

    const totalPrice = price?.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    // console.log(price);
    // console.log(totalPrice);

    /* Handle Remove Cart */
    const dispatch = useDispatch();
    const handleRemoveCart = (index) => {
        dispatch(removeCart(index));
    };

    /* Handle Quantity Cart */
    const handleDecreaseCount = (index) => {
        if (carts.carts[index].quantityCount > 1) {
            dispatch(quantityDecrease(index));
        } else {
            dispatch(removeCart(index));
        }
        // console.log(index);
    };
    const handleIncreaseCount = (index) => {
        dispatch(quantityIncrease(index));
    };
    return (
        <div className={clsx(style.carts)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.mycarts)}>My Carts</div>
                <div className={clsx(style.header)}>
                    <div className={clsx(style.heading)}>
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>QTY</h3>
                        <h3>Total</h3>
                    </div>

                    <div className={clsx(style.products)}>
                        {carts.carts?.map((cart, index) => (
                            <div key={index} className={clsx(style.product)}>
                                <div className={clsx(style.product_image)}>
                                    <img src={cart.image} alt="" />
                                </div>
                                <div className={clsx(style.product_price)}>${cart.price}</div>
                                <div className={clsx(style.product_quantity)}>
                                    <BsFillArrowLeftCircleFill onClick={() => handleDecreaseCount(index)} />
                                    <div>{cart.quantityCount}</div>
                                    <BsFillArrowRightCircleFill onClick={() => handleIncreaseCount(index)} />
                                </div>
                                <div className={clsx(style.product_total)}>${cart.price * cart.quantityCount}</div>
                                <div className={clsx(style.product_remove)} onClick={() => handleRemoveCart(index)}>X</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={clsx(style.footer)}>
                    <div className={clsx(style.message)}>
                        <p>Special Instructions for Seller </p>
                        <input type="text" placeholder="message" />
                    </div>
                    <div className={clsx(style.payment)}>
                        <div className={clsx(style.subtotal)}>
                            <h3>Subtotal</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className={clsx(style.ship_about)}>
                            <p>Shipping and taxes</p>
                        </div>
                        <div className={clsx(style.fee_ship)}>
                            <input type="checkbox" name="" id="" />
                            <div className={clsx(style.fee_ship_contain)}>
                                <div className={clsx(style.fee_ship_contain_image)}>
                                    <AiTwotoneCar />
                                </div>
                                <div className={clsx(style.fee_ship_contain_infor)}>
                                    <p>Shipping protection</p>
                                    <p>Lossless</p>
                                </div>
                                <div className={clsx(style.fee_ship_contain_money)}>$3.75</div>
                            </div>
                        </div>

                        <div className={clsx(style.license)}>
                            *By Deselecting Shipping Protection , The product is not damage or stolen
                        </div>
                        <Link to='checkout' className={clsx(style.checkout)}>Checkout</Link>
                        <div className={clsx(style.other_payment)}>
                            <div>
                                <AiFillGoogleCircle />
                                <span>Google</span>
                            </div>
                            <div>
                                <BsPaypal />
                                <span>Paypal Pay</span>
                            </div>
                            <div>
                                <BsApple />
                                <span>ApplePay</span>
                            </div>
                            <div>
                                <BsShop />
                                <span>Shop Pay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;
