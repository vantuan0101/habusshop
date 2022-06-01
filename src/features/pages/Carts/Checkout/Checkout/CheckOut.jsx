import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import style from './checkout.module.scss';
import FormAddress from '../FormAddress/FormAddress';
import Payment from '../Payment/Payment';
import ShipMethod from '../ShipMethod/ShipMethod';

export default function Checkout() {
    return (
        <div className={clsx(style.checkout)}>
            <div className={clsx(style.container)}>
                <FormAddress />
            </div>
        </div>
    );
}
