import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configure-store';
import AppRouter from './routers/AppRouter';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 24000}));
store.dispatch(addExpense({description: "Rent", amount: 20000, createdAt: 1000}));
store.dispatch(addExpense({description: "Gas Bill", amount: 10000}));

store.dispatch(setTextFilter());

// setTimeout(() => {
//     store.dispatch(setTextFilter("BILL"));
// }, 3000);


const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);


console.log(store.getState());

const jsx = (
    <Provider store={store}>

        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
