import React from "react";
import classNames from "classnames/bind";
import styles from './index.module.scss'

const cx = classNames.bind(styles);

const TransparentButtonBtn = ({ title, onClick, additionalClass}) => {
    return (
        <button className={cx(styles.transparentButton, additionalClass)} onClick={onClick}>{title}</button>
    )
};

export default TransparentButtonBtn