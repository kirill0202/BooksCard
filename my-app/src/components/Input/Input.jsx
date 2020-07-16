import React from 'react';
import classNames from 'classnames';
import './Input.scss';

const Input = ({ placeholder, classnamestyle, input, value, onChange, type, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <>
            <input
                {...props}
                type='text'
                {...input}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={classNames (hasError ? 'input_notifications__error' : '', classnamestyle)} />
            {hasError && (
                <p className={'form_notifications__error'}>{meta.error}</p>
            )}
        </>
    )
}
export default React.memo(Input);