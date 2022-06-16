import style from "./cartBtns.module.scss";
import { useState } from "react";

export default function CartBtns() {
  const [count, setCount] = useState(0);
  const [itemAdded, setItemAdded] = useState(false);

  const handleDecrease = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      {!itemAdded && <div onClick={() => setItemAdded(true)} className={style.cartBtns}>
        <p >Add to cart</p>
      </div>}
      {itemAdded && <div className={style.cartBtns}>
        <button onClick={handleDecrease}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrease}>+</button>
      </div>}
    </>
  );
}
