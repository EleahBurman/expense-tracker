import './App.css'
import { useState } from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses]=useState([
    {id:1, description:"Packs of sugar", amount: 20, category:"Groceries"},
    {id:2, description:"Box of pizza bagels", amount: 25, category:"Groceries"},
    {id:3, description:"Carton of milk", amount: 10, category:"Groceries"},
    {id:4, description:"Electricity bill", amount: 100,category:"Utilities"},
    {id:5, description:"Packs of sugar", amount: 5,category:"Groceries"},
    {id:6, description:"Spotify subscription", amount: 40, category:"Entertainment"},
  ]);

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
