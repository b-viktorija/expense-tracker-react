import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

// arrow function called on click later 
// convention : if triggered upon an event, the convention is to end the name with 'Handler' - clear that this function isnt called by us but its called by react when the even occurs; 


const ExpenseItem = (props1) => {

  // destructuring - assigning the variables and giving them names at the same time;
  // use state returns two things in an array, the variable (title) and the function that changes  the varialbe, here we are just taking them out of the array and assigning them to variables;
  const [title, setTitle] = useState(props1.title);
  // console.log(useState(props1.title)); - gives us the value and an empty function ; we are setting the function ourselves t.est we are passing the new value as a parameter for the function; 

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title); // still logs the same title cause it takes some time to update;
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props1.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props1.amount}</div>
      </div>
      {/* just the function name, not actually calling it here cause it would get executed without waiting for the click when the jsx is loaded */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
