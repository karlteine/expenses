import React from 'react';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      date: new Date(2023, 9, 6),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2023, 9, 6),
      title: 'New jeans',
      price: 99.99
    }
  ]; 

  return (
    <div className="App">
      <h1>My Expenses</h1>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
