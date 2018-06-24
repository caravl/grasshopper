/* 1. import component
2. import shallow, mount and render bc we'll mock component rendering in the DOM, we'll only use shallow for now, bc we don't need to test interaction btw components
3. Write our describe functions to describe what we're testing then write our assertions about the behavior.
*/
import React from 'react';
import { shallow } from 'enzyme';
import Balance from '../Balance';

describe('Balance Component', () => {
  // shallow rendering our component, check that our div exists
  it('should render without throwing an error', () => {
    expect(shallow(<Balance />).find('div.balance-container').exists()).toBe(true)
  });
  // find function finds our inputs using their ids, find returns all the nodes that match our search terms we are just checking to make sure there is one in each input, by checking the length to see if the node exists
  it('renders a header', () => {
    expect(shallow(<Balance />).find('#header').length).toEqual(1)
  });
  it('renders a balance', () => {
    expect(shallow(<Balance />).find('#balance').length).toEqual(1)
  });

  // describe('Balance input', () => {
  //   it('should respond to change', () => {
  //     const wrapper = shallow(<Balance />);
  //     wrapper.find('#balance').simulate('change', 333222.11)
  //     expect(wrapper.state('#balance')).toEqual(333222.11);
  //   });
  // });

});
