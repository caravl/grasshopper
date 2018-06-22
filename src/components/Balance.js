import React from 'react';

export default function Balance (props) {
  const balance = props.balance;
  return (
    <div>
      <h1>Your Current Balance is:
        <span>
          {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(balance)
          }
        </span>
      </h1>
    </div>
  );
}
