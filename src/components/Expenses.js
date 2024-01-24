import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {

    return (
        <div className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} expenseData={expense} />
            ))}
        </div>
    );
}

export default Expenses;
