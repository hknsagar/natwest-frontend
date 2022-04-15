import React from "react";

const TableHead = () => {
  return (
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
  );
};

export default TableHead;
