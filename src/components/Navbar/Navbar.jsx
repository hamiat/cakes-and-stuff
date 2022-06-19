import style from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header>
      <nav className={style.navBar}>
        <ul className={style.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#treats">Treats</a>
          </li>
          <li>
            <a href="#catering">Catering</a>
          </li>
        </ul>
        <div className={style.cart}>
          <a href="/">
            Shop <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </nav>
    </header>
  );
}
