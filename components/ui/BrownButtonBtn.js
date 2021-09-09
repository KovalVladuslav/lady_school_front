import React from "react";
import classNames from "classnames/bind";
import styles from './index.module.scss'

const cx = classNames.bind(styles);

const BrownButtonBtn = ({ title, onClick, additionalClass }) => {
    return (
        <button onClick={onClick} className={cx(styles.brownButton, additionalClass)}>
            {title}
        </button>
    )
};

export default BrownButtonBtn