import React from 'react';
import { shallow } from 'enzyme';
import TransactionContainer from '../TransactionContainer';

describe('TransactionContainer Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<TransactionContainer />).find('div.transContainer-container').exists()).toBe(true)
  });

});
