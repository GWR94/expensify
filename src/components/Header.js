import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="active">Add Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>u
        </ul>
    </header>
);

export default Header;