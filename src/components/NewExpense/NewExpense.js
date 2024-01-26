import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [formEdit, setFormEdit] = useState(false);

    const startEditingHandler = () => {
        setFormEdit(true);
    };

    const stopEditingHandler = () => {
        setFormEdit(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormEdit(false);
    };

    const cancelExpenseDataHandler = () => {
        setFormEdit(false);
    };

    return (
        <div className='new-expense'>
            {!formEdit && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {formEdit && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
