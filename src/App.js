
import React from 'react';
import ExpenseForm from './ExpenseForm';
import './App.scss';

const App = () => {
    return (
        <div data-test="component-app" className="app-container"><ExpenseForm /></div>
    )
};

export default App;