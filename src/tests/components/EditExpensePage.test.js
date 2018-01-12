import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';
import Modal from 'react-modal';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(

    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

// test('should handle startRemoveExpense', () => {
//   const startRemoveExpense = jest.fn();
//   const closeModal = jest.fn();
//   const wrapper2 = shallow(
//     <EditExpensePage
//       startEditExpense={startEditExpense}
//       startRemoveExpense={startRemoveExpense}
//       openModal={openModal}
//       history={history}
//       expense={expenses[2]}
//       modalIsOpen={true}
//     />);
//   wrapper2.find('.button__success').simulate('click');
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startRemoveExpense).toHaveBeenCalledWith(expenses[2]);
// });
