import style from "./treats.module.scss";

export default function Treat({ title, picOne, picTwo, picThree }) {
  return (
    <div className={style.treat}>
      <h2>{title}</h2>
      <ul className={style.treatList}>
        <li>
          <img src={picOne} alt="Baked goods" />
          <p>Homey carrot cake with cinnamon. </p>
          <div className={style.addToCart}></div>
        </li>
        <li>
          <img src={picTwo} alt="Baked goods" />
          <p>Homey carrot cake with cinnamon. </p>
        </li>
        <li>
          <img src={picThree} alt="Baked goods" />
          <p>Homey carrot cake with cinnamon. </p>
        </li>
      </ul>
    </div>
  );
}
