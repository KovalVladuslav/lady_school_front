import React from 'react';
import LayoutCard from "@components/cards/LayoutCard";
import styles from "./CardReviews.module.scss";
import DividerHorizontal from "@components/ui/DividerHorizontal";

const CardReviews = () => {
    return (
        <LayoutCard>
            <h2>Отзывы о школе</h2>
            <div className={styles.wrapperReviews}>
                <div className={styles.commentContainer}>
                    <p className={styles.name}>Имя</p>
                    <p className={styles.comment}>Ребят, спасибо вам за реально качественно сделанный полезный контент!!</p>
                    <div className={styles.commentBottomSide}>
                        <span>24.12.2020</span>
                    </div>
                </div>
                <div className={styles.commentContainer}>
                    <p className={styles.name}>Имя</p>
                    <p className={styles.comment}>Ребят, спасибо вам за реально качественно сделанный полезный контент!!</p>
                    <div className={styles.commentBottomSide}>
                        <span>24.12.2020</span>
                    </div>
                </div>
                <div className={styles.commentContainer}>
                    <p className={styles.name}>Имя</p>
                    <p className={styles.comment}>Ребят, спасибо вам за реально качественно сделанный полезный контент!!</p>
                    <div className={styles.commentBottomSide}>
                        <span>24.12.2020</span>
                    </div>
                </div>
            </div>
            <button className={styles.moreViewsBtn}>Показать ещё 3 отзыва</button>
        </LayoutCard>
    )
};

export default CardReviews