import './App.css'
import { useState } from 'react';
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses]=useState([
    {id:1, description:"Packs of sugar", amount: 20, category:"Groceries"},
    {id:2, description:"Box of pizza bagels", amount: 25, category:"groceries"},
    {id:3, description:"Carton of milk", amount: 10, category:"Groceries"},
    {id:4, description:"Electricity bill", amount: 100,category:"Utilities"},
    {id:5, description:"Packs of sugar", amount: 5,category:"Groceries"},
    {id:6, description:"Spotify subscription", amount: 40, category:"Entertainment"},
  ]);

  return(
    <>

      <ExpenseList items={expenses}/>

    </>
  );
}

export default App
