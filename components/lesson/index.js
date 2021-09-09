import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {PlayIcon} from '@components/Icon';
import styles from "./index.module.scss";
import BrownButtonBtn from "@components/ui/BrownButtonBtn";

const Lesson = ({ data }) => {
    const { title, description, subTitle } = data;
    return (
        <main>
            <Container className='px-0 mainContainer'>
                <Row className='m-0'>
                    <Col xs='12' className='p-3 px-xl-0 py-xl-4'>
                        <div className={styles.wrapperLesson}>
                            <div className={styles.cardLessonHeader}>
                                <h1>{title}</h1>
                                <p className='d-none d-md-inline-block'>{subTitle}</p>
                            </div>
                            <div className={styles.cardLessonMain}>
                                <div className={styles.cardLessonVideoWrapper}>
                                    <div className={styles.cardLessonVideo}>
                                        <PlayIcon/>
                                    </div>
                                </div>
                                <div className={styles.cardLessonDescription}>
                                    <h2>План урока</h2>
                                    <p>{description}</p>
                                    <BrownButtonBtn title='Смотреть урок' onClick={() => {
                                    }} additionalClass={styles.cardLessonBtnWatch}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
};

export default Lesson