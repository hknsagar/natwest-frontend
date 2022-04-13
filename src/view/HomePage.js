import React from "react";
import { Container, Row, Col, Table, DropdownButton, Dropdown } from "react-bootstrap";
import Filter from "../components/Filter";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} id="colSidebar">
          <Filter />
        </Col>
        <Col md={{ offset: 2 }} className="px-1">
          <Table striped bordered hover>
            <thead id="tHead">
              <tr>
                <th>Payment Amount</th>
                <th>Payment Currency</th>
                <th>Payment Type</th>
                <th>Payment Date</th>
                <th>Payment Status</th>
                <th>To Account</th>
                <th>From Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="right">993.09</td>
                <td>GBP</td>
                <td>FASTER</td>
                <td align="center">14-Apr-2022</td>
                <td align="center">A</td>
                <td align="center">
                  <DropdownButton id="dropdown-basic-button" title="View">
                    <Dropdown.Item>
                      <span className="fw-bold">Account Name:</span> Savings Account
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="fw-bold">Sort Code:</span> 745478
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="fw-bold">Account No:</span> 14917464
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
                <td align="center">
                  <DropdownButton id="dropdown-basic-button" title="View">
                    <Dropdown.Item>
                      <span className="fw-bold">Account Name:</span> Savings Account
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="fw-bold">Sort Code:</span> 745478
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="fw-bold">Account No:</span> 14917464
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
