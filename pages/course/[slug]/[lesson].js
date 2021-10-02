import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./[lesson].module.scss";
import {PlayIcon} from "@components/Icon";
import BrownButtonBtn from "@components/ui/BrownButtonBtn";

export async function getServerSideProps(context) {

    const { slug, lesson } = context.params;

    const resAllCourse = await fetch(`https://ds.ladyschool.online/api/subjects/`);
    const dataAllCourse = await resAllCourse.json();

    const currentCourse = dataAllCourse.find(item => item.slug === slug);

    if(!currentCourse?.id) {
        return {
            notFound: true,
        }
    }

    const resLessonsCourse = await fetch(`https://ds.ladyschool.online/api/subjects/${currentCourse.id}`);
    const dataLessonsCourse = await resLessonsCourse.json();

    const currentLesson = dataLessonsCourse.lessons.find(item => item.slug === lesson);

    if(!currentLesson?.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data: currentLesson }
    }
}

const LessonPage = ({ data }) => {

    return (
        <main>
            <Container className='px-0 mainContainer'>
                <Row className='m-0'>
                    <Col xs='12' className='p-3 px-xl-0 py-xl-4'>
                        <div className={styles.wrapperLesson}>
                            <div className={styles.cardLessonMain}>
                                <div className={styles.cardLessonHeader}>
                                    <h1>{data.title}</h1>
                                    <p className='d-none d-md-inline-block'>
                                        Как правильно любить себя и почему никто не может этого сделать за нас?
                                    </p>
                                </div>
                                <div className={styles.cardLessonVideoWrapper}>
                                    <div className={styles.cardLessonVideo}>
                                        <PlayIcon/>
                                    </div>
                                </div>
                                <div className={styles.cardLessonDescription}>
                                    <h2>План урока</h2>
                                    <div dangerouslySetInnerHTML={{__html: data.description}}/>
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



export default LessonPage