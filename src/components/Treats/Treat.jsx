import {
  opacityVariants,
  treatsTitleVariants,
  containerVariants,
} from "../../utils/Animations";
import CartBtns from "../Cart/CartBtns";
import style from "./treats.module.scss";
import { motion } from "framer-motion/dist/framer-motion";

export default function Treat({ title, picOne, picTwo, picThree }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.1 }}
      className={style.treat}
    >
      <motion.h2 variants={treatsTitleVariants} className={style.sectionTitle}>
        {title}
      </motion.h2>
      <ul className={style.treatList}>
        <li>
          <motion.img
            variants={opacityVariants}
            src={picOne.url}
            alt="Baked goods"
          />
          <h4>
            Yummy Yum <span>4 &#164;</span>
          </h4>
          <p className={style.treatText}>{picOne.description} </p>
          <CartBtns />
        </li>
        <li>
          <motion.img
            variants={opacityVariants}
            src={picTwo.url}
            alt="Baked goods"
          />
          <h4>
            Yummy Yum <span>8 &#164;</span>
          </h4>
          <p className={style.treatText}>{picTwo.description} </p>
          <CartBtns />
        </li>
        <li>
          <motion.img
            variants={opacityVariants}
            src={picThree.url}
            alt="Baked goods"
          />
          <h4>
            Yummy Yum <span>12 &#164;</span>
          </h4>
          <p className={style.treatText}>{picThree.description} </p>
          <CartBtns />
        </li>
      </ul>
    </motion.div>
  );
}
