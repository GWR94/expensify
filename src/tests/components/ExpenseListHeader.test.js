import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListHeader } from '../../components/ExpenseListHeader';

test('should render the ExpenseListHeader component with the correct value with 1 expense', () => {
    const wrapper = shallow(<ExpenseListHeader expenseCount={1} expenseTotal={3499} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the ExpenseListHeader component with the correct value with multiple expenses', () => {
    const wrapper = shallow(<ExpenseListHeader expenseCount={2} expenseTotal={10299} />);
    expect(wrapper).toMatchSnapshot();
});