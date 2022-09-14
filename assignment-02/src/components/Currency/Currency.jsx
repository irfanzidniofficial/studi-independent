import React from "react";

const Currency = (props) => {
  return (
    <tr className="table-secondary">
      <td>{props.currency.name}</td>
      <td>{props.currency.buy}</td>
      <td>{props.currency.exchangeRate}</td>
      <td>{props.currency.sell}</td>
    </tr>
  );
};

export default Currency;
