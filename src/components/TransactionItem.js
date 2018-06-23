import React from 'react';

export default function TransactionItem (props) {
  let item = props.item;

  return (
    <tr>
      <td>{item.transTime}</td>
      <td>{item.transFrom}</td>
      <td>{item.transTo}</td>
      <td>{item.description}</td>
      <td>{item.transAmt}</td>
    </tr>
  )
}
