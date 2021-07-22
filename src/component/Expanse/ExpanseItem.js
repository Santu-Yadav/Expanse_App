import React, { useState } from "react";
import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";
import Card from "../UI/Card";

const ExpanseItem = (props) => {
  console.log(useState()); /* [undefined, ƒ]*/

  const [title, setTitle] = useState(props.itenary);
  /* const [title, setTitle] = [props.itenary, ƒ]
     title = props.itenary
     setTitle = ƒ // this is function
  */

  function clickHandler() {
    setTitle("Updated!");
  }

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
