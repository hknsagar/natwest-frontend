import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import BtnDropdown from "../components/BtnDropdown";
import Filter from "../components/Filter";
import { paymentStatus } from "../constants";
import { getPaymentInfoAsync } from "../networkApi/PaymentInfo";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [paymentInfo, setPaymentInfo] = useState([]);

  const getPaymentInfo = async () => {
    let response;
    try {
      response = await getPaymentInfoAsync();
      setPaymentInfo((prevState) => [...prevState, ...response.data.results]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPaymentInfo();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={2} id="colSidebar">
          <Filter />
        </Col>
        <Col md={{ offset: 2 }} className="px-1">
          {isLoading ? (
            <>
              <Table striped bordered>
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
              </Table>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90vh",
                }}
              >
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            </>
          ) : (
            <Table striped bordered>
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
                {paymentInfo.map((item, index) => (
                  <tr key={index}>
                    <td align="right">{item.paymentAmount}</td>
                    <td>{item.paymentCurrency}</td>
                    <td>{item.paymentType}</td>
                    <td align="center">{item.paymentDate}</td>
                    <td align="center">{paymentStatus[item.paymentStatus]}</td>
                    <td align="center">
                      <BtnDropdown accountInfo={item.toAccaunt} />
                    </td>
                    <td align="center">
                      <BtnDropdown accountInfo={item.fromAccount} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
