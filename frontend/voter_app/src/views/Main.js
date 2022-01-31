import React, { useState } from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import profile_picture from '../assets/images/profile-picture.png';

// TODO : replace this temporary placeholder text with description from the backend
import description from '../assets/placeholder/description';

const CandidateCard = styled.div`
    border-radius: 10px;
    background-color: #FFF;
    width: 250px;
    padding: 15px;
`
const CandidateName = styled.p`
    font-weight: bold;
`

const CandidateDesc = styled.p`
    font-size: 0.7em;
    text-align: justify;
    text-justify: auto;
`

const Main = function(props) {

    const [chosenCandidateID, setChosenCandidateID] = useState(-1);

    const vote = function(index) {
        console.log("vote for "+index+" : "+props.candidates[index].name);
        props.contract.methods.vote(index).send({
            from: props.account
        })
        .on('receipt', function(receipt){
            console.log("receipt");
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("confirmation");
        })
        .on('error', function(error, receipt) {
            console.log("error");
        });
    }

    return (
        <Container className="px-1">
            <Row>
                <h1 className="mt-5">Choose the candidate you want to vote for</h1>
            </Row>
            <Row className="mt-5 text-center">
                {props.candidates.map((candidate) => (
                    <Col key={candidate.id}>
                        <CandidateCard className={ "shadow" + (chosenCandidateID === candidate.id ? " border border-success" : "")}>
                            <Image className="w-50" src={profile_picture}/>
                            <CandidateName>{candidate.name}</CandidateName>
                            <CandidateDesc className="text-muted">{description}</CandidateDesc>
                            <Button variant={chosenCandidateID === candidate.id ? "success" : "primary"} onClick={() => setChosenCandidateID(candidate.id)}>
                                {chosenCandidateID === candidate.id ? "Chosen" : "Choose"}
                            </Button>
                        </CandidateCard>
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-center mt-5">
                <Link to={{
                    pathname: "/feedback",
                    state: {
                        candidate: props.candidates[chosenCandidateID] ? props.candidates[chosenCandidateID].name : "undefined"
                    }
                }}>
                    <Button variant={chosenCandidateID === -1 ? "secondary" : "success"} disabled={chosenCandidateID === -1 ? true : false}
                    onClick={() => vote(chosenCandidateID)}>
                        Cast vote
                    </Button>
                </Link>
            </Row>
        </Container>
    );
};

Main.propTypes = {
    candidates: PropTypes.array
}

Main.defaultProps = {
    candidates: [
        {
            id: 0,
            name: "Candidate 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet turpis eget justo scelerisque dapibus ut eu sem. Fusce fringilla sit amet eros in sagittis. Donec egestas, nisl eget gravida porttitor, ante eros convallis velit, eget tempus lorem nulla sollicitudin sem. Vestibulum sodales molestie massa"
        },
        {
            id: 1,
            name: "Candidate 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet turpis eget justo scelerisque dapibus ut eu sem. Fusce fringilla sit amet eros in sagittis. Donec egestas, nisl eget gravida porttitor, ante eros convallis velit, eget tempus lorem nulla sollicitudin sem. Vestibulum sodales molestie massa"
        },
        {
            id: 2,
            name: "Candidate 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet turpis eget justo scelerisque dapibus ut eu sem. Fusce fringilla sit amet eros in sagittis. Donec egestas, nisl eget gravida porttitor, ante eros convallis velit, eget tempus lorem nulla sollicitudin sem. Vestibulum sodales molestie massa"
        },
        {
            id: 3,
            name: "Candidate 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet turpis eget justo scelerisque dapibus ut eu sem. Fusce fringilla sit amet eros in sagittis. Donec egestas, nisl eget gravida porttitor, ante eros convallis velit, eget tempus lorem nulla sollicitudin sem. Vestibulum sodales molestie massa"
        },
    ]
}

export default Main;