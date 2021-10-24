import React, { useEffect, useRef, useState} from 'react';
import DividerHorizontal from './ui/DividerHorizontal'
import { InstagramIconSm } from './Icon';
import styles from './LeftSideBar.module.scss'
import classNames from "classnames/bind";
import {Turn as Hamburger} from 'hamburger-react';

const cx = classNames.bind(styles);

const menuItems = [
    {name: 'О курсе', id: 'aboutCourse'},
    {name: 'Программа', id: 'programCourse'},
    {name: 'Стоимость', id: 'priceCourse'},
    {name: 'Отзывы', id: 'reviewsCourse'},
    {name: 'Инструкция', id: 'instructionCourse'},
];

const LeftSideBar = ({ handleShowModal }) => {
    const [showSideBar, setShowSideBar] = useState(false);

    const SideBarRef = useRef(null);                                                                                                                                                                                                                            

    useEffect(() => {
        function handleClickOutside(event) {
            if (SideBarRef.current && !SideBarRef.current.contains(event.target)) {
                setShowSideBar(false)
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const scrollToElement = (id) => {
      const element = document.getElementById(id);

      element && element.scrollIntoView({ behavior: 'smooth' })
    };

    return (
       <div className={styles.leftSideBar} ref={SideBarRef}>
           <div className={styles.wrapperHamburger}>
               <Hamburger toggled={showSideBar} toggle={setShowSideBar} size={20} color="#6D422A" distance="lg"/>
           </div>
           <nav className={cx(styles.navMenu, {'navMenuOpen': showSideBar})}>
               <div className={styles.navMenuLanguage}>
                   <p>РУС</p>
               </div>
               <ul>
                   {menuItems.map(({ name, id }, index) => (
                       <li key={`key-nav-item-${index}`} onClick={() => scrollToElement(id)}>
                           {name}
                       </li>
                   ))}
               </ul>
               <button onClick={handleShowModal} className={styles.button}>
                   Перейти к обучению
               </button>
               <DividerHorizontal />
               <div className={styles.socialMedia}>
                   <p>Узнайте о нас больше</p>
                   <a>
                       <InstagramIconSm />
                   </a>
               </div>
           </nav>
       </div>
    );
};

export default LeftSideBar;