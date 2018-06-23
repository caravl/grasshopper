// import React from 'react';
// import ReactDOM from 'react-dom';
// import TransactionItem from '../components/TransactionItem';
// import { mount } from 'enzyme';

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
// test('TransactionItem component renders a transaction', () => {
//   const data = [{
//     transId: 0,
//     custId: 0,
//     transTime: '',
//     transAmt: '+200.00',
//     description: 'testing enzyme',
//     transTo: 'piggy bank',
//     transFrom: 'toothfairy'
//   }];
//   const wrapper = mount(
//     <TransactionItem data={data} />
//   );

//   const p = wrapper.find('.from');
//   expect(p.text()).toBe('toothfairy')
// });


// import React from 'react';
// import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';

// import TransactionItem from '../components/TransactionItem';

// describe('TransactionItem', () => {
//   it('should render correctly', () => {
//     const output = shallow(
//       <TransactionItem title="mockTitle" url="mockUrl" />
//     );
//     expect(shallowToJson(output)).toMatchSnapshot();
//   });
// });

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// example of smoke test: (only renders <App> and doesn't go deeper)
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import Balance from '../Balance';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders balance message', () => {
  const wrapper = shallow(<Balance />);
  const message = <h1>Your Current Balance is:</h1>;
  expect(wrapper.contains(message)).toEqual(true);
})

// full rendering tests to ensure components integrate correctly by testing with mount() and use it to test state change and lifecycles
