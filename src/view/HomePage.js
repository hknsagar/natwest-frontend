import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import BtnDropdown from "../components/BtnDropdown";
import Filter from "../components/Filter";
import { PAYMENT_STATUS } from "../constants";
import { getPaymentInfoAsync } from "../networkApi/PaymentInfo";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [pageIndex, setPageIndex] = useState("");
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [filter, setFilter] = useState("");

  const getPaymentInfo = async () => {
    let response;
    try {
      setIsLoading(true);
      response = await getPaymentInfoAsync(pageIndex);
      setHasMore(() => response.data.metaDatal.hasMoreElements);
      setPageIndex(() => response.data.metaDatal.nextPageIndex || "");
      if (filter) {
        setPaymentInfo((prevState) => [
          ...prevState,
          ...response.data.results.filter((item) => item.paymentStatus === "P"),
        ]);
      } else {
        setPaymentInfo((prevState) => [...prevState, ...response.data.results]);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPaymentInfo(() => []);
    getPaymentInfo();
    // eslint-disable-next-line
  }, [filter]);

  return (
    <Container fluid>
      <Row>
        <Col sm={2} id="colSidebar">
          <Filter setFilter={setFilter} setPageIndex={setPageIndex} />
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
            <InfiniteScroll
              dataLength={paymentInfo.length}
              next={getPaymentInfo}
              hasMore={hasMore}
              loader={
                <div className="text-center my-4">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
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
                      <td align="center">{PAYMENT_STATUS[item.paymentStatus]}</td>
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
            </InfiniteScroll>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
