import React, { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Icons
import logo from '../assets/images/logo.svg';
import fingerPrintIcon from '../assets/images/fingerprint.svg';
import fingerPrintIcon_valid from '../assets/images/fingerprint-valid.svg';

const LoginCard = styled.div`
    border-radius: 25px;
    padding: 40px;
    font-size: 0.8em;
`

const Main = function() {
    
    const [scanned, setScanned] = useState(false);

    return (
        <Container>
            <Row className="justify-content-center my-5">
                <img src={logo} alt="Verum logo" height="170px"/>
            </Row>
            <Row className="justify-content-center my-5">
                <LoginCard className="shadow bg-white rounded w-50">
                    <Row>
                        <Col sm={9}>
                            <Form>
                                <Form.Group>
                                    <Form.Label><b>National Identification number</b></Form.Label>
                                    <Form.Control maxLength="8" placeholder="XXXXXXXX" />
                                    <Form.Text className="text-muted">
                                        Tip: number is found on any offcial indentification
                                        document (eg: id card, Driving licence…)
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mt-4">
                                    <Form.Check className="text-muted" label="I am the person identified by my national Identity number and fingerprint about to cast my vote" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={3}>
                            <img className="w-75 mt-4 ml-3" src={scanned ? fingerPrintIcon_valid : fingerPrintIcon } onClick={() => {setScanned(!scanned)}} alt="Finger print icon" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-4 mb-n4">
                        <Link className="w-25" to="/main">
                            <Button className="w-100" variant="primary" type="submit">
                                Login
                            </Button>
                        </Link>
                    </Row>
                </LoginCard>
            </Row>
        </Container>
    )
}

export default Main;