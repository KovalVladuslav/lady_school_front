import React from 'react';
import LayoutCard from "@components/cards/LayoutCard";
import {
    ArrowDownSm,
    CheckIconLg,
    CheckIconSm,
    MailIconLg,
    MailIconSm,
    PaymentIconLg,
    PaymentIconSm
} from '@components/Icon'
import styles from './CardHowStart.module.scss'
import StartLearningComponent from "@components/StartLearningComponent";


const CardHowStart = () => {
    return (
        <LayoutCard id={'instructionCourse'}>
            <h2>Как начать обучение</h2>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepContainer}>
                    <div className='d-lg-none'>
                        <PaymentIconSm/>
                    </div>
                    <div className='d-none d-lg-block'>
                        <PaymentIconLg/>
                    </div>
                    <h3>Оплатите</h3>
                    <p>
                        После оплаты на указанную вами почту придёт сообщение:
                        “Оплата обучения прошла успешно”
                        (Проверьте папку “Спам”)
                    </p>
                </div>
                <ArrowDownSm/>
                <div className={styles.stepContainer}>
                    <div className='d-lg-none'>
                        <MailIconSm/>
                   </div>
                   <div className='d-none d-lg-block'>
                       <MailIconLg />
                   </div>
                   <h3>Откройте письмо</h3>
                   <p>Перейдите по ссылке в письме на страницу с уроками</p>
               </div>
               <ArrowDownSm />
               <div className={styles.stepContainer}>
                   <div className='d-lg-none'>
                       <CheckIconSm />
                   </div>
                   <div className='d-none d-lg-block'>
                       <CheckIconLg />
                   </div>
                   <h3>Готово!</h3>
                   <p>Приятного просмотра :)</p>
               </div>
           </div>
            <StartLearningComponent />
        </LayoutCard>
    )
};

export default CardHowStart