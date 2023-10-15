import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangedYear={filterChangeHandler}
        />

        <ExpenseItem
          title={props.expensesArray[0].title}
          date={props.expensesArray[0].date}
          amount={props.expensesArray[0].amount}
        />
        <ExpenseItem
          title={props.expensesArray[1].title}
          date={props.expensesArray[1].date}
          amount={props.expensesArray[1].amount}
        />
        <ExpenseItem
          title={props.expensesArray[2].title}
          date={props.expensesArray[2].date}
          amount={props.expensesArray[2].amount}
        />
        <ExpenseItem
          title={props.expensesArray[3].title}
          date={props.expensesArray[3].date}
          amount={props.expensesArray[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
