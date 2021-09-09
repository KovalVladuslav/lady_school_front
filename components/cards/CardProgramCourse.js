import React from 'react';
import LayoutCard from '@components/cards/LayoutCard';
import StartLearningComponent from '../StartLearningComponent';
import styles from './CardProgramCourse.module.scss';

const programCardsData = [
    {
        theme: 'Психология',
        subThemes: ['Самооценка', 'Выгода', 'Критика', 'Обиды', 'Крайности'],
        description: 'Здесь будет краткая информация о предмете и преподавателе: кто, чем занимае...'
    },
    {
        theme: 'Макияж',
        subThemes: ['Мотивация и вдохновение', 'Уход за собой', 'Харизма', 'Вдохновение'],
        description: 'Здесь будет краткая информация о предмете и преподавателе: кто, чем занимае...'
    },
    {
        theme: 'Спорт и питание',
        subThemes: ['Мотивация и вдохновение', 'Уход за собой', 'Харизма', 'Вдохновение'],
        description: 'Здесь будет краткая информация о предмете и преподавателе: кто, чем занимае...'
    },
    {
        theme: 'Тренировки',
        subThemes: ['4 тренировки, включающие в себя комплекс упражнений на разные группы мышц'],
        description: 'Здесь будет краткая информация о предмете и преподавателе: кто, чем занимае...'
    }
];

const CardProgramCourse = () => {
    return (
        <LayoutCard id='programCourse'>
            <h2>Программа курса</h2>
            <div className={styles.cardProgramCourse}>
                {programCardsData.map(item => (
                    <div className={styles.programCardWrapper} key={item.theme}>
                        <div className='d-flex'>
                            <div className={styles.programCardTheme}>
                                {/*todo*/}
                                <div/>
                                <h3>{item.theme}</h3>
                            </div>
                            <ul className={styles.programCardList}>
                                {item.subThemes.map(name => (
                                    <li key={`${item.theme}-${name}`}>{name}</li>
                                ))}
                            </ul>
                        </div>
                        <p className={styles.programCardDescription}>{item.description} <span>Подробнее</span></p>
                    </div>
                ))}
            </div>
            <StartLearningComponent />
        </LayoutCard>
    )
};

export default CardProgramCourse