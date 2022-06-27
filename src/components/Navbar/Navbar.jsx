import style from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const tabletAndSmaller = useMediaQuery({ query: "(max-width: 640px)" });
  const [expanded, setExpanded] = useState(false);

  return (
    <header
      style={
        tabletAndSmaller
          ? { background: "transparent", boxShadow: "none" }
          : { background: "#814141" }
      }
    >
      {tabletAndSmaller && (
        <nav className={style.hamMenu}>
          <button
            id="hamburger"
            aria-expanded={false}
            aria-label="Menu"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <FontAwesomeIcon aria-hidden={true} icon={faXmark} />
            ) : (
              <FontAwesomeIcon aria-hidden={true} icon={faBars} />
            )}
          </button>
        </nav>
      )}
      {!tabletAndSmaller && (
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
      )}
    </header>
  );
}
