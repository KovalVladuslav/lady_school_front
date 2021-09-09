import React from 'react';
import { InstagramIconLg, BottomLogoLS } from './Icon';
import DividerHorizontal from "@components/ui/DividerHorizontal";
import styles from './Bottom.module.scss';

const Bottom = () => {
  return (
      <div className={styles.bottomWrapper}>
          <h3>Узнайте о нас больше</h3>
          <a href={'/'}><InstagramIconLg /></a>
          <DividerHorizontal />
          <p>Если у вас возникли вопросы пишите нам:</p>
          <a href={'/'}>ladyschool@gmail.com</a>
          <DividerHorizontal />
          <ul>
              <li key='li-1'>
                  <a href={'/'}>Договор</a>
              </li>
              <li key='li-2'>
                  <a href={'/'}>Соглашение</a>
              </li>
              <li key='li-3'>
                  <a href={'/'}>Политика</a>
              </li>
          </ul>
          <a href={'/'}><BottomLogoLS /></a>
      </div>
  )
};

export default Bottom