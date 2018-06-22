import React, { Component } from 'react';
import './App.css';
import TransactionContainer from './components/TransactionContainer';
import Balance from './components/Balance';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      data: []
    }
    this.calculateBalance = this.calculateBalance.bind(this);
  }

  componentDidMount() {
    fetch('http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/0')
    .then(res => res.json())
    .then((result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      },
      (error) => {
        console.error(error)
      }
    )
  }

  calculateBalance(data) {
    let balance = 0;
    data.map(item => (
      balance += item.transAmt
    ));
    return balance;
  }

  render() {
    const { isLoaded, data } = this.state;
    const calculateBalance = this.calculateBalance;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      let totalBalance = calculateBalance(data)
      return (
        <div>
          <Balance balance={totalBalance} />
          <TransactionContainer data={data} />
        </div>
      );
    }
  }
}

export default App;
