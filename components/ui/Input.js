import React from 'react';
import classNames from "classnames/bind";
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = ({ value, onChange, type, label, error, name, placeholder }) => {

    return (
        <div className={cx(styles.customInput, {'error': error})}>
            <label htmlFor={name}>{label}</label>
            <input
                autoComplete="off"
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <span className={styles.customInputError}>{error}</span>}
        </div>
    )
};

export default Input