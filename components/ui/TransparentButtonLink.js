import React from "react";
import Link from 'next/link'
import classNames from "classnames/bind";
import styles from './index.module.scss'

const cx = classNames.bind(styles);

const TransparentButtonLink = ({ title, link }) => {
    return (
        <Link href={link}>
            <a className={styles.transparentButton}>{title}</a>
        </Link>
    )
};

export default TransparentButtonLink