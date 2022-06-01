import React from 'react';
import { Link } from 'react-router-dom';
import style from './thanks.module.scss';
import clsx from 'clsx';

const ThanksCheckout = () => {
    return (
        <div className={clsx(style.container)}>
            <div className={clsx(style.thanks)}>
                <h3>Thanks</h3>
                <h3>For your purchase</h3>
            </div>
            <div className={clsx(style.contact)}>
                <p>We'd love to hear from you.</p>
                <p>
                    Please send an email to our customer service at{' '}
                    <a href="mailto:huynhvantuan889@gmail.com">huynhvantuan889@gmail.com</a> to let us know your
                    experience went!{' '}
                </p>
            </div >
            <Link className={clsx(style.shopping)} to="/products/details">Continue Shopping</Link>
        </div>
    );
};

export default ThanksCheckout;
