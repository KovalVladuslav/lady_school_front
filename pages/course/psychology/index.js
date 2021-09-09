import React from 'react';
import Link from 'next/link';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ChevronRightLightBrown} from '@components/Icon';
import styles from '../index.module.scss';

const lessons = [
    { title: 'Построение личных отношений', link: '/course/psychology/building-personal-relationships' },
    { title: 'Название урока', link: '/course/psychology/building-personal-relationships' },
    { title: 'Название урока', link: '/course/psychology/building-personal-relationships' },
];

const PsychologyCoursePage = () => {
    return (
        <main>
            <Container className='px-0 mainContainer'>
                <Row className='m-0'>
                    <Col xs='12' className='p-3 px-xl-0 py-xl-4'>
                        <div className={styles.wrapperLessonsList}>
                            <h1>Психология</h1>
                            {lessons.map(({title, link}, index) => (
                                <Link href={link} key={`${title}-${index}`}>
                                    <div className={styles.lessonsCardContainer}>
                                        <h2>{title}</h2>
                                        <span className={styles.lessonCardChevron}>
                                            <ChevronRightLightBrown/>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
};

export default PsychologyCoursePage