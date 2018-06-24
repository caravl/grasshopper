import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Panel } from 'react-bootstrap';

export default function Balance (props) {
  const balance = props.balance;

  return (
    <div className="balance-container">
      <PageHeader id="header" className="text-center">
        Hello, Chris!
      </PageHeader>
      <Panel>
        <Panel.Heading>
        <Panel.Title id="balance-title">Your Current Balance is:</Panel.Title>
        </Panel.Heading>
        <Panel.Body id="balance">
            {
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(balance)
            }
        </Panel.Body>

      </Panel>
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.number
};
