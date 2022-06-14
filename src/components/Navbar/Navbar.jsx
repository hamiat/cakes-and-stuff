import style from "./navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <nav className={style.navBar}>
        <ul className={style.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Treats</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className={style.cart}>
          <a href="/">Cart</a>
        </div>
      </nav>
    </header>
  );
}
