import React from 'react';
import LayoutCard from "@components/cards/LayoutCard";
import styles from "@components/cards/index.module.scss";
import DividerHorizontal from "@components/ui/DividerHorizontal";

const CardResult = () => {
    return (
        <LayoutCard>
            <div className='d-md-flex flex-column align-items-center'>
                <div className={styles.resultCardItem}>
                    <h2>Результат</h2>
                    <p className='text-center'>В процессе обучения вы получите знания и опыт профессионалов своего дела с помощью которых вы сможете осуществлять свои мечты и быть неотразимой!</p>
                </div>
                <DividerHorizontal/>
                <div className={styles.resultCardItem}>
                    <p className='text-center'>Вы расскроете вашу женственность, внутреннюю и внешнюю красоту, полюбите своё отражение, поверите в себя и начнёте двигаться к своей цели</p>
                </div>
            </div>
        </LayoutCard>
    )
};

export default CardResult