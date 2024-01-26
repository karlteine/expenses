import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.length === 0 ? (
                <p className="no-year">No expenses found for the selected year.</p>
            ) : (
                filteredExpenses.map((expense, index) => (
                    <ExpenseItem key={index} expenseData={expense} />
                ))
            )}
        </Card>
    );
};

export default Expenses;
