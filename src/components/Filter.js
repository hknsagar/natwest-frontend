import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ setFilter, setPageIndex }) => {
  const onClickHandler = (e) => {
    console.log("CHECKBOX::", e.target.checked);
    let filter = e.target.checked ? "P" : "";
    setPageIndex("");
    setFilter(filter);
  };
  return (
    <>
      <h4 className="text-center fw-bold">Filter</h4>
      <Form.Check type="checkbox" label="Pending Approval" onClick={(e) => onClickHandler(e)} />
    </>
  );
};

export default Filter;
