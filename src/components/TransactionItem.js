import React from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

export default function TransactionItem (props) {
  let item = props.item;

  return (
    <Table
      width={1000}
      height={400}
      headerHeight={50}
      rowHeight={30}
      rowCount={item.length}
      rowGetter={({ index }) => item[index]}
    >
      <Column
        label='Date'
        dataKey='transTime'
        width={500}
      />
      <Column
        label='From'
        dataKey='transFrom'
        width={200}
      />
      <Column
        label='To'
        dataKey='transTo'
        width={200}
      />
      <Column
        label='Description'
        dataKey='description'
        width={200}
      />
      <Column
        label='Amount'
        dataKey='transAmt'
        width={200}
      />
    </Table>
  );
}
