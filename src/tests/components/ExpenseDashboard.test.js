import { shallow } from 'enzyme';
import React from 'react';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('should render expense dashboard and child components', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
});