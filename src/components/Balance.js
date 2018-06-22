import React from 'react';

export default function Balance (props) {
  const balance = props.balance;
  return (
    <div>
      <h1>Your Current Balance is: ${balance}</h1>
    </div>
  );
}
