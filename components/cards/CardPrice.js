import React from 'react';
import LayoutCard from "@components/cards/LayoutCard";
import styles from './CardPrice.module.scss'
import StartLearningComponent from "@components/StartLearningComponent";

const CardPrice = () => {
    return (
        <LayoutCard id='priceCourse'>
            <h2>Стоимость</h2>
            <div className={styles.priceWrapper}>
                <h4>Lady<span/>school</h4>
                <h5>Женская онлайн школа</h5>
                <p className={styles.priceCost}>UAH 450</p>
            </div>
            <StartLearningComponent />
        </LayoutCard>
    )
};

export default CardPrice