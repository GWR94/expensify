import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';
import moment from "moment/moment";

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense from state', () => {
    const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: '1'});
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense from state if ID is not found', () => {
    const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: '6'});
    expect(state).toEqual(expenses);
});

test('should add expense to state', () => {
    const expense = {
        id: '2',
        description: 'coffee on friday',
        note: '',
        amount: 200,
        createdAt: 400
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: '7',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});