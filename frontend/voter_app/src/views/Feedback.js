import React from 'react';
import { Container, Row, Button, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import profile_picture from '../assets/images/profile-picture.png';
import styled from 'styled-components';

const FeedbackMessage = styled.p`
    font-size: 2em;
`

const Main = function() {

    const location = useLocation();
    const { candidate } = location.state;

    return (
        <Container className="my-5">
            <Row className="justify-content-center my-5">
                <Image src={profile_picture} height="250px"/>
            </Row>
            <Row className="justify-content-center my-5 text-center">
                <FeedbackMessage>Your vote for <b>{candidate}</b> has been casted successfully</FeedbackMessage>
            </Row>
            <Row className="justify-content-center my-5">
                <Link to="/">
                    <Button variant="info" size="lg">
                        Logout
                    </Button>
                </Link>
            </Row>
        </Container>
    )
}

export default Main;