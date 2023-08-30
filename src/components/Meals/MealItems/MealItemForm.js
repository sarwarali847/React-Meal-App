import { useRef, useState } from "react";
import classes from "../MealItems/MealItemForm.module.css";
import InputForm from "./InputForm";

const MealItemForm = (props) => {
  //const [amountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    // if (
    //   enteredAmountNumber?.length === 0 ||
    //   enteredAmountNumber < 1 ||
    //   enteredAmountNumber > 5
    // ) {
    // } else {
    //   setIsAmountValid(false);
    // }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputForm
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
// {!amountValid && <p>Please enter valid amount</p>}
export default MealItemForm;
