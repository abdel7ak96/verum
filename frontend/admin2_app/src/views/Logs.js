import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Logs = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Vote casting history" subtitle="Logs" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Voters</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    National ID
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Station
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                  Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10247193</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Bir El Djir 1, Oran</td>
                  <td>08/08/2021</td>
                  <td>10:52</td>
                </tr>
                <tr>
                  <td>10656387</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Bir El Djir 1, Oran</td>
                  <td>08/08/2021</td>
                  <td>10:55</td>
                </tr>
                <tr>
                  <td>10642546</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>Mouradia 2, Algiers</td>
                  <td>08/08/2021</td>
                  <td>10:57</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Logs;
