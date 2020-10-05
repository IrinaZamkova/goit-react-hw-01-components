import React from "react";
import Table from "./transactions.component";
import PropTypes from "prop-types"

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Table.thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Table.thead>

      <tbody>
        {items.map((item) => (
          <Table.tr key={item.id}>
            <td>{item.type} </td>
            <td>{item.amount} </td>
            <td>{item.currency} </td>
          </Table.tr>
        ))}
      </tbody>
    </Table>
  );
};

//   не знаю как тут передать что все PropTypes.shape-string.isRequired  в одну строку скорее всего можно
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
     type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionHistory;
