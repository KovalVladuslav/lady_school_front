import React from "react";
import LayoutCard from "@components/cards/LayoutCard";
import DividerHorizontal from "@components/ui/DividerHorizontal";
import DividerVertical from "@components/ui/DividerVertical";
import styles from './index.module.scss'

const CardMission = () => {
    return (
        <LayoutCard>
            <div className='d-md-flex align-items-center'>
                <div className={styles.missionCardItem}>
                    <h2>Наше видение</h2>
                    <p className='text-center text-md-start'>Мы видим вас свободной, уверенной в себе, нежной, женственной и успешной личностью</p>
                </div>
                <div className='d-md-none'>
                    <DividerHorizontal/>
                </div>
                <div className='d-none d-md-block'>
                    <DividerVertical/>
                </div>
                <div className={styles.missionCardItem}>
                    <h2>Наша миссия</h2>
                    <p className='text-center text-md-start'>Мы мечтаем сделать счастливой каждую девушку, быть поддержкой на пути поиска себя</p>
                </div>
            </div>
        </LayoutCard>
    )
};

export default CardMission