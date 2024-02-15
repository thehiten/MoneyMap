import './ExpenseForm.css';
import React, { useState } from "react";

const ExpenseForm = (props) => {
    // variable and function declarations
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // event handlers
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();


        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
         
        props.onSaveExpenseData(expenseData);

       

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="text" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense_actions">
                <button type="submit" onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
