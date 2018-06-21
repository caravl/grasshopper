import React from 'react';

export default function TransactionItem (props) {
  const item = props.item;
  return (
    <div>
      <li>TransIdddd {item.transId},
        TransAmount {item.transAmt}
      </li>
    </div>
  );
}
