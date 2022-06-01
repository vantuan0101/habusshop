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
    // const schema = yup.object().shape({
    //     cardsName: yup.string().required('Please enter name'),
    //     cardsNumber: yup.number().required('Please enter zip code').positive().integer(),
    //     cardsPin: yup.number().min(6).required('Please enter phone').positive().integer(),

    // });
    // const methods = useForm({
    //     resolver: yupResolver(schema),
    // });
    // const { handleSubmit } = methods;
    
    return (
        // <FormProvider {...methods}>
        //     <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className={clsx(style.checkout)}>
                    <div className={clsx(style.container)}>
                        <FormAddress />
                        {/* <ShipMethod />
                        <Payment /> */}
                    </div>
                </div>
        //         <input type="submit" />
        //     </form>
        // </FormProvider>
    );
}
