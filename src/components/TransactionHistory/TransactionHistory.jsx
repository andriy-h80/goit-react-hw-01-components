import React from 'react';
import PropTypes from 'prop-types';

import { Table, Thead, Tr, Th, Tb, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tb>
        {items.map(({ id, type, currency, amount }) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{currency}</Td>
              <Td>{amount}</Td>
            </Tr>
          );
        })}
      </Tb>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired).isRequired
};
