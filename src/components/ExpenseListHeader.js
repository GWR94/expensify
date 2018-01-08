import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';

export const ExpenseListHeader = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            { expenseCount > 0 ? (
                <h3>You have {expenseCount} {expenseWord}, totalling {formattedTotal}</h3>
            ) : (
                <h3>You have no current expenses</h3>
            )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseListHeader);