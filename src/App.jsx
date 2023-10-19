import './App.css'
import { useState } from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import CategoryForm from './components/CategoryForm';


function App() {
  const [expenses, setExpenses]=useState([]);
  const [categories, setCategories] = useState([]);

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

    // Add the new category to the Set of categories
    setCategories(([...categories, newExpense.category]));
  };

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const filterItem = (selectedCategory) => {
    setExpenses(expenses.filter(expense => expense.category == selectedCategory))
  }

  return(
    <>
      <CategoryForm addCategory={addCategory} />
      <ExpenseForm addExpense={addExpense} categories={categories}/>
      <ExpenseFilter filterItem = {filterItem} categories={categories}/>
      <ExpenseList items={expenses} deleteItem={deleteItem} categories={categories} />

    </>
  );
}

export default App
