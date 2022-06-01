import clsx from 'clsx';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import style from './input.module.scss';
import { ErrorMessage } from '@hookform/error-message';
const InputField = ({ label = '', type = 'text', name ,value='' ,  register ,errors}) => {
    // const {
    //     register,
    //     formState: { errors },
    // } = useFormContext();
    const checkError = errors?.hasOwnProperty(name);
    // console.log(checkError);
    return (
        <>
            <label className={clsx(style.field)}>
                {type === 'radio' ? (
                    <input type={type} name={name} {...register(name)} value={value} />
                ) : (
                    <input
                        className={clsx(style.field__input, checkError ? style.input__error : '')}
                        type={type}
                        placeholder=" "
                        name={name}
                        {...register(name)}
                    />
                )}
                {type === 'date' || type === 'radio'? (
                    ''
                ) : (
                    <span className={clsx(style.field__label__wrap)}>
                        <span className={clsx(style.field__label)}>{label}</span>
                    </span>
                )}
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({ message }) => <p className={clsx(style.error)}>{message}</p>}
                />
            </label>
        </>
    );
};

export default InputField;
