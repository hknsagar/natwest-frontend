import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../components/Filter";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import PaymentInfo from "../components/PaymentInfo";

const HomePage = () => {
  const [pageIndex, setPageIndex] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <Container fluid>
      <Row>
        <Col sm={2} id="colSidebar">
          <Filter setFilter={setFilter} setPageIndex={setPageIndex} />
        </Col>
        <Col md={{ offset: 2 }} className="px-1">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <PaymentInfo filter={filter} pageIndex={pageIndex} setPageIndex={setPageIndex} />
          </ErrorBoundary>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
