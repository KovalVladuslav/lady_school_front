import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardTitle from '@components/cards/CardTitle';
import CardAboutCourse from '@components/cards/CardAboutCourse';
import CardMission from '@components/cards/CardMission';
import CardProgramCourse from '@components/cards/CardProgramCourse'
import CardResult from '@components/cards/CardResult';
import CardPrice from '@components/cards/CardPrice';
import CardHowStart from '@components/cards/CardHowStart';
import CardNeedLearn from '@components/cards/CardNeedLearn';
import Bottom from "@components/Bottom";

const IndexPage = () => {
    return (
        <>
            <main className='overflow-hidden'>
                <Container className='px-0 mainContainer'>
                    <Row className='m-0'>
                        <Col xs='12' className='p-3 pb-0 px-xl-0 py-xl-4'>
                            <CardTitle/>
                            <CardAboutCourse/>
                            <CardMission/>
                            <CardProgramCourse/>
                            <CardResult/>
                            <CardPrice/>
                            <CardHowStart/>
                            <CardNeedLearn/>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Bottom/>
        </>
    )
};

export default IndexPage;