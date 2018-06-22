import React from 'react';

export default function TransactionItem (props) {
  const item = props.item;

  return (

    <tr key={item.transId}>
      <td>
        {
          new Date(item.transTime).toLocaleDateString()
        }
      </td>
      <td>{item.transFrom}</td>
      <td>{item.transTo}</td>
      <td>{item.description}</td>
      <td>
        {
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(item.transAmt)
        }
      </td>
    </tr>
  );
}
