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
      className={expanded ? style.mobileHeader : style.header}
      style={
        tabletAndSmaller && !expanded
          ? { background: "transparent" }
          : { background: "#814141", color: "#FAF7F3" }
      }
    >
      <nav className={tabletAndSmaller ? style.navBarMobile : style.navBar}>
        {tabletAndSmaller && (
          <button
            id="hamburger"
            aria-expanded={false}
            aria-label="Menu"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <FontAwesomeIcon aria-hidden={true} icon={faXmark} />
            ) : (
              <FontAwesomeIcon
                color="#814141"
                aria-hidden={true}
                icon={faBars}
              />
            )}
          </button>
        )}

        <div
          className={style.desktopNav}
          style={expanded ? { marginRight: 0 } : { marginRight: "-200vw" }}
        >
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
        </div>
      </nav>
    </header>
  );
}
