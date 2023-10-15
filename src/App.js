import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },  {
      id: "e5",
      title: "Groceries",
      amount: 150,
      date: new Date(2022, 6, 10),
    },  {
      id: "e6",
      title: "Buy College Books ",
      amount: 150,
      date: new Date(2022, 6, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("Confirmation: data arrived in App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesArray={expenses}></Expenses>
    </div>
  );
};

export default App;
