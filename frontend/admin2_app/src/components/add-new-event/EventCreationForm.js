import React, {useState} from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button,
  FormTextarea,
  FormSelect,
  DatePicker
} from "shards-react";

const EventCreationForm = () => {

  // const [CandidatesCount, setCandidatesCount] = useState(1);

  return (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEventTitle">Event Title</label>
                <FormInput
                  id="feEventTitle"
                  placeholder="Event Title"
                />
              </Col>
            </Row>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feDescription">Description</label>
                <FormTextarea
                  id="feDescription"
                  placeholder="Description"
                />
              </Col>
            </Row>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feCandidates">Candidates Details</label>
                  <Row className="ml-1">
                    <FormInput
                      placeholder="Candidate 1"
                    />
                    <FormInput
                      placeholder="Candidate 2"
                    />
                    <FormInput
                      placeholder="Candidate 3"
                    />
                    <FormInput
                      placeholder="Candidate 4"
                    />
                  </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <label>Dates</label>
                <Row>
                  <Col md="3">
                    <DatePicker selected={new Date()}/>
                  </Col>
                  <Col md="3">
                    <DatePicker selected= {new Date()}/>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Button className="mt-5" type="submit">Create New Event</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  )
};

export default EventCreationForm;
