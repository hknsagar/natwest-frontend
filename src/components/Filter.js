import React from "react";
import { Form } from "react-bootstrap";

const Filter = () => {
  return (
    <>
      <h4 className="text-center fw-bold">Filter</h4>
      <Form.Check type="checkbox" label="Pending Approval" />
    </>
  );
};

export default Filter;
