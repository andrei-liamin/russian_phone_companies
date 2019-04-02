import React from 'react';
import { shallow } from 'enzyme';
import RBB from './App';

describe('RBB', () => {
  const rusbl = {
    name: 'Versus',
    description: 'Fresh Blood 4',
    coverUrl: '/img/versus.jpg',
  };

  it('displays the name', () => {
    const wrapper = shallow(<RBB rusbl={rusbl} />)

    expect(wrapper.find('h1').text()).toEqual('Versus')
  });

  it('displays the description', () => {
    const wrapper = shallow(<RBB rusbl={rusbl} />)

    expect(wrapper.find('h2').text()).toEqual('Fresh Blood 4')
  });

  it('displays the battle logo', () => {
    const wrapper = shallow(<RBB rusbl={rusbl} />)

    expect(
      wrapper.containsMatchingElement(
        <img src="/img/versus.jpg" />
      )
    ).toBe(true)
  });
})



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
