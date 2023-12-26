import React, { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    console.log("expenses.js")
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangedYear={filterChangeHandler}
        />

        {/* map out expenses array; 
        irl, we would import this from an api not the app.js 
        */}
        {props.expensesArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
