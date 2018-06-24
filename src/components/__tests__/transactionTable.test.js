import React from 'react';
import { shallow } from 'enzyme';
import TransactionTable from '../TransactionTable';

describe('TransactionTable Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<TransactionTable />).find('div.table-container').exists()).toBe(true);
  });

  it('renders a date', () => {
    expect(shallow(<TransactionTable />).find('#date').exists()).toBe(true)
  });

  it('renders a from', () => {
    expect(shallow(<TransactionTable />).find('#from').exists()).toBe(true)
  });

  it('renders a to', () => {
    expect(shallow(<TransactionTable />).find('#to').exists()).toBe(true)
  });

  it('renders a description', () => {
    expect(shallow(<TransactionTable />).find('#description').exists()).toBe(true)
  });

  it('renders a amount', () => {
    expect(shallow(<TransactionTable />).find('#amount').exists()).toBe(true)
  });

  it('renders a balance', () => {
    expect(shallow(<TransactionTable />).find('#balance').exists()).toBe(true)
  });

  describe('TransactionTable Component renders data', () => {

    it('should have props', () => {
      let transaction2 = [
        {
          custId: 0,
          description: 'Client Dinner',
          historyOfBalance: '$480,000.00',
          transAmt: '$60',
          transFrom: 'Checking Account',
          transId: 26,
          transTime: 'Thursday, Jan 11, 2018, 8:51:52 PM',
          transTo: 'Restaurant'
        }
      ]
      const wrapper = shallow(<TransactionTable data={transaction2} />);
      expect(wrapper.find('.data').exists());
    });

  });

});
