import Card from '../UI/Card';

const ExpenseDate = (props) => {
    const day = new Date(props.date).toLocaleString('en-US', { day: '2-digit' });
    const month = new Date(props.date).toLocaleString('en-US', { month: 'long' });
    const year = new Date(props.date).getFullYear();

    return (
        <Card className="expense-date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </Card>
    );
}

export default ExpenseDate;
