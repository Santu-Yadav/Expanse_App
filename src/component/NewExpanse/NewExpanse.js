import ExpanseForm from "./ExpanseForm";
import "./NewExpense.css";

function NewExpanse(props) {
  const saveExpanseDataHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpanse(expanseData);
    console.log(expanseData);
  };

  return (
    <div className="new-expense">
      <ExpanseForm onSaveExpenseData={saveExpanseDataHandler} />
    </div>
  );
}

export default NewExpanse;
