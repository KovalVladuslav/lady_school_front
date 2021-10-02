import React from 'react';
import Link from 'next/link';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ChevronRightLightBrown} from '@components/Icon';
import styles from './index.module.scss';

export async function getServerSideProps(context) {
    const res = await fetch(`https://ds.ladyschool.online/api/subjects/`);
    const data = await res.json();


    return {
        props: { data }
    }
}

const AllCourses = ({ data }) => {
    console.log(data);
    return (
        <main>
            <Container className='px-0 mainContainer'>
                <Row className='m-0'>
                    <Col xs='12' className='p-3 px-xl-0 py-xl-4'>
                        <div className={styles.wrapperCoursesList}>
                            <h1>Предметы школы</h1>
                            {data.map(({ title, slug }, index) => (
                                <Link href={"/course/[slug]"} as={`/course/${slug}`} key={`${title}-${index}`}>
                                    <div className={styles.courseCardContainer}>
                                        <h2>{title}</h2>
                                        <p>Здесь имя учителя</p>
                                        <span className={styles.courseCardChevron}>
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

export default AllCourses