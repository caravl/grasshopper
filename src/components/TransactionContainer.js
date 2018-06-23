import React, { Component } from 'react';
import TransactionItem from '../components/TransactionItem';
import { Panel, Table } from 'react-bootstrap';

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
    const filteredTransactions = data.filter(item =>
      item.description.match(inputValue));

    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Search Your Transactions</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <input type="text" name="input" value={this.state.inputValue} onChange={this.handleChange} />
          </Panel.Body>
        </Panel>

        <Table responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              inputValue
                ? filteredTransactions.map((item, i) => (
               <TransactionItem item={item} />
                ))
                : data && data.map((item, i) => (
                 <TransactionItem item={item} key={i}/>
                ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TransactionContainer;
