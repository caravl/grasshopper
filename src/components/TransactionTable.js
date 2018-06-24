import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default function TransactionTable (props) {
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
    <div className="table-container">
      <BootstrapTable data={ data } pagination={ true } options={ options }>
        <TableHeaderColumn id="date" dataField="transTime" isKey dataSort width='200'>Date</TableHeaderColumn>
        <TableHeaderColumn id="from" dataField="transFrom" dataSort width='250'>From</TableHeaderColumn>
        <TableHeaderColumn id="to" dataField="transTo" dataSort width='250'>To</TableHeaderColumn>
        <TableHeaderColumn id="description" dataField="description" dataSort width='350'>Description</TableHeaderColumn>
        <TableHeaderColumn id="amount" dataField="transAmt" dataSort width='225'>Amount</TableHeaderColumn>
        <TableHeaderColumn id="balance" dataField="historyOfBalance" dataSort width='225'>Balance</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

TransactionTable.propTypes = {
  data: PropTypes.array
};
