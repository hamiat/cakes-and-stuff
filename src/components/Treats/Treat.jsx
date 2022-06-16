import CartBtns from "../Cart/CartBtns";
import style from "./treats.module.scss";

export default function Treat({ title, picOne, picTwo, picThree }) {
  return (
    <div className={style.treat}>
      <h2>{title}</h2>
      <ul className={style.treatList}>
        <li>
          <img src={picOne} alt="Baked goods" />
          <p className={style.treatText}>Homey carrot cake with cinnamon. </p>
          <CartBtns />
        </li>
        <li>
          <img src={picTwo} alt="Baked goods" />
          <p className={style.treatText}>Homey carrot cake with cinnamon. </p>
          <CartBtns />
        </li>
        <li>
          <img src={picThree} alt="Baked goods" />
          <p className={style.treatText}>Homey carrot cake with cinnamon. </p>
          <CartBtns />
        </li>
      </ul>
    </div>
  );
}
