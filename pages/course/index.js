import React from 'react';
import Link from 'next/link';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronRightLightBrown } from '@components/Icon';
import styles from './index.module.scss';

const courses = [
    { title: 'Психология', nameTeacher: 'Имя преподавателя', link: '/course/psychology' },
    { title: 'Название предмета', nameTeacher: 'Имя преподавателя', link: '/course/psychology' },
    { title: 'Название предмета', nameTeacher: 'Имя преподавателя', link: '/course/psychology' },
];

const AllCourses = () => {
  return (
      <main>
        <Container className='px-0 mainContainer'>
          <Row className='m-0'>
            <Col xs='12' className='p-3 px-xl-0 py-xl-4'>
                <div className={styles.wrapperCoursesList}>
                    <h1>Предметы школы</h1>
                    {courses.map(({ title, nameTeacher, link }, index) => (
                        <Link href={link} key={`${title}-${index}`}>
                            <div className={styles.courseCardContainer}>
                                <h2>{title}</h2>
                                <p>{nameTeacher}</p>
                                <span className={styles.courseCardChevron}>
                                <ChevronRightLightBrown />
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