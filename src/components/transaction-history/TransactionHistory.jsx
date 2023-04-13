import React from 'react';
import PropTypes from 'prop-types';
import { TableSection, HeadItem, BodyItem } from './Transaction.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TableSection>
      <thead>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <BodyItem>{type}</BodyItem>
            <BodyItem>{amount}</BodyItem>
            <BodyItem>{currency}</BodyItem>
          </tr>
        ))}
      </tbody>
    </TableSection>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
