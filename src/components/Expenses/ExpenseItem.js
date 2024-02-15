import React from 'react';
import { useState } from 'react'; // function import
import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
const ExpenseItem= (props)=> {


  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-description">
        <h2>{props.title}</h2>
        <div className="expense-amount">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;


