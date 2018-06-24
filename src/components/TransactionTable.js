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
        <TableHeaderColumn dataField="transTime" isKey dataSort width='200'>Date</TableHeaderColumn>
        <TableHeaderColumn dataField="transFrom" dataSort width='250'>From</TableHeaderColumn>
        <TableHeaderColumn dataField="transTo" dataSort width='250'>To</TableHeaderColumn>
        <TableHeaderColumn dataField="description" dataSort width='350'>Description</TableHeaderColumn>
        <TableHeaderColumn dataField="transAmt" dataSort width='225'>Amount</TableHeaderColumn>
        <TableHeaderColumn dataField="historyOfBalance" dataSort width='225'>Balance</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}
