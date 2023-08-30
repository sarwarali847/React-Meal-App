import { useContext } from "react";
import classes from "../Cart/Cart.module.css";
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItems";

const Cart = (props) => {
  const cartx = useContext(CartContext);
  const totalAmount = cartx.totalAmount.toFixed(2);
  const hasItems = cartx.items.length > 0;

  const addItemHandler = (item) => {
    cartx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
