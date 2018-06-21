import React from 'react';
import TransactionItem from '../components/TransactionItem';

export default function TransactionContainer (props) {

  const data = props.data;
  return (
    <div>
      <ul>
        {
          data && data.map((item, i) => (
            <TransactionItem item={item} key={i}/>
          ))
        }
      </ul>
    </div>
  )
}
