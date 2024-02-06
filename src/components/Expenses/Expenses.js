import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log('Year data in expenses.js ' + selectedYear)
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear() === parseInt(filteredYear);
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.length === 0 ? (
                <p className="fallback">No expenses found for the selected year.</p>
            ) : (
                filteredExpenses.map((expense, index) => (
                    <ExpenseItem key={index} expenseData={expense} />
                ))
            )}
        </Card>
    );
};

export default Expenses;
