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
        <TableHeaderColumn dataField="transTime" isKey>Date</TableHeaderColumn>
        <TableHeaderColumn dataField="transFrom">From</TableHeaderColumn>
        <TableHeaderColumn dataField="transTo">To</TableHeaderColumn>
        <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
        <TableHeaderColumn dataField="transAmt">Amount</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}
