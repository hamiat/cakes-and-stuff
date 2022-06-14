import style from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
      <h1 className={style.heroTitle}>Cakes and Stuff</h1>
      <div className={style.heroText}>
        <p>In the mood for something sweet?</p>
        <p>You've come to the right place!</p>
      </div>
    </section>
  );
}
