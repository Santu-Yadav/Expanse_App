import ExpanseItem from "./ExpanseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpanseFilter/ExpensesFilter";

const Expanses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter />
        <ExpanseItem
          date={props.Expanse[0].date}
          itenary={props.Expanse[0].title}
          cost={props.Expanse[0].amount}
        />
        <ExpanseItem
          date={props.Expanse[1].date}
          itenary={props.Expanse[1].title}
          cost={props.Expanse[1].amount}
        />
        <ExpanseItem
          date={props.Expanse[2].date}
          itenary={props.Expanse[2].title}
          cost={props.Expanse[2].amount}
        />
      </Card>
    </div>
  );
};

export default Expanses;
