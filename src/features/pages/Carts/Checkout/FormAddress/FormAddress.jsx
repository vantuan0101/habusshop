import clsx from 'clsx';
import InputField from 'components/form/form-control/InputField';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './address.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addDataFrom } from 'redux/dataFormSlice';

const schema = yup.object().shape({
    firstName: yup.string().required('Please enter name'),
    lastName: yup.string().required('Please enter name'),
    Company: yup.string(),
    Address: yup.string().required('Please enter address'),
    Apartment: yup.string(),
    City: yup.string().required('Please enter city'),
    Country: yup.string().required('Please enter country'),
    State: yup.string().required('Please enter state'),
    zipcode: yup.number().required('Please enter zip code').positive().integer(),
    phone: yup.number().min(6).required('Please enter phone').positive().integer(),
});

const FormAddress = () => {
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
        // console.log(data);
        navigate('/carts/checkout/ship-method');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.page)}>
                    <div className={clsx(style.name)}>
                        <p>2</p>
                        <p>Shipping Address</p>
                    </div>
                    <section className={clsx(style.header)}>
                        <InputField register={register} errors={errors} label={'First name'} name={'firstName'} />
                        <InputField register={register} errors={errors} label={'Last name'} name={'lastName'} />
                    </section>
                    <section className={clsx(style.section)}>
                        <InputField register={register} errors={errors} label={'Company (Optional)'} name={'Company'} />
                        <InputField register={register} errors={errors} label={'Address'} name={'Address'} />
                        <InputField
                            register={register}
                            errors={errors}
                            label={'Apartment, suite, etc (Optional)'}
                            name={'Apartment'}
                        />
                        <InputField register={register} errors={errors} label={'City'} name={'City'} />
                    </section>

                    <section className={clsx(style.body)}>
                        <InputField register={register} errors={errors} label={'Country'} name={'Country'} />
                        <InputField register={register} errors={errors} label={'State'} name={'State'} />
                        <InputField
                            register={register}
                            errors={errors}
                            label={'Zip Code'}
                            type={'number'}
                            name={'zipcode'}
                        />
                    </section>
                    <section className={clsx(style.section)}>
                        <InputField
                            register={register}
                            errors={errors}
                            label={'Phone Number'}
                            type={'tel'}
                            name={'phone'}
                        />
                    </section>
                    <section  className="btn">
                        <Link to="/carts"  className="btn__return" >
                            Return to carts
                        </Link>
                        <button type="submit"  className="btn__continue" >
                            Continue
                        </button>
                    </section>
                </div>
            </div>
        </form>
    );
};

export default FormAddress;
