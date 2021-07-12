import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";

function Expanses(props) {
  return (
    <div className="expense-item">
      <div>
        <ExpanseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.itenary}</h2>
        <div className="expense-item__price">{props.cost}</div>
      </div>
    </div>
  );
}

export default Expanses;
