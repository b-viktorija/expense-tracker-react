import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  // listens for the change in event and then forwards it to expenses.js through props.onChangedYear; info that gets forwarded is 'enteredYear'; onChangedYear is a property we pass in the expensesFilter item in expenses.js

  const listenChangeHandler = (event) => {
    const enteredYear = event.target.value;
    props.onChangedYear(enteredYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={listenChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
