import React from 'react';
import LayoutCard from "@components/cards/LayoutCard";
import DividerHorizontal from "@components/ui/DividerHorizontal";
import styles from './CardNeedLearn.module.scss';

const CardNeedLearn = () => {
    return (
        <LayoutCard>
            <h2>Нужно ли мне это обучение?</h2>
            <div className='text-center'>
                <p className={styles.descriptionMobile}>
                    “У меня ужасная фигура! У меня токсичные отношения! Меня не понимают и не любят родители! Я не люблю
                    учиться! Почему у меня нет друзей? Я не люблю свою работу! Хочу инстаграм как у неё! Что делать
                    дальше?...”
                </p>
                <p className={styles.descriptionDesktop}>
                    “У меня ужасная фигура! У меня токсичные отношения! <br/>
                    Меня не понимают и не любят родители! Я не люблю учиться! Почему у меня нет друзей? <br/>
                    Я не люблю свою работу! Хочу инстаграм как у неё! Что делать дальше?...”
                </p>
            </div>
            <DividerHorizontal />
            <p className='text-center'>Знакомо?</p>
            <p className='text-center'>У каждой из нас возникали <br/> подобные мысли...</p>
            <DividerHorizontal />
            <p className={styles.descriptionBottom}>Мало кто говорит о коллосальной работе проделанной людьми, которые достигли того, что нас вдохновляет...
                Школа Леди - ваша работа над собой, которая поможет достичь желаемого!</p>
        </LayoutCard>
    )
};

export default CardNeedLearn