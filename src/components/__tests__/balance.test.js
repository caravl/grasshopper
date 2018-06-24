import React from 'react';
import { shallow } from 'enzyme';
import Balance from '../Balance';

describe('Balance Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<Balance />).find('div.balance-container').exists()).toBe(true)
  });

  it('renders a header', () => {
    expect(shallow(<Balance />).find('#header').length).toEqual(1)
  });

  it('renders a balance', () => {
    expect(shallow(<Balance />).find('#balance').length).toEqual(1)
  });

});
