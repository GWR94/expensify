import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense and return correct values', () => {
    const action = editExpense('123abc', {note: "new note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {note: "new note value"}
    });
});

test('should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '109500',
        createdAt: 1000,
        note: "Last months rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup addExpense action object with default values', () => {
    const expenseDefault = {
        description: '',
        amount: '',
        createdAt: '',
        note: ''
    };
    const action = addExpense(expenseDefault);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseDefault,
            id: expect.any(String)
        }
    });
});