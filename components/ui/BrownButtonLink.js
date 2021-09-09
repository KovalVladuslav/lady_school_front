import React from "react";
import Link from 'next/link'
import classNames from "classnames/bind";
import styles from './index.module.scss'

const cx = classNames.bind(styles);

const BrownButtonLink = ({ title, link, additionalClass }) => {
    return (
        <Link href={link}>
            <a className={cx(styles.brownButton, additionalClass)}>{title}</a>
        </Link>
    )
};

export default BrownButtonLink