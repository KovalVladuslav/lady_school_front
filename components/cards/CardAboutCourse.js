import React from 'react';
import LayoutCard from "@components/cards/LayoutCard";
import { PlayIcon } from "@components/Icon";

import styles from './index.module.scss'

const CardAboutCourse = () => {
    return (
        <LayoutCard id='aboutCourse'>
            <h2>О курсе</h2>
            <p className={styles.aboutCourseText}>Этот курс - совокупность знаний, которые помогут вам расскрыть вашу внутреннюю и внешнюю красоту. Вы
                примите себя, почувствуете значимой и достойной, поймёте к чему в жизни стремиться и как этого
                достичь</p>
            <div className={styles.videoPlayer}>
                <div>
                    <PlayIcon />
                </div>
            </div>
        </LayoutCard>
    )
};

export default CardAboutCourse