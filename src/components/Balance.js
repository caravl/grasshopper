import React from 'react';
import { PageHeader, Panel } from 'react-bootstrap';

export default function Balance (props) {
  const balance = props.balance;

  return (
    <div className="balance-container">
      <PageHeader id="header" className="text-center">
        <h1 id="greeting">Hello, Chris!</h1>
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
