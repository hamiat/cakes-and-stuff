import CartBtns from "../Cart/CartBtns";
import style from "./treats.module.scss";

export default function Treat({ title, picOne, picTwo, picThree }) {
 
  return (
    <div className={style.treat}>
    
      <h2 className={style.sectionTitle}>{title}</h2>
      <ul className={style.treatList}>
        <li>
          <img src={picOne.url} alt="Baked goods" />
          <p className={style.treatText}>{picOne.description} </p>
          <CartBtns />
        </li>
        <li>
          <img src={picTwo.url} alt="Baked goods" />
          <p className={style.treatText}>{picTwo.description} </p>
          <CartBtns />
        </li>
        <li>
          <img src={picThree.url} alt="Baked goods" />
          <p className={style.treatText}>{picThree.description} </p>
          <CartBtns />
        </li>
      </ul>
    </div>
  );
}
