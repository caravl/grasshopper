import React, { Component } from 'react';

class Search extends Component {
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
    const data = this.state.data;
    return (
      <div>
        <label>Search your transactions</label>
        <input type="text" name="input" value={this.state.inputValue} onChange={this.handleChange} />
      </div>
    )
  }
}

export default Search;
