import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const BtnDropdown = ({ accountInfo }) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="View" variant="outline-primary">
      <Dropdown.Item>
        <span className="fw-bold">Account Name:</span> {accountInfo.accountName}
      </Dropdown.Item>
      <Dropdown.Item>
        <span className="fw-bold">Sort Code:</span> {accountInfo.sortCode}
      </Dropdown.Item>
      <Dropdown.Item>
        <span className="fw-bold">Account No:</span> {accountInfo.accountNumber}
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default BtnDropdown;
