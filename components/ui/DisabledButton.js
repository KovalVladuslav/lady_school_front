import React from "react";
import Link from 'next/link'
import classNames from "classnames/bind";
import styles from './index.module.scss'

const cx = classNames.bind(styles);

const DisabledButton = ({ title, additionalClass }) => {
    return (
        <button className={cx(styles.brownButton, styles.disabledButton, additionalClass)} disabled >
            {title}
        </button>
    )
};

export default DisabledButton