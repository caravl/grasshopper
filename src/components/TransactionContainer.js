import React, { Component } from 'react';
import TransactionItem from '../components/TransactionItem';

class TransactionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      itemsToShow: 5,
      expanded: false,
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  showMore() {
    this.state.itemsToShow === 5
    ? (this.setState({
        itemsToShow: this.state.data.length,
        expanded: true
      }))
    : (this.setState({
        itemsToShow: 5,
        expanded: false
      }))
  }

  render() {
    const { data, inputValue, expanded, itemsToShow } = this.state;
    const filteredTransactions = data.filter(item =>
      item.description.match(inputValue));

    return (
      <div>
        <label>Search your transactions</label>
        <input type="text" name="input" value={this.state.inputValue} onChange={this.handleChange} />

        <button onClick={this.showMore}>
          {
            expanded
            ? (<span>Show less</span>)
            : (<span>Show more</span>)
          }
        </button>

        <table>
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
                  <TransactionItem item={item} key={i}/>
                ))
                : data && data.slice(0, itemsToShow).map((item, i) => (
                  <TransactionItem item={item} key={i} />
                ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TransactionContainer;
