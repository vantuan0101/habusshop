import clsx from 'clsx';
import InputField from 'components/form/form-control/InputField';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './method.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addDataFrom } from 'redux/dataFormSlice';

const schema = yup.object().shape({
    shipMethod: yup.string(),
});

const ShipMethod = () => {
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
        navigate('/carts/checkout/payment');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.page)}>
                    <div className={clsx(style.name)}>
                        <p>3</p>
                        <p>Shipping Method</p>
                    </div>
                    <div className={clsx(style.method)}>
                        <label className={clsx(style.method__1)}>
                            <InputField
                                register={register}
                                errors={errors}
                                value="UPS"
                                type="radio"
                                name="shipMethod"
                                className={clsx(style.method__input)}
                            />
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
                                    <p>$22.81</p>
                                </div>
                            </div>
                        </label>
                        <label className={clsx(style.method__1)}>
                            <InputField
                                register={register}
                                errors={errors}
                                value="UPX"
                                type="radio"
                                name="shipMethod"
                                className={clsx(style.method__input)}
                            />
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
                                    <p>$28.77</p>
                                </div>
                            </div>
                        </label>
                        <label className={clsx(style.method__1)}>
                            <InputField
                                register={register}
                                errors={errors}
                                value="UPZ"
                                type="radio"
                                name="shipMethod"
                                className={clsx(style.method__input)}
                            />
                            <div className={clsx(style.method__about)}>
                                <div className={clsx(style.method__img)}>
                                    <img src="https://picsum.photos/id/237/200/300" alt="" />
                                </div>
                                <div className={clsx(style.method__infor)}>
                                    <p>UPZ</p>
                                    <p>Expect delivery</p>
                                    <p>1 day</p>
                                </div>
                                <div className={clsx(style.method__price)}>
                                    <p>$35.72</p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <section  className="btn">
                        <Link to="/carts/checkout"  className="btn__return" >
                            Back Shipping Address
                        </Link>
                        <button type="submit"  className="btn__continue">
                            Continue to Payment
                        </button>
                    </section>
                </div>
            </div>
        </form>
    );
};

export default ShipMethod;
