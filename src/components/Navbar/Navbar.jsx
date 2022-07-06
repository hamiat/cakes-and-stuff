import style from "./navbar.module.scss";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
import { navItemVariants } from "../../utils/Animations";

export default function Navbar() {
  const tabletAndSmaller = useMediaQuery({ query: "(max-width: 640px)" });
  const [expanded, setExpanded] = useState(false);

  return (
    <header
      className={expanded ? style.mobileHeader : style.header}
      style={
        tabletAndSmaller && !expanded
          ? { background: "transparent", boxShadow: "none" }
          : { background: "#814141", color: "#FAF7F3" }
      }
    >
      <nav className={tabletAndSmaller ? style.navBarMobile : style.navBar}>
        {tabletAndSmaller && (
          <button
            className={style.hamBtn}
            id="hamburger"
            aria-expanded={false}
            aria-label="Menu"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <span className={style.xMark}>
                <FontAwesomeIcon aria-hidden={true} icon={faXmark} />
              </span>
            ) : (
              <span className={style.hamBars}>
                {" "}
                <FontAwesomeIcon
                  color="#814141"
                  aria-hidden={true}
                  icon={faBars}
                />
              </span>
            )}
          </button>
        )}

        <div
          className={style.desktopNav}
          style={expanded ? { marginRight: 0 } : { marginRight: "-200vw" }}
        >
          <ul className={style.navList}>
            <motion.li variants={navItemVariants} whileHover="hover">
              <a href="/">Home</a>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover="hover">
              <a href="#about">About</a>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover="hover">
              <a href="#treats">Treats</a>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover="hover">
              <a href="#catering">Catering</a>
            </motion.li>
          </ul>
          <motion.div
            variants={navItemVariants}
            whileHover="hover"
            className={style.cart}
          >
            <a href="/">
              Shop <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
