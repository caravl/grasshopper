import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default function TransactionItem (props) {
  let data = props.data;

  const options = {
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: data.length
    }],
    sizePerPage: 5
  };

  return (
    <div>
      <BootstrapTable data={ data } pagination={ true } options={ options }>
        <TableHeaderColumn dataField="transTime" isKey dataSort>Date</TableHeaderColumn>
        <TableHeaderColumn dataField="transFrom" dataSort>From</TableHeaderColumn>
        <TableHeaderColumn dataField="transTo" dataSort>To</TableHeaderColumn>
        <TableHeaderColumn dataField="description" dataSort>Description</TableHeaderColumn>
        <TableHeaderColumn dataField="transAmt" dataSort>Amount</TableHeaderColumn>
        <TableHeaderColumn dataField="historyOfBalance" dataSort>Balance</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}
