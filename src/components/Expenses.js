import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
      <div className="card expenses">
        {props.expenses.map((expense, index) => (
          <ExpenseItem key={index} expenseData={expense} />
        ))}
      </div>
    );
  }

export default Expenses;
