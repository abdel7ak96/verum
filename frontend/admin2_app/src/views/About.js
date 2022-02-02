import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CreatorDetails from "../components/about/CreatorDetails";

const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Creator" subtitle="About" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row className="d-flex justify-content-center">
      <Col lg="4">
        <CreatorDetails />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;
