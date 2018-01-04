import NotFound from '../../components/NotFound';
import React from 'react';
import { shallow } from 'enzyme';

test('should render not found component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});