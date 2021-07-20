import React, { useState } from "react";
import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";
import Card from "../UI/Card";

const ExpanseItem = (props) => {
  console.log(useState());

  function clickHandler() {
    setTitle("Updated!");
    console.log(title);
  }

  const [title, setTitle] = useState(props.itenary);

  return (
    <Card className="expense-item">
      <div>
        <ExpanseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.cost}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpanseItem;
