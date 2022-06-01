import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import InputField from 'components/form/form-control/InputField';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addDataFrom } from 'redux/dataFormSlice';
import * as yup from 'yup';
import style from './payment.module.scss';

const schema = yup.object().shape({
    cardsName: yup.string().required('Please enter name'),
    cardsNumber: yup.number().required('Please enter zip code').positive().integer(),
    cardsPin: yup.number().min(6).required('Please enter phone').positive().integer(),
});
const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        dispatch(addDataFrom(data));
        navigate('/carts/checkout/success');
    };
    
    const dataForm = useSelector((state) => state.dataForm);
    console.log('data Form ',dataForm);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.page)}>
                    <div className={clsx(style.payment)}>
                        <div className={clsx(style.name)}>
                            <p>4</p>
                            <p>Payment</p>
                        </div>
                        <div className={clsx(style.secure)}>All transaction are secure</div>
                        <div className={clsx(style.cards)}>
                            <label className={clsx(style.cards__select)}>
                                <div className={clsx(style.cards__credit)}>
                                    <input type="radio" name="payment" id="" />
                                    <div>Credit cards</div>
                                </div>
                                <div className={clsx(style.cards__select__name)}>
                                    <div>
                                        <FaCcVisa />
                                    </div>
                                    <div>
                                        <FaCcMastercard />
                                    </div>
                                    <div>
                                        <FaCcJcb />
                                    </div>
                                </div>
                            </label>

                            <InputField
                                register={register}
                                errors={errors}
                                type={'number'}
                                name={'cardsNumber'}
                                label={'Enter Number Cards'}
                                className={clsx(style.cards__number)}
                            />

                            <InputField
                                register={register}
                                errors={errors}
                                label={'Enter Name Cards'}
                                name={'cardsName'}
                                className={clsx(style.cards__name)}
                            />
                            <div className={clsx(style.cards__infor)}>
                                <InputField register={register} errors={errors} type={'date'} name={'cardsDate'} />
                                <InputField
                                    register={register}
                                    errors={errors}
                                    type={'number'}
                                    label={'PIN'}
                                    name={'cardsPin'}
                                />
                            </div>
                        </div>

                        <label className={clsx(style.paypal)}>
                            <input type="radio" name="payment" id="" />
                            <div>
                                <FaCcPaypal />
                            </div>
                        </label>
                    </div>

                    <div className={clsx(style.billing)}>
                        <div className={clsx(style.name)}>
                            <p>4</p>
                            <p>Billing Address</p>
                        </div>
                        <div className={clsx(style.secure)}>All transaction are secure</div>
                        <label className={clsx(style.rule)}>
                            <input type="radio" name="address" id="" />
                            <div>Same as shipping address</div>
                        </label>
                        <label className={clsx(style.rule)}>
                            <input type="radio" name="address" id="" />
                            <div>Use a different address</div>
                        </label>
                        <section className="btn">
                            <Link to="/carts/checkout/ship-method" className="btn__return">
                                Back to Ship Method
                            </Link>
                            <button type="submit" className="btn__continue">
                                Check Out
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Payment;
