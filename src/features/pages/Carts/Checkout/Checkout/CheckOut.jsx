import clsx from 'clsx';
import React from 'react';
import FormAddress from '../FormAddress/FormAddress';
import style from './checkout.module.scss';

export default function Checkout() {
    return (
        <div className={clsx(style.checkout)}>
            <div className={clsx(style.container)}>
                <FormAddress />
            </div>
        </div>
    );
}
