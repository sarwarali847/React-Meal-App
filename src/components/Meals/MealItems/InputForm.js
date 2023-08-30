import { forwardRef } from "react";
import classes from "../MealItems/InputForm.module.css";
const InputForm = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default InputForm;
