import { Fragment } from "react";
import classes from "../Header/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={`https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A=`}
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Header;
