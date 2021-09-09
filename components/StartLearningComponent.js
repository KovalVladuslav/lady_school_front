import React from 'react';
import BrownButtonLink from "@components/ui/BrownButtonLink";
import styles from './index.module.scss'

const StartLearningComponent = () => {
    return (
        <>
            <div className='d-lg-none'>
                <BrownButtonLink title='Начать обучение' link='/auth/registration'/>
            </div>
            <div className='d-none d-lg-block'>
                <BrownButtonLink title='Начать обучение' link='/auth/registration'/>
                <p className={styles.accessToLearn}>Доступ к обучению на 6 месяцев</p>
            </div>
        </>
    )
};
export default StartLearningComponent