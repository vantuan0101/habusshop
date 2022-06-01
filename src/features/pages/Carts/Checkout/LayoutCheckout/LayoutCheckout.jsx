import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import style from './layout.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const LayoutCheckOut = () => {
    const carts = useSelector((state) => state.carts.carts);
    const dataForm = useSelector((state) => state.dataForm.dataForm);
    const [ship,setShip] = useState(0);
    const taxes = 12
    // console.log(dataForm);
    let totalQuantity=0
    carts.forEach(element => {
        totalQuantity = totalQuantity+ element.quantityCount
    });
    // console.log(totalQuantity);
    let totalPrice = 0 ;
    carts.forEach(element => {
        totalPrice = totalPrice+ element.quantityCount * element.price
    });
    // console.log(totalPrice);
    let totalPay =  totalPrice + ship + taxes;
    totalPay = Number(totalPay.toFixed(3));
    
    useEffect(() => {
        let feeShip = dataForm?.findIndex((item)=> item.shipMethod)
        if (feeShip !== -1){
            feeShip = Object.values(dataForm[feeShip])
    
        }
        if (feeShip[0] === 'UPS') {
            setShip(22.81)
        }
        if (feeShip[0] === 'UPX') {
            setShip(28.77)
        }
        if (feeShip[0] === 'UPZ') {
            setShip(35.72)
        }
        
    },[dataForm])
    // console.log(ship);
    return (
        <>
            <div className={clsx(style.layout)}>
                <div className={clsx(style.container)}>
                    <div className={clsx(style.header)}>
                        <div className={clsx(style.heading)}>
                            <p>Checkout</p>
                            <p>Details</p>
                        </div>
                        <div>Contact infor</div>
                    </div>
                </div>
                <div className={clsx(style.items)}>
                    <div className={clsx(style.items__item)}>
                        <Outlet />
                    </div>
                    <div className={clsx(style.product)}>
                        <div className={clsx(style.product__header)}>
                            <div>
                                <span>{totalQuantity ? totalQuantity : 0}</span> item
                            </div>
                            <div>Edit</div>
                        </div>
                        <div className={clsx(style.product__items)}>
                            {carts.map((item) => (
                                <div key={item.id} className={clsx(style.product__about)}>
                                    <div className={clsx(style.product__image)}>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className={clsx(style.product__price)}>
                                        <h3>${item.price}</h3>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            ))}
                            <div className={clsx(style.product__voucher)}>
                                <input placeholder="Enter Voucher" />
                                <div>Apply voucher</div>
                            </div>
                            <div className={clsx(style.product__final_price)}>
                                <div className={clsx(style.product__final_price_l)}>
                                    <p>subtotal</p>
                                    <p>${totalPrice}</p>
                                </div>
                                <div className={clsx(style.product__final_price_l)}>
                                    <p>ship</p>
                                    <p>${ship}</p>
                                </div>
                                <div className={clsx(style.product__final_price_l)}>
                                    <p>taxes</p>
                                    <p>${taxes}</p>
                                </div>
                                <div className={clsx(style.product__total_pay)}>
                                    <p>total pay</p>
                                    <p>${totalPay}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutCheckOut;
