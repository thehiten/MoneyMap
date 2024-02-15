// Expenses.js
import React from 'react';
import './Expenses.css'; // Import the CSS file
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses=(props)=> {
    return (
        <Card className="expenses-container"> 
        {

            props.item.map(
                expense =>(
                    <ExpenseItem 
                         date={expense.date} 
                         title={expense.title} 
                         amount={expense.amount} />
             )
        )

        }
        </Card>
    );
}

export default Expenses;

  