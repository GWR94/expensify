import React from 'react';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

numeral.locale('GB');

export const ExpenseListHeader = (props) => (
    <div>
        {props.expenses.length > 0 ? (
            <p>You have {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'}, totalling {numeral(selectExpenseTotal(props.expenses)/100).format('$0,0.00')}</p>
        ) : (
            <p>No expenses</p>
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseListHeader);