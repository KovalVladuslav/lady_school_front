import React from 'react';
import styles from './index.module.scss';

const LayoutCard = ({ children, id }) => {
    return (
        <div className={styles.wrapperCard} id={id}>
            {children}
        </div>
    )
};

export default LayoutCard