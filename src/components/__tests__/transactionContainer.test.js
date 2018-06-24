import React from 'react';
import { shallow } from 'enzyme';
import TransactionContainer from '../TransactionContainer';

describe('TransactionContainer Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<TransactionContainer />).find('div.transContainer-container').exists()).toBe(true)
  });

  it('renders title of search bar', () => {
    expect(shallow(<TransactionContainer />).find('#search').length).toEqual(1)
  });

  it('renders input of search bar', () => {
    expect(shallow(<TransactionContainer />).find('#input').length).toEqual(1)
  });

  describe('TransactionContainer Component renders data', () => {

    it('returns with correct props', () => {
      let transaction = [
        {
          custId: 0,
          description: 'Burrito',
          historyOfBalance: '$500,000.00',
          transAmt: '$15',
          transFrom: 'Checking Account',
          transId: 25,
          transTime: 'Thursday, Jan 11, 2018, 3:51:52 PM',
          transTo: 'Restaurant'
        }
      ]
      const wrapper = shallow(<TransactionContainer />);
      wrapper.setState({ data: transaction })
      expect(wrapper.find('.data').exists());
    });

  });

});
