import React from 'react';
import ExpenseDate from './ExpenseDate';

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-item__description">
        <h2>{props.expenseData.title}</h2>
        <div className="expense-item__price">{props.expenseData.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;