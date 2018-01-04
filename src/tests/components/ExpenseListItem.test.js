import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});