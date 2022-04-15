import React from "react";
import { Alert, Button, Row, Col, Table } from "react-bootstrap";
import TableHead from "./TableHead";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <Table striped bordered>
        <TableHead />
      </Table>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Alert show={true} variant="danger">
            <Alert.Heading className="text-center">Something went wrong !!!</Alert.Heading>
            <p className="text-center">{error.message}</p>
            <hr />
            <div className="d-flex justify-content-center">
              <Button onClick={resetErrorBoundary} variant="danger">
                Try Again
              </Button>
            </div>
          </Alert>
        </Col>
      </Row>
    </>
  );
};

export default ErrorFallback;
