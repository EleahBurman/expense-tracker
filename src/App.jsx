import './App.css'
import { useState } from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses]=useState([]);

  const addExpense = (newExpense) => {
    // Convert the amount to a number
    newExpense.amount = parseFloat(newExpense.amount);
    // Create a new expense with a unique ID
    const expenseWithId = {
      id: expenses.length + 1, // This assumes each ID is unique and incremental
      ...newExpense,
    };

    // Update the expenses state by adding the new expense
    setExpenses([...expenses, expenseWithId]);
  };
  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const filterItem = (selectedCategory) => {
    setExpenses(expenses.filter(expense => expense.category == selectedCategory))
  }

  return(
    <>
      <ExpenseForm addExpense = {addExpense}/>
      <ExpenseFilter filterItem = {filterItem}/>
      <ExpenseList items={expenses} deleteItem={deleteItem}/>

    </>
  );
}

export default App
