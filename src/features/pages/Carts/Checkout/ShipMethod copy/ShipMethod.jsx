import clsx from 'clsx';
import React from 'react';
import style from './method.module.scss';
const ShipMethod = () => {
    return (
        <div className={clsx(style.container)}>
            <div className={clsx(style.page)}>
                <div className={clsx(style.name)}>
                    <p>3</p>
                    <p>Shipping Method</p>
                </div>
                <div className={clsx(style.method)}>
                    <div className={clsx(style.method__1)}>
                        <input name="ship method" type="radio" className={clsx(style.method__input)} />
                        <div className={clsx(style.method__about)}>
                            <div className={clsx(style.method__img)}>
                                <img src="https://picsum.photos/id/237/200/300" alt="" />
                            </div>
                            <div className={clsx(style.method__infor)}>
                                <p>UPS</p>
                                <p>Expect delivery</p>
                                <p>2 day</p>
                            </div>
                            <div className={clsx(style.method__price)}>
                                <p>$22.1</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(style.method__1)}>
                        <input name="ship method" type="radio" className={clsx(style.method__input)} />
                        <div className={clsx(style.method__about)}>
                            <div className={clsx(style.method__img)}>
                                <img src="https://picsum.photos/id/237/200/300" alt="" />
                            </div>
                            <div className={clsx(style.method__infor)}>
                                <p>UPX</p>
                                <p>Expect delivery</p>
                                <p>2 day</p>
                            </div>
                            <div className={clsx(style.method__price)}>
                                <p>$22.1</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(style.method__1)}>
                        <input name="ship method" type="radio" className={clsx(style.method__input)} />
                        <div className={clsx(style.method__about)}>
                            <div className={clsx(style.method__img)}>
                                <img src="https://picsum.photos/id/237/200/300" alt="" />
                            </div>
                            <div className={clsx(style.method__infor)}>
                                <p>UPZ</p>
                                <p>Expect delivery</p>
                                <p>2 day</p>
                            </div>
                            <div className={clsx(style.method__price)}>
                                <p>$22.1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={clsx(style.btn)}>
                    <div className={clsx(style.btn__return)}>Return to carts</div>
                    <div className={clsx(style.btn__continue)}>Continue to Shipping</div>
                </section>
            </div>
        </div>
    );
};

export default ShipMethod;
