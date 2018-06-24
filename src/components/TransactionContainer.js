import React, { Component } from 'react';
import TransactionTable from '../components/TransactionTable';
import { Panel } from 'react-bootstrap';

class TransactionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { data, inputValue } = this.state;
    const filteredTransactions = data && data.filter(item => (
      item.transTime.match(inputValue) || item.transFrom.match(inputValue) || item.transTo.match(inputValue) || item.description.match(inputValue) || item.transAmt.match(inputValue)
    ));

    return (
      <div className="transContainer-container">
        <Panel>
          <Panel.Heading>
            <Panel.Title id="search" >Search Your Transactions</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <input id="input" type="text" name="input" value={this.state.inputValue} onChange={this.handleChange} />
          </Panel.Body>
        </Panel>

        {
          inputValue
            ? <TransactionTable data={filteredTransactions} />
            : <TransactionTable data={data} />
        }
      </div>
    )
  }
}

export default TransactionContainer;
