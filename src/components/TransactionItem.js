import React from 'react';

export default function TransactionItem (props) {
  const item = props.item;
  return (
    <div>
      <li>Date: {item.transTime},
        Amount: {item.transAmt},
        Description: {item.description}
      </li>
    </div>
  );
}
