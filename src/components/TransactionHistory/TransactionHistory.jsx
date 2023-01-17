import { TransactionStyles } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  const itemsTransactions = items.map(({ id, currency, type, amount }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return (
    <TransactionStyles>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{itemsTransactions}</tbody>
    </TransactionStyles>
  );
};

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      currency: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};
