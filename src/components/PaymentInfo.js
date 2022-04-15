import React, { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useErrorHandler } from "react-error-boundary";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAYMENT_STATUS } from "../constants";
import { getPaymentInfoAsync } from "../networkApi/PaymentInfo";
import BtnDropdown from "./BtnDropdown";
import TableHead from "./TableHead";

const PaymentInfo = ({ filter, pageIndex, setPageIndex }) => {
  const handleError = useErrorHandler();
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState([]);

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
      setIsLoading(false);
      handleError(err);
    }
  };

  useEffect(() => {
    setPaymentInfo(() => []);
    getPaymentInfo();
    // eslint-disable-next-line
  }, [filter]);

  return (
    <>
      {isLoading ? (
        <>
          <Table striped bordered>
            <TableHead />
          </Table>
          <div id="spinnerDiv">
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
            <TableHead />
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
    </>
  );
};

export default PaymentInfo;
