import React from "react";
import { Container, Row, Col, Card, CardHeader } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EventCreationForm from "../components/add-new-event/EventCreationForm";

const AddNewEvent = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Event" subtitle="Events configuration" className="text-sm-left" />
    </Row>
    <Row>
      <Col>
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">Form</h6>
          </CardHeader>
          <EventCreationForm />
        </Card>
      </Col>
    </Row>

  </Container>
);

export default AddNewEvent;
