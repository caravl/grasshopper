import React from 'react';
import { PageHeader, Panel } from 'react-bootstrap';

export default function Balance (props) {
  const balance = props.balance;
  return (
    <div className="balance-container">
      <PageHeader className="text-center">
        Hello, Chris!
      </PageHeader>
      <Panel>
        <Panel.Heading>
        <Panel.Title>Your Current Balance is:</Panel.Title>
        <Panel.Body>
            {
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(balance)
            }
        </Panel.Body>
        </Panel.Heading>
      </Panel>
    </div>
  );
}
