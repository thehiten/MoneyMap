import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props)=>{


    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData, // now id included
            id: Math.random().toString()
        }
        console.log(expenseData);  
        props.onAddExpense(expenseData);
    
    };

   
    return(

       
        <div className="new-expense">
            <form>
                <ExpenseForm
                 onSaveExpenseData={saveExpenseDataHandler}>
                 </ExpenseForm>
            </form>
        </div>
    );


}

export default NewExpense;