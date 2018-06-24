import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
global.fetch = require('jest-fetch-mock');

describe('App Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('div.main-container').exists()).toBe(true)
  });

  it('should find a result via fetch', async () => {
    return global.fetch('http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/0')
      .then(() => console.log('Successful Fetch'))
      .catch((err) => console.log('Error!!!' + err));
  });

});
