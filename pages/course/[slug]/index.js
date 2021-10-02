import React from 'react';
import Link from 'next/link';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ChevronRightLightBrown} from '@components/Icon';
import styles from '../index.module.scss';

export async function getServerSideProps(context) {

    const { slug } = context.params;

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



    return {
        props: { data: dataLessonsCourse }
    }
}

const CoursePage = ({ data }) => {
    return (
        <main>
            <Container className='px-0 mainContainer'>
                <Row className='m-0'>
                    <Col xs='12' className='p-3 px-xl-0 py-xl-4'>
                        <div className={styles.wrapperLessonsList}>
                            <h1>{data.title}</h1>
                            {data.lessons.map(({title, slug}, index) => (
                                <Link href={'/course/[slug]/[lesson]'} as={`/course/${data.slug}/${slug}`} key={`${title}-${index}`}>
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

export default CoursePage