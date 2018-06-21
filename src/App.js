import React, { Component } from 'react';
import './App.css';
import TransactionContainer from './components/TransactionContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch('http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/0')
    .then(res => res.json())
    .then((result) => {
        console.log('>>>> in lifecycle', result)
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

  render() {
    const { isLoaded, data } = this.state;
    console.log('*****', this.state.data)
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <TransactionContainer data={data} />
        </div>
      );
    }
  }
}

export default App;
