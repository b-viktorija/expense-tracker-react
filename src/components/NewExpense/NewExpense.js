import react from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  // name of parameter up to you; enteredExpenseData is the object we expect to be entered in the ExpenseForm.js as the expenseData obj; 
const saveExpenseDataHandler = (enteredExpenseData) => {
  const ExpenseData = {
    //pulls out all key value pairs and adds them to this new obj and adds id property; 
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  // passing this data to the App.js file; u can only pass on through one parent-child or child-parent, so this has to be done twice; this forwards the enriched ExpenseData to App.js, as the parameter named 'expense' 
  props.onAddExpense(ExpenseData); 
};


  return (
    <div className='new-expense'>
      {/* the prop has the function above as a value, not calling it tho, the function here is just passed to expense form */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  ); 
}

export default NewExpense; 