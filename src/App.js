
import React from 'react';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE=[

   
        {
            id: 'e1', // variable
            title: 'School fee',
            amount: 250,
            date: new Date(2023, 1,2) // it is object

        },
        {
            id: 'e2',
            title: 'Books',
            amount: 300,
            date: new Date(2023, 1,3)

        },
        {
            id: 'e3',
            title: 'House rent',
            amount: 350,
            date: new Date(2023, 1,4)

        },
        {
            id: 'e4',
            title: 'Car rent',
            amount: 400,
            date: new Date(2023, 1,5)

        }


    ];


const App= () =>{
    // variable method
    // let expenseDate = new Date(2024,1,1); // it is object
    // let expenseTitle ="School fee";
    // let expenseAmount = 300;

    // we will not build vairaible array banayenga
    // 12 variable banane padenga
    // instead of variable // => we will use array of object

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
    

    // expense is object
    const addExpenseHandler =(expense)=>{
        const updatedExpense = [expense, ...expenses];   
        setExpenses(updatedExpense);
    }

    return (
        <div>
            <NewExpense  onAddExpense = {addExpenseHandler}>   </NewExpense>
            <Expenses item = {expenses}></Expenses>

        </div>
       
   
);
}
export default App;
