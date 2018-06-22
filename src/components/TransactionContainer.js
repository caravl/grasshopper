import React, {Component} from 'react';
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
    this.setState({inputValue: event.target.value});
  }

  render() {
    const { data, inputValue } = this.state;
    const filteredTransactions;
      return (
        <div>
          <label>Search your transactions</label>
          <input type="text" name="input" value={this.state.inputValue} onChange={this.handleChange} />
          {/* conditionally render search results or all transactions */}
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

}

export default TransactionContainer;
