import React, { Component } from 'react';
import TransactionItem from '../components/TransactionItem';

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
        <label>Search your transactions</label>
        <input type="text" name="input" value={this.state.inputValue} onChange={this.handleChange} />

        {/* <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody> */}
            {
              inputValue
                // ? filteredTransactions.map((item, i) => (
                ?  <TransactionItem item={filteredTransactions} />
                // ))
                // : data && data.slice(0, itemsToShow).map((item, i) => (
                 : <TransactionItem item={data && data} />
                // ))
            }
          {/* </tbody>
        </table> */}
      </div>
    )
  }
}

export default TransactionContainer;
