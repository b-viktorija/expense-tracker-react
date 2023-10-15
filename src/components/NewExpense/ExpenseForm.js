import react, { useState } from "react";
import "./ExpenseForm.css";

//props is passed as a parm here so that we can access the custom props we defined in other places, in this case in NewExpense; 
const ExpenseForm = (props) => {
  // setting the initial state to an empty input, destructuring so later on change the change stores in the updated State;
  // u can have multiple states in one component, totally separated from each other;
  // if you read the value of the input element, it will always be a string - e.g. a number as a string - thats why all states are initialized by a string;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // equal for the change event as 'onKeyDown' we would use 'event.key' - just the way the event object is structured for this specific event listener we r using;
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // so the page doesn't reload on submit;
    event.preventDefault();

    //Expense Date Object 
    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // calling the prop we defined and passed in NewExpense and executing it, cause here it will just execute on submit; 
    //We are passing the ExpenseData as an argument, so this is the value we receive as the parameter 'enteredExpenseData'
    props.onSaveExpenseData(ExpenseData); 
    // calling the state var on submit and setting it back to an empty string, possible cause of the value={} attribute in the input element;
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* regular html form so far, regular html min max attributes */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* Only years expenses can be set to cause we will set the output to those dates;  */}
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
