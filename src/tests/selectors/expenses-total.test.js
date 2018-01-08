import selectedExpenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectedExpenseTotal([]);
    expect(res).toBe(0);
});

test('should add one expenses and return the correct result', () => {
    const res = selectedExpenseTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should add multiple expenses and return the correct result', () => {
    const res = selectedExpenseTotal(expenses);
    expect(res).toBe(114195);
});