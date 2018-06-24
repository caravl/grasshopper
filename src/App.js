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
    this.formatDate = this.formatDate.bind(this);
    this.formatAmount = this.formatAmount.bind(this);
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
        console.error(`Something's Wrong!: `, error)
      }
    )
  }

  formatDate(data) {
    let options = {
      weekday: 'long',
      month: 'short',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    },
    intlDate = new Intl.DateTimeFormat( undefined, options );
    return data.map(each => {
      let timeStamp = each.transTime/1000;
      return each.transTime = intlDate.format( new Date( 1000 * timeStamp ) )
    })
  }

  formatAmount(data) {
    return data.map(each => {
      return each.transAmt = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(each.transAmt)
    })
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
    const formatDate = this.formatDate;
    const formatAmount = this.formatAmount;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      let totalBalance = calculateBalance(data);
      formatDate(data);
      formatAmount(data);
      return (
        <div className="main-container">
          <Balance balance={totalBalance} />
          <TransactionContainer data={data} />
        </div>
      );
    }
  }
}

export default App;
